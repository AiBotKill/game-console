package botkill.gameconsole

import grails.transaction.Transactional
import nats.client.Message
import nats.client.spring.Subscribe
import org.codehaus.groovy.grails.web.json.JSONObject

import javax.annotation.PostConstruct

@Transactional
class NatsSubscriberService {

    def nats
    static lazyInit = false

    Map<String, Team> connectedAIs = [:]

    @PostConstruct
    def init() {
        startPinger()
    }

    @Subscribe("ping")
    def ping(Message message) {
        String test = "";
    }

    def startPinger() {
        Thread.start {
            while(true) {
                nats.publish("ping", "{\"ping\":\"gameConsole\",\"time\":\"" + new Date() + "\"}")
                sleep 5000
            }
        }
    }

    Team getConnectedAI(String connectionId) {
        return connectedAIs[connectionId]
    }

    @Subscribe("registerAI")
    def registerAI(Message message) {
        JSONObject registerMsg = new JSONObject(message.getBody())
        String id = registerMsg.getString("teamId")
        Team t = Team.findByBotId(id)
        if (t) {
            println("Team ${t.name} registered!")
            String connectionId = UUID.randomUUID().toString();
            message.reply("{\"type\":\"reply\", \"status\":\"ok\", \"id\":\"${connectionId}\"}")

            t.botVersion = connectionId.split("-")[0]
            t.connectionId = connectionId
            connectedAIs["${connectionId}"] = t
        } else {
            println("Team not found with id ${id}")
            message.reply("{\"type\":\"reply\",\"status\":\"error\", \"id\":\"${id}\", \"error\":\"Team not found\"}")
        }
    }

    @Subscribe("unregisterAI")
    def unregisterAI(Message message) {
        JSONObject unregisterMsg = new JSONObject(message.getBody())
        String id = unregisterMsg.getString("botId")
        Team t = getConnectedAI(id)
        if (t) {
            println("Team ${t.name} unregistered!")
            connectedAIs.remove(id)
        }
    }
}

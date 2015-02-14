package botkill.gameconsole

import grails.transaction.Transactional
import nats.client.Message
import nats.client.spring.Subscribe
import org.codehaus.groovy.grails.web.json.JSONObject

@Transactional
class NatsSubscriberService {
    static lazyInit = false

    def connectedAIs = [:]

    @Subscribe("ping")
    def ping(Message message) {
        String test = "";
    }

    @Subscribe("registerAI")
    def registerAI(Message message) {
        JSONObject registerMsg = new JSONObject(message.getBody())
        String id = registerMsg.getString("botId")
        String version = registerMsg.getString("version")
        Team t = Team.findByBotId(id)
        if (t) {

            if (!connectedAIs.containsKey("${t.name} - ${version}")) {
                println("Team ${t.name} registered!")
                message.reply("{\"status\":\"OK\", \"id\":\"${t.botId}\"")
                connectedAIs["${t.name} - ${version}"] = t
            } else {
                println("Team with id ${id} and version ${version} already registered")
                message.reply("\"{\"status\"\":\"error\", \"id\":\"${id}\", \"error\":\"Team already registered with given version\"}")
            }
        } else {
            println("Team not found with id ${id}")
            message.reply("{\"status\":\"error\", \"id\":\"${id}\", \"error\":\"Team not found\"}")
        }
    }

    @Subscribe("unregisterAI")
    def unregisterAI(Message message) {
        JSONObject unregisterMsg = new JSONObject(message.getBody())
        String id = unregisterMsg.getString("botId")
        String version = unregisterMsg.getString("version")
        Team t = Team.findByBotId(id)
        if (t && connectedAIs.containsKey("${t.name} - ${version}")) {
            println("Team ${t.name} unregistered!")
            connectedAIs.remove("${t.name} - ${version}")
        }
    }
}

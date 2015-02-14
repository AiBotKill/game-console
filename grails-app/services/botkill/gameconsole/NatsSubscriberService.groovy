package botkill.gameconsole

import grails.transaction.Transactional
import nats.client.Message
import nats.client.spring.Subscribe
import org.codehaus.groovy.grails.web.json.JSONObject

@Transactional
class NatsSubscriberService {
    static lazyInit = false

    Map<String, Team> connectedAIs = [:]

    @Subscribe("ping")
    def ping(Message message) {
        String test = "";
    }

    Team getConnectedAI(String connectionId) {
        return connectedAIs[connectionId]
    }

    private boolean botIdAndVersionAlreadyConnected(String botId, String version) {
        connectedAIs.each { String connectionId, Team team ->
            if (team.botId.equals(botId) && team.botVersion.equals(version)) {
                return true
            }
        }
        return false
    }

    @Subscribe("registerAI")
    def registerAI(Message message) {
        JSONObject registerMsg = new JSONObject(message.getBody())
        String id = registerMsg.getString("botId")
        String version = registerMsg.getString("version")
        Team t = Team.findByBotId(id)
        if (t) {

            if (!botIdAndVersionAlreadyConnected(id, version)) {
                println("Team ${t.name} registered!")
                String connectionId = UUID.randomUUID().toString();
                message.reply("{\"status\":\"ok\", \"id\":\"${connectionId}\"}")

                t.botVersion = version
                t.connectionId = connectionId
                connectedAIs["${connectionId}"] = t
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
        Team t = getConnectedAI(id)
        if (t) {
            println("Team ${t.name} unregistered!")
            connectedAIs.remove(id)
        }
    }
}

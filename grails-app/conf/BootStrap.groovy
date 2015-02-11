import botkill.gameconsole.Game
import botkill.gameconsole.GameTeam
import botkill.gameconsole.Team
import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->

        JSON.registerObjectMarshaller(Team) { Team t ->
            return ["name": t.name, "botId":t.botId]
        }

        JSON.registerObjectMarshaller(GameTeam) { GameTeam gt ->
            def result = []
            gt.teams.each { Team t ->
                result << ["team": gt.color.ordinal(), "botId": t.botId]
            }
            return result
        }

        JSON.registerObjectMarshaller(Game) { Game g ->
            def teams = g.gameTeams.collect { GameTeam gt ->
                gt.teams.collect { Team t ->
                    ["team": gt.color.ordinal(), "botId": t.botId]
                }
            }
            return ["timeLimit": g.roundTime, "environment": g.environment.toString(), "players":teams.flatten(), "mode": g.mode.toString(), "darkness": g.darkness]
        }

    }
    def destroy = {
    }
}

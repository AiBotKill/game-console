import botkill.gameconsole.Game
import botkill.gameconsole.GameTeam
import botkill.gameconsole.Team
import botkill.gameconsole.Tile
import botkill.gameconsole.Vector2d
import grails.converters.JSON

class BootStrap {

    def init = { servletContext ->

        JSON.registerObjectMarshaller(Tile) { Tile t ->
            return ["type": t.Type, "x":t.X, "y":t.Y]
        }

        JSON.registerObjectMarshaller(Vector2d) { Vector2d v ->
            return ["x":v.x, "y":v.y]
        }

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
                ["team": gt.color.ordinal(), "botId": gt.connectionId]
            }
            return ["timeLimit": g.roundTime, "environment": g.environment.toString(), "tiles":g.tileModels, "players":teams, "mode": g.mode.toString(), "darkness": g.darkness]
        }

    }
    def destroy = {
    }
}

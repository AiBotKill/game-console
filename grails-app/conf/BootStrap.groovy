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
            return ["team": gt.color.ordinal(), "botId": gt.team.botId, "name": gt.team.name]
        }

        JSON.registerObjectMarshaller(Game) { Game g ->
            return ["timeLimit": g.roundTime, "environment": g.environment.toString(), "gameArea":g.gameArea, "startingPositions":g.startingPositions, "tiles":g.tileModels, "players":g.gameTeams, "mode": g.mode.toString(), "darkness": g.darkness]
        }

    }
    def destroy = {
    }
}

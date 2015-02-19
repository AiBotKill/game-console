package botkill.gameconsole

import botkill.gameconsole.enums.GameState
import botkill.gameconsole.enums.TeamColor
import grails.converters.JSON
import nats.client.Message
import nats.client.MessageHandler
import org.codehaus.groovy.grails.web.json.JSONObject

import java.util.concurrent.TimeUnit

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class GameController {
    def natsSubscriberService
    def nats
    def mapService

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Game.list(params), model: [gameInstanceCount: Game.count()]
    }

    def show(Game gameInstance) {
        println((gameInstance as JSON).toString())
        respond gameInstance
    }

    def create() {
        respond new Game(params), model: [connectedAIs: natsSubscriberService.getConnectedAIs()]
    }

    @Transactional
    def save(Game gameInstance) {
        if (gameInstance == null) {
            notFound()
            return
        }

        int maxTeams = TeamColor.values().size();
        params.list("teamAssignments").each {
            if (!it.equals("") && it.toString().contains(":")) {
                def connectionIdAndTeamNumber = it.split(":")
                def connectionId = connectionIdAndTeamNumber[0] as String
                def team = (connectionIdAndTeamNumber[1] as int) - 1

                GameTeam gameTeam = new GameTeam()
                gameTeam.color = TeamColor.values()[team%maxTeams]
                gameTeam.game = gameInstance
                Team connectedTeam = natsSubscriberService.getConnectedAI(connectionId)
                Team t = Team.findById(connectedTeam.id)
                gameTeam.botVersion = connectedTeam.botVersion
                gameTeam.team = t
                gameTeam.connectionId = connectionId

                gameInstance.addToGameTeams(gameTeam)
            }
        }

        gameInstance.validate()
        if (gameInstance.hasErrors()) {
            Map<TeamColor, List<GameTeam>> gameTeams = [:]
            gameInstance.gameTeams.each { GameTeam gt ->
                if (gameTeams.containsKey(gt.color)) {
                    gameTeams[gt.color] << gt
                } else {
                    gameTeams[gt.color] = []
                    gameTeams[gt.color] << gt
                }
            }
            respond gameInstance.errors, view: 'create', model: ["gameTeams":gameTeams]
            return
        }

        gameInstance.save flush: true

        log.debug("Created game ${gameInstance.id}")

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'game.label', default: 'Game'), gameInstance.id])
                redirect controller: "game", action: "index"
            }
            '*' { respond gameInstance, [status: CREATED] }
        }
    }

    @Transactional
    def start(Game gameInstance) {
        if (gameInstance == null) {
            notFound()
            return
        }

        // Check if a bots assigned to this game are currently playing in another game
        def alreadyRunningBots = []
        def games = Game.findAllByState(GameState.STARTED)
        for (GameTeam gt : gameInstance.gameTeams) {
            for (Game runningGame : games) {
                for (GameTeam runningGt : runningGame.gameTeams) {
                    if (gt.connectionId.equals(runningGt.connectionId)) {
                        alreadyRunningBots << "${gt.team.name} - ${gt.botVersion}"
                    }
                }
            }
        }

        if (alreadyRunningBots.size() > 0) {
            flash.message = message(code: 'game.botsAlreadyRunning', default: "Couldn't start game because these bots are currently in another game: ${alreadyRunningBots.join(", ")}", args: [alreadyRunningBots.join(", ")])
        } else {
            gameInstance.start()
        }


        redirect controller: "game", action: "index"
    }

    def edit(Game gameInstance) {

        respond gameInstance
    }

    @Transactional
    def delete(Game gameInstance) {

        if (gameInstance == null) {
            notFound()
            return
        }

        if (gameInstance.state.equals(GameState.STARTED)) {
            nats.request("${gameInstance.publicId}.end", "{}", 10, TimeUnit.SECONDS, new MessageHandler() {
                @Override
                public void onMessage(Message message) {
                }
            })
        }

        gameInstance.delete flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'Game.label', default: 'Game'), gameInstance.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'game.label', default: 'Game'), params.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NOT_FOUND }
        }
    }
}

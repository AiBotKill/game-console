package botkill.gameconsole

import botkill.gameconsole.enums.GameMode
import botkill.gameconsole.enums.GameState
import botkill.gameconsole.enums.TeamColor

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class GameController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Game.list(params), model: [gameInstanceCount: Game.count()]
    }

    def show(Game gameInstance) {
        respond gameInstance
    }

    def create() {
        // TODO: Fetch online AIs from NATS

        respond new Game(params)
    }

    @Transactional
    def save(Game gameInstance) {
        if (gameInstance == null) {
            notFound()
            return
        }

        def teams = [:]
        // If mode is TEAM, then parse which Team will go into what GameTeam
        if (gameInstance.mode.equals(GameMode.TEAM)) {
            params.list("teamAssignments").each {
                if (!it.equals("")) {
                    def aiIdAndTeamNumber = it.split(":")
                    def aiId = aiIdAndTeamNumber[0]
                    def team = (aiIdAndTeamNumber[1] as int) - 1
                    // If team is not yet created
                    if (!teams[team]) {
                        GameTeam gameTeam = new GameTeam()
                        gameTeam.color = TeamColor.values()[team]
                        gameTeam.game = gameInstance
                        gameTeam.addToTeams(Team.findById((aiId as long)))
                        teams[team] = gameTeam
                    }
                    // Else, get the team and add ai to it
                    else {
                        GameTeam gameTeam = teams[team] as GameTeam
                        gameTeam.addToTeams(Team.findById((aiId as long)))
                    }
                }
            }
        } else {
            // Each AI will go to separate game team
            params.list("teams").eachWithIndex { aiId, i ->
                GameTeam gameTeam = new GameTeam()
                gameTeam.color = TeamColor.values()[i]
                gameTeam.game = gameInstance
                gameTeam.addToTeams(Team.findById(aiId))
                teams[i] = gameTeam
            }
        }

        teams.each { teamNumber, gameTeam ->
            gameInstance.addToGameTeams(gameTeam)
        }

        gameInstance.validate()
        if (gameInstance.hasErrors()) {
            respond gameInstance.errors, view: 'create'
            return
        }

        gameInstance.save flush: true

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

        gameInstance.state = GameState.STARTED
        gameInstance.save flush:true

        // TODO: Send "start game" -message to NATS

        redirect controller: "game", action: "index"
    }

    def edit(Game gameInstance) {

        respond gameInstance
    }

    @Transactional
    def update(Game gameInstance) {
        if (gameInstance == null) {
            notFound()
            return
        }

        GameTeam.deleteAll(gameInstance.gameTeams)
        gameInstance.gameTeams = []

        def teams = [:]
        // If mode is TEAM, then parse which Team will go into what GameTeam
        if (gameInstance.mode.equals(GameMode.TEAM)) {
            params.list("teamAssignments").each {
                if (!it.equals("")) {
                    def aiIdAndTeamNumber = it.split(":")
                    def aiId = aiIdAndTeamNumber[0]
                    def team = (aiIdAndTeamNumber[1] as int) - 1
                    // If team is not yet created
                    if (!teams[team]) {
                        GameTeam gameTeam = new GameTeam()
                        gameTeam.color = TeamColor.values()[team]
                        gameTeam.game = gameInstance
                        gameTeam.addToTeams(Team.findById((aiId as long)))
                        teams[team] = gameTeam
                    }
                    // Else, get the team and add ai to it
                    else {
                        GameTeam gameTeam = teams[team] as GameTeam
                        gameTeam.addToTeams(Team.findById((aiId as long)))
                    }
                }
            }
        } else {
            // Each AI will go to separate game team
            params.list("teams").eachWithIndex { aiId, i ->
                GameTeam gameTeam = new GameTeam()
                gameTeam.color = TeamColor.values()[i]
                gameTeam.game = gameInstance
                gameTeam.addToTeams(Team.findById(aiId))
                teams[i] = gameTeam
            }
        }

        teams.each { teamNumber, gameTeam ->
            gameInstance.addToGameTeams(gameTeam)
        }

        if (gameInstance.hasErrors()) {
            respond gameInstance.errors, view: 'edit'
            return
        }

        gameInstance.save flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'Game.label', default: 'Game'), gameInstance.id])
                redirect gameInstance
            }
            '*' { respond gameInstance, [status: OK] }
        }
    }

    @Transactional
    def delete(Game gameInstance) {

        if (gameInstance == null) {
            notFound()
            return
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

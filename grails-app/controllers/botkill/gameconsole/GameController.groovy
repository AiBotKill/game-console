package botkill.gameconsole

import botkill.gameconsole.enums.TeamColor
import grails.converters.JSON

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

        def teams = [:]
        int teamCount = 0
        int maxTeams = TeamColor.values().size();
        params.list("teamAssignments").each {
            if (!it.equals("") && it.toString().contains(":")) {
                def connectionIdAndTeamNumber = it.split(":")
                def connectionId = connectionIdAndTeamNumber[0] as String
                def team = (connectionIdAndTeamNumber[1] as int) - 1
                // If team is not yet created
                if (!teams[team]) {
                    GameTeam gameTeam = new GameTeam()
                    gameTeam.color = TeamColor.values()[team%maxTeams]
                    gameTeam.game = gameInstance
                    Team.withSession {
                        Team t = natsSubscriberService.getConnectedAI(connectionId).merge()
                        gameTeam.addToTeams(t)
                    }

                    gameTeam.connectionId = connectionId
                    teams[team] = gameTeam
                    teamCount++
                }
                // Else, get the team and add ai to it
                else {
                    GameTeam gameTeam = teams[team] as GameTeam
                    gameTeam.addToTeams(Team.findById((aiId as long)))
                }
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

        GameMap map = mapService.getMap(teamCount)
        gameInstance.startingPositions = map.getStartingPositions()
        gameInstance.gameArea = map.getGameArea()
        gameInstance.tiles = map.getTiles()

        gameInstance.save flush: true

        nats.publish("createGame", (gameInstance as JSON).toString())

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

        gameInstance.start()

        redirect controller: "game", action: "index"
    }

    // TODO: Remove when tested
    @Transactional
    def end(Game gameInstance) {
        if (gameInstance == null) {
            notFound()
            return
        }

        // Generate some results
        Random random = new Random()
        List<GameResult> results = new ArrayList<>()
        int aisLeft = gameInstance.AICount
        gameInstance.gameTeams.each { GameTeam gt ->
            gt.teams.each { Team t ->
                GameResult gr = new GameResult()
                gr.team = t
                gr.survived = random.nextInt(2) == 0
                gr.kills = random.nextInt(Math.max(aisLeft - 1, 1))
                aisLeft = gr.kills
                gr.damageDone = random.nextInt(1000)
                results.add(gr)
            }
        }

        Tournament t = Tournament.createCriteria().get {
            games {
                eq('id', gameInstance.id)
            }
        }
        if (t) {
            t.endCurrentGame(results)
            t.startNextGame()
        } else {
            gameInstance.end(results)
        }

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
        int maxTeams = TeamColor.values().size();
        params.list("teamAssignments").each {
            if (!it.equals("")) {
                def aiIdAndTeamNumber = it.split(":")
                def aiId = aiIdAndTeamNumber[0]
                def team = (aiIdAndTeamNumber[1] as int) - 1
                // If team is not yet created
                if (!teams[team]) {
                    GameTeam gameTeam = new GameTeam()
                    gameTeam.color = TeamColor.values()[team%maxTeams]
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

        teams.each { teamNumber, gameTeam ->
            gameInstance.addToGameTeams(gameTeam)
        }

        gameInstance.validate();
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

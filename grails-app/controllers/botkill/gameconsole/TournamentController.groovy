package botkill.gameconsole

import botkill.gameconsole.enums.GameState

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class TournamentController {

    def tournamentService

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Tournament.list(params), model: [tournamentInstanceCount: Tournament.count()]
    }

    def show(Tournament tournamentInstance) {
        respond tournamentInstance
    }

    def create() {
        respond new Tournament(params)
    }

    @Transactional
    def start(Tournament tournamentInstance) {
        if (tournamentInstance == null) {
            notFound()
            return
        }

        tournamentInstance.state = GameState.STARTED
        tournamentInstance.save flush:true

        // Start the first game. Nats will call us when this ends and the next game may be started.
        tournamentInstance.startNextGame()

        redirect controller: "tournament", action: "index"
    }

    @Transactional
    def save(Tournament tournamentInstance) {
        if (tournamentInstance == null) {
            notFound()
            return
        }

        tournamentInstance.teams = []
        params.list("teamIds").each { teamId ->
            TournamentTeam tt = new TournamentTeam()
            tt.tournament = tournamentInstance
            tt.team = Team.findById(teamId as long)
            tournamentInstance.addToTeams(tt)
        }

        tournamentInstance.validate()
        if (tournamentInstance.hasErrors()) {
            respond tournamentInstance.errors, view: 'create'
            return
        }

        List<Game> games = tournamentService.generateGamesFor(tournamentInstance.teams)
        games.each {
            tournamentInstance.addToGames(it)
        }

        tournamentInstance.save flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'tournament.label', default: 'Tournament'), tournamentInstance.id])
                redirect tournamentInstance
            }
            '*' { respond tournamentInstance, [status: CREATED] }
        }
    }

    def edit(Tournament tournamentInstance) {
        respond tournamentInstance
    }

    @Transactional
    def update(Tournament tournamentInstance) {
        if (tournamentInstance == null) {
            notFound()
            return
        }

        TournamentTeam.deleteAll(tournamentInstance.teams)
        tournamentInstance.teams = []

        params.list("teamIds").each { teamId ->
            TournamentTeam tt = new TournamentTeam()
            tt.tournament = tournamentInstance
            tt.team = Team.findById(teamId as long)
            tournamentInstance.addToTeams(tt)
        }

        tournamentInstance.validate()
        if (tournamentInstance.hasErrors()) {
            respond tournamentInstance.errors, view: 'edit'
            return
        }

        tournamentInstance.save flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'Tournament.label', default: 'Tournament'), tournamentInstance.id])
                redirect tournamentInstance
            }
            '*' { respond tournamentInstance, [status: OK] }
        }
    }

    @Transactional
    def delete(Tournament tournamentInstance) {

        if (tournamentInstance == null) {
            notFound()
            return
        }

        tournamentInstance.delete flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'Tournament.label', default: 'Tournament'), tournamentInstance.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'tournament.label', default: 'Tournament'), params.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NOT_FOUND }
        }
    }
}

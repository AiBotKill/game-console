package botkill.gameconsole


import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class TeamController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Team.list(params), model: [teamInstanceCount: Team.count()]
    }

    def show(Team teamInstance) {
        respond teamInstance
    }

    def create() {
        def team = new Team(params);
        team.players = [];
        respond team
    }

    @Transactional
    def save(Team teamInstance) {
        if (teamInstance == null) {
            notFound()
            return
        }

        teamInstance.players = [];
        params.list("playerName").each { name ->
            if (!name.toString().trim().equals("")) {
                Player p = new Player();
                p.name = name;
                teamInstance.addToPlayers(p);
            }
        }

        teamInstance.validate()
        if (teamInstance.hasErrors()) {
            respond teamInstance.errors, view: 'create'
            return
        }

        teamInstance.save flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'team.label', default: 'Team'), teamInstance.id])
                redirect controller: "team"
            }
            '*' { respond teamInstance, [status: CREATED] }
        }
    }

    def edit(Team teamInstance) {
        respond teamInstance
    }

    @Transactional
    def update(Team teamInstance) {
        if (teamInstance == null) {
            notFound()
            return
        }

        params.list("playerName").each { name ->
            if (!name.toString().trim().equals("")) {
                Player p = new Player();
                p.name = name;
                teamInstance.addToPlayers(p);
            }
        }

        teamInstance.validate()
        if (teamInstance.hasErrors()) {
            respond teamInstance.errors, view: 'edit'
            return
        }

        teamInstance.save flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'Team.label', default: 'Team'), teamInstance.id])
                redirect controller: "team", action: "show", id: teamInstance.id
            }
            '*' { respond teamInstance, [status: OK] }
        }
    }

    @Transactional
    def removePlayer(Team teamInstance) {
        def playerInstance = teamInstance.players.find { it.id == params.playerId as Long }

        if (teamInstance.id && teamInstance.players.size() == 1) {
            teamInstance.errors.rejectValue("players", "team.players.minSize.notMet", "Team must have at least one player.")
            respond teamInstance.errors, view: 'edit'
            return
        }

        if (playerInstance) {
            teamInstance.removeFromPlayers(playerInstance)
            playerInstance.delete()
        }

        redirect controller: "team", action: "edit", id: teamInstance.id
    }

    @Transactional
    def delete(Team teamInstance) {

        if (teamInstance == null) {
            notFound()
            return
        }

        teamInstance.delete flush: true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'Team.label', default: 'Team'), teamInstance.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'team.label', default: 'Team'), params.id])
                redirect action: "index", method: "GET"
            }
            '*' { render status: NOT_FOUND }
        }
    }
}

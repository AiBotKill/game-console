package botkill.gameconsole

import botkill.gameconsole.enums.GameState

import static org.springframework.http.HttpStatus.NOT_FOUND

class VisualizeController {

    def twodimensions() {
        Game gameInstance = Game.findById(params.id)

        if (gameInstance == null) {
            notFound()
            return
        }

        // Game must be finished before it can be viewed
        if (!gameInstance.state.equals(GameState.FINISHED)) {
            flash.message = message(code: 'game.notFinished', default: 'Visualization will be available when game finishes.')
            redirect(controller: "game", action: "index")
            return
        }

        log.debug("Visualize 2d for game ${gameInstance.id}")
        render view: '2d', model: ['gameInstance':gameInstance]
    }

    def threedimensions() {
        Game gameInstance = Game.findById(params.id)

        if (gameInstance == null) {
            notFound()
            return
        }

        // Game must be finished before it can be viewed
        if (!gameInstance.state.equals(GameState.FINISHED)) {
            flash.message = message(code: 'game.notFinished', default: 'Visualization will be available when game finishes.')
            redirect(controller: "game", action: "index")
            return
        }

        render view: '3d', model: ['gameInstance':gameInstance]
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'game.label', default: 'Game'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}

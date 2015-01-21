package botkill.gameconsole

import botkill.gameconsole.enums.GameState

class Tournament {

    // Tournament has many games to be played and teams that participate in this tournament
    static hasMany = ["games":Game, "teams":TournamentTeam]

    Date dateCreated
    Date lastUpdated

    List games = new ArrayList()
    List teams = new ArrayList()
    String name
    GameState state = GameState.CREATED

    static constraints = {
        name blank: false, unique: true
        teams nullable: false, minSize: 4
    }

    static mapping = {
        teams sort: 'points', order: 'desc'
    }

    String toString() {
        name
    }

    boolean startNextGame() {
        Game game = games.find({ Game g ->
            g.state.equals(GameState.CREATED)
        }) as Game

        if (game) {
            game.start()
            return true
        } else {
            return false
        }
    }

    void endCurrentGame(List<GameResult> results) {
        Game game = games.find({ Game g ->
            g.state.equals(GameState.STARTED)
        }) as Game

        game.end(results)

        // Calculate points
        results.each { GameResult gr ->
            TournamentTeam tt = teams.find { TournamentTeam tt ->
                gr.team.id == tt.team.id
            } as TournamentTeam
            tt.points += gr.points
            tt.save(flush: true)
        }

        return
    }
}

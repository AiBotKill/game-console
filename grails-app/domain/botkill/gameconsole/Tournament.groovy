package botkill.gameconsole

import botkill.gameconsole.enums.GameState
import botkill.gameconsole.enums.TournamentState

class Tournament {

    def tournamentService

    // Tournament has many games to be played and teams that participate in this tournament
    static hasMany = ["games":Game, "teams":TournamentTeam]

    Date dateCreated
    Date lastUpdated

    List games = new ArrayList()
    List teams = new ArrayList()
    String name
    GameState state = GameState.CREATED
    TournamentState tournamentState = TournamentState.QUALIFIERS
    Game currentGame

    static constraints = {
        name blank: false, unique: true
        teams nullable: false, minSize: 4
    }

    static transients = ['currentGame', 'tournamentService']

    static mapping = {
        teams sort: 'points', order: 'desc'
        games sort: 'id', order: 'asc'
    }

    String toString() {
        name
    }

    Game getCurrentGame() {
        games.find({ Game g ->
            g.state.equals(GameState.STARTED)
        }) as Game
    }

    Game getNextGame() {
        return games.find({ Game g ->
            g.state.equals(GameState.CREATED)
        }) as Game
    }

    boolean startNextGame() {
        Game game = getNextGame()

        if (game) {
            game.start()
            return true
        } else {
            // No more games in qualifiers, generate semifinals but don't start them
            if (tournamentState.equals(TournamentState.QUALIFIERS)) {
                tournamentService.generateSemifinalGamesFor(this)
            } else if (tournamentState.equals(TournamentState.SEMIFINAL)) {
                tournamentService.generateSemifinalGamesFor(this)
            }
            return false
        }
    }

    void calculatePoints(List<GameResult> results) {
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

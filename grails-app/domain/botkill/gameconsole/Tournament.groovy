package botkill.gameconsole

import botkill.gameconsole.enums.GameState

class Tournament {

    // Tournament has many games to be played and teams that participate in this tournament
    static hasMany = ["games":Game, "teams":Team]

    String name
    GameState state = GameState.CREATED

    static constraints = {
        name blank: false, unique: true
        teams minSize: 2
    }

    String toString() {
        name
    }
}

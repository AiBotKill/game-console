package botkill.gameconsole

import botkill.gameconsole.enums.GameEnvironment
import botkill.gameconsole.enums.GameMode
import botkill.gameconsole.enums.GameState

class Game {

    // Game may have many teams to compete against each other. Team in the same GameTeam are on the same side.
    static hasMany = ["gameTeams":GameTeam]

    GameMode mode
    GameState state = GameState.CREATED
    GameEnvironment environment

    int roundTime // in seconds
    int rounds
    float darkness
    float rain

    static constraints = {
        gameTeams minSize: 2, maxSize: 12 // MaxSize is the number of TeamColors
        darkness min: 0f, max: 1f
        rain min: 0f, max: 1f
        rounds min: 1, max: 10
        roundTime min: 1, max: 600
    }
}

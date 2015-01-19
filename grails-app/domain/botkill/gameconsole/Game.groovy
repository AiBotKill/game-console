package botkill.gameconsole

import botkill.gameconsole.enums.GameEnvironment
import botkill.gameconsole.enums.GameMode
import botkill.gameconsole.enums.GameState

class Game {

    // Game may have many teams to compete against each other. Team in the same GameTeam are on the same side.
    static hasMany = ["gameTeams":GameTeam]

    Date dateCreated
    Date lastUpdated

    Set gameTeams = new HashSet()
    GameMode mode
    GameState state = GameState.CREATED
    GameEnvironment environment

    int roundTime = 300 // in seconds
    int rounds = 3
    int darkness
    int rain

    static constraints = {
        gameTeams nullable: false, minSize: 2, maxSize: 12 // MaxSize is the number of TeamColors
        darkness min: 0, max: 100
        rain min: 0, max: 100
        rounds min: 1, max: 10
        roundTime min: 1, max: 600
    }

    static mapping = {
        gameTeams sort: 'points', order: 'desc'
    }

    String toString() {
        def teamMembers = []
        gameTeams.each {
            teamMembers << it.teams.join(",")
        }
        mode.toString() + ": " + teamMembers.join(" vs ")
    }

}

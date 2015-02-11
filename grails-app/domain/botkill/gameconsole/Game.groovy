package botkill.gameconsole

import botkill.gameconsole.enums.GameEnvironment
import botkill.gameconsole.enums.GameMode
import botkill.gameconsole.enums.GameState

class Game {
    def nats

    // Game may have many teams to compete against each other. Team in the same GameTeam are on the same side.
    static hasMany = ["gameTeams":GameTeam, "results": GameResult]
    static belongsTo = [Tournament]

    Date dateCreated
    Date lastUpdated

    List gameTeams = new ArrayList()
    List results
    GameMode mode
    GameState state = GameState.CREATED
    GameEnvironment environment

    int roundTime = 60 // in seconds
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

    static transients = ['AICount', 'nats']

    static mapping = {
        gameTeams sort: 'id', order: 'asc'
    }

    String toString() {
        def teamMembers = []
        gameTeams.each {
            teamMembers << it.teams.join(",")
        }
        mode.toString() + ": " + teamMembers.join(" vs ")
    }

    int getAICount() {
        return gameTeams.teams*.size().sum()
    }

    void start() {
        state = GameState.STARTED
        save flush:true

        nats.publish("${this.id}.start")
    }

    void end(List<GameResult> results) {
        state = GameState.FINISHED
        this.results = results
        save flush:true
    }
}

package botkill.gameconsole

import botkill.gameconsole.enums.GameEnvironment
import botkill.gameconsole.enums.GameMode
import botkill.gameconsole.enums.GameState
import botkill.gameconsole.enums.TeamColor

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

    String publicId // Game server returns this when created

    String tiles
    float[] gameArea
    Vector2d[] startingPositions

    static constraints = {
        gameTeams nullable: false, minSize: 2, maxSize: 12 // MaxSize is the number of TeamColors
        darkness min: 0, max: 100
        rain min: 0, max: 100
        rounds min: 1, max: 10
        roundTime min: 1, max: 600
        publicId nullable: true
        tiles nullable: true
    }

    static transients = ['AICount', 'nats', 'gameArea', 'startingPositions']

    static mapping = {
        gameTeams sort: 'id', order: 'asc'
        tiles type: "text"
    }

    String toString() {
        Map<TeamColor, List<String>> teamMembers = [:]
        gameTeams.each { GameTeam gt ->
            if (teamMembers.containsKey(gt.color)) {
                teamMembers[gt.color] << gt.team.name
            } else {
                teamMembers[gt.color] = []
                teamMembers[gt.color] << gt.team.name
            }
        }

        List<String> teamStrings = new ArrayList<>()
        teamMembers.each { TeamColor teamColor, List<String> teams ->
            StringBuilder teamString = new StringBuilder()
            teamString.append(teamColor.toString()).append(": ").append(teams.join(", "))
            teamStrings.add(teamString.toString())
        }

        mode.toString() + ": " + teamStrings.join(" vs ")
    }

    void start() {
        state = GameState.STARTED
        save flush:true

        nats.publish("${this.publicId}.start", "{}")
    }

    void end(List<GameResult> results) {
        state = GameState.FINISHED
        this.results = results
        save flush:true

        nats.publish("${this.publicId}.end", "{}")
    }
}

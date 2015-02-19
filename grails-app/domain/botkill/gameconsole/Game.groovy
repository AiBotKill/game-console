package botkill.gameconsole

import botkill.gameconsole.enums.GameEnvironment
import botkill.gameconsole.enums.GameMode
import botkill.gameconsole.enums.GameState
import botkill.gameconsole.enums.TeamColor
import grails.converters.JSON
import nats.client.Message
import nats.client.MessageHandler
import org.codehaus.groovy.grails.web.json.JSONObject

import java.util.concurrent.TimeUnit

class Game {
    def nats
    def mapService

    // Game may have many teams to compete against each other. Team in the same GameTeam are on the same side.
    static hasMany = ["gameTeams":GameTeam, "results": GameResult]
    static belongsTo = ["tournament": Tournament]

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
    String states
    List<Tile> tileModels
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
        states nullable: true
        tournament nullable: true
    }

    static transients = ['AICount', 'nats', 'gameArea', 'startingPositions', 'tileModels', 'mapService']

    static mapping = {
        sort id: "desc"
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
        GameMap map = mapService.getMap(gameTeams.size(), environment)
        startingPositions = map.getStartingPositions()
        gameArea = map.getGameArea()
        tiles = map.getTiles()
        tileModels = map.getTileModels()
        save flush: true

        nats.request("startGame", (this as JSON).toString(), 10, TimeUnit.SECONDS, new MessageHandler() {
            @Override
            public void onMessage(Message message) {
                JSONObject response = new JSONObject(message.getBody())
                if (response.has("id")) {
                    withNewSession {
                        publicId = response.getString("id")
                        log.debug("Received public id ${publicId} for game ${id}")
                        save flush: true
                    }
                    log.debug("Started game ${id} with id ${publicId}!")
                } else {
                    withNewSession {
                        state = GameState.CREATED
                        save flush: true
                    }
                    log.error("Failed to start game ${id}. Error: ${response.getString("error")}")
                }
            }
        })
    }

    void end(List<GameResult> res) {
        state = GameState.FINISHED
        results = res
        save flush:true

        nats.request("${this.publicId}.end", "{}", 10, TimeUnit.SECONDS, new MessageHandler() {
            @Override
            public void onMessage(Message message) {
                JSONObject response = new JSONObject(message.getBody())
                if (response.getString("status").equals("ok")) {
                    log.debug("Ended game ${id}!")
                } else {
                    log.error("Failed to end game ${id}. Error: ${response.getString("error")}")
                }
            }
        })
    }
}

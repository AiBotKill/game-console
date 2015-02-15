package botkill.gameconsole

import botkill.gameconsole.enums.TeamColor

class GameTeam {

    static belongsTo = ["game":Game]

    Team team
    TeamColor color
    String connectionId
    String botVersion

    static constraints = {
        team nullable: false
    }

    String toString() {
        "Team ${color}: ${team.name}"
    }
}

package botkill.gameconsole

import botkill.gameconsole.enums.TeamColor

class GameTeam {

    static belongsTo = ["game":Game]
    static hasMany = ["teams":Team]

    Set teams = new HashSet()
    TeamColor color
    int points

    static constraints = {
        teams nullable: false, minSize: 1, maxSize: 10
    }

    static mapping = {
        sort points: "desc"
        teams id: "asc"
    }

    String toString() {
        "Team ${color} (${points}pts): " + teams.join(", ")
    }
}

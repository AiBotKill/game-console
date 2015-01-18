package botkill.gameconsole

import botkill.gameconsole.enums.TeamColor

class GameTeam {

    static belongsTo = ["game":Game]
    static hasMany = ["teams":Team]

    TeamColor color
    int points

    static constraints = {
        teams size: 1..10, minSize: 1, maxSize: 10
    }

    static mapping = {
        sort points: "desc"
        teams id: "asc"
    }

    String toString() {
        "Team ${color} (${points}pts): " + teams.join(", ")
    }
}

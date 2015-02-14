package botkill.gameconsole

import botkill.gameconsole.enums.TeamColor

class GameTeam {

    static belongsTo = ["game":Game]
    static hasMany = ["teams":Team]

    List teams = new ArrayList()
    TeamColor color
    String connectionId

    static constraints = {
        teams nullable: false, minSize: 1, maxSize: 10
    }

    static mapping = {
        teams id: "asc"
    }

    String toString() {
        "Team ${color}: " + teams.join(", ")
    }
}

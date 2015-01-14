package botkill.gameconsole

import botkill.gameconsole.enums.TeamColor

class GameTeam {

    static belongsTo = ["game":Game]
    static hasMany = ["teams":Team]

    TeamColor color;

    static constraints = {
        teams minSize: 1, maxSize: 10
    }
}

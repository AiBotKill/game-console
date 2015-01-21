package botkill.gameconsole

class TournamentTeam {

    static belongsTo = ["tournament":Tournament]

    Team team
    int points

    static constraints = {
        team nullable: false
    }

    static mapping = {
        sort points: "desc"
    }

    String toString() {
        team.toString() + " (${points}pts)"
    }
}

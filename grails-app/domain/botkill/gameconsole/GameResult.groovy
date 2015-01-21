package botkill.gameconsole

class GameResult {

    Team team
    int damageDone
    int kills
    boolean survived

    static constraints = {
        team nullable: false
    }

    static transients = ['points']

    String toString() {
        team.toString() + " (${getPoints()}pts)"
    }

    int getPoints() {
        int survivePoints = survived ? 100 : 0
        return Math.max(damageDone + kills*10 + survivePoints, 0)
    }
}

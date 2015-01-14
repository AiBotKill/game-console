package botkill.gameconsole

class Player {

    static belongsTo = ["team":Team]

    String name

    static constraints = {
        name blank: false
    }

    String toString() {
        name
    }
}

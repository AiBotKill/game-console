package botkill.gameconsole

class Team {

    static hasMany = ["players":Player]

    String name

    static constraints = {
        name blank: false, unique: true
        players maxSize: 2, minSize: 1
    }

    String toString() {
        name
    }
}

package botkill.gameconsole

class Team {

    static hasMany = ["players":Player]

    String name
    String programmingLanguage

    static constraints = {
        name blank: false, unique: true
        programmingLanguage blank: false, unique: true
        players size: 1..2, maxSize: 2, minSize: 1
    }

    static mapping = {
        players sort: 'id', order: 'asc'
    }

    String toString() {
        name
    }
}

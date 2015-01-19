package botkill.gameconsole

class Team {

    static hasMany = ["players":Player]

    Set players = new HashSet()
    String name
    String programmingLanguage

    static constraints = {
        name blank: false, unique: true
        programmingLanguage blank: false
        players nullable: false, maxSize: 2, minSize: 1
    }

    static mapping = {
        players sort: 'id', order: 'asc'
    }

    String toString() {
        name
    }
}

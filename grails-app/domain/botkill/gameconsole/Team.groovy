package botkill.gameconsole

class Team {

    PasswordService passwordService

    static hasMany = ["players":Player]

    List players = new ArrayList()
    String name
    String programmingLanguage
    String password
    String botId = UUID.randomUUID().toString()
    boolean isAdmin = false

    String connectionId;
    String botVersion;

    static constraints = {
        name nullable: false, blank: false, unique: true
        password blank: false, nullable: false
        programmingLanguage blank: false
        players nullable: false, maxSize: 3, minSize: 1
    }

    static transients = ["passwordService", "connectionId", "botVersion"]

    static mapping = {
        players sort: 'id', order: 'asc'
    }

    void beforeUpdate() {
        // Encode password only if it's changed
        if (this.isDirty("password")) {
            password = passwordService.encrypt(password);
        }
    }

    String toString() {
        name
    }

    static Team getLoggedInUser() {
        // User authenticateService implementation to get logged in user
        return AuthenticateService.getLoggedInUser();
    }

    static Team authenticate(String name, String password) {
        Team t = findByName(name);
        if (PasswordService.check(password, t?.password)) {
            return t;
        } else {
            return null;
        }
    }
}

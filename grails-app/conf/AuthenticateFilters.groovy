import botkill.gameconsole.Player
import botkill.gameconsole.Team
import grails.util.Environment
import org.codehaus.groovy.grails.plugins.web.taglib.ApplicationTagLib

/**
 *
 * @author jukka
 */
class AuthenticateFilters {

    def grailsApplication;

    public filters = {
        // Do filter for all url:s
        all(controller:'*', action:'*') {
            before = {
                Team loggedInUser = Team.getLoggedInUser();

                boolean hasPermission = hasPermission(loggedInUser, controllerName, actionName, params.id)
                if (!hasPermission) {
                    ApplicationTagLib g = (ApplicationTagLib)grailsApplication.mainContext.getBean('org.codehaus.groovy.grails.plugins.web.taglib.ApplicationTagLib');
                    flash.message = g.message(code:"development.message.noAccess", default:"Login required");
                    redirect controller: "team", action: "loginForm"
                    return false;
                }
                return true;
            }
            after = { model ->
                if (!model) {
                } else {
                    // Always attach loggedInUser for every page since it's used almost everywhere
                    Team loggedInUser = Team.getLoggedInUser();
                    if (loggedInUser) {
                        model.loggedInUser = loggedInUser;
                    }
                }
            }
        }
    }

    /**
     * Check to see if user has permission for requested url
     * @return boolean true if permission is granted, otherwise false
     */
    boolean hasPermission(Team u, String controller, String action, String id) {
        // Allowed for all
        def whitelist = ["visualize:*", "team:create", "team:save", "team:show", "team:index", "team:login", "team:loginForm", "tournaments:index", "tournaments:show", "game:index", "game:show"]

        for (String w : whitelist) {
            def whitelisted = w.split(":")
            if (whitelisted[0] == "*" && whitelisted[1] == action) {
                return true
            } else if (whitelisted[0].equals(controller) && whitelisted[1].equals("*")) {
                return true
            } else if (whitelisted[0].equals(controller) && whitelisted[1].equals(action)) {
                return true
            } else if (whitelisted[0].equals(controller) && whitelisted[1].equals("index") && action == null) {
                return true
            }
        }

        // Not whitelisted... check if model needs owner id
        if (controller.equals("team") && (action.equals("edit") || action.equals("update") || action.equals("removePlayer") || action.equals("delete"))) {
            Team editTeam = Team.findById(id as long)
            if (editTeam.equals(u)) {
                return true
            }
        } else if (controller.equals("player") && (action.equals("edit") || action.equals("update") || action.equals("delete"))) {
            Player editPlayer = Player.findById(id as long)
            if (editPlayer.team.equals(u)) {
                return true
            }
        }

        // Check if needs admin
        if (controller.equals("tournament") && u?.isAdmin) {
            return true
        }

        // Just be logged in ok?
        if (u && controller.equals("game") && (action.equals("create") || action.equals("start") || action.equals("end") || action.equals("save") || action.equals("update") || action.equals("edit") || action.equals("delete"))) {
            return true
        }

        return false
    }
}


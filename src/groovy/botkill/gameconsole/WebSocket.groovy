package botkill.gameconsole

import botkill.gameconsole.enums.GameState
import grails.util.Environment
import nats.client.Message
import nats.client.MessageHandler
import nats.client.Nats
import org.codehaus.groovy.grails.commons.GrailsApplication
import org.codehaus.groovy.grails.web.json.JSONArray
import org.codehaus.groovy.grails.web.json.JSONObject
import org.codehaus.groovy.grails.web.servlet.GrailsApplicationAttributes
import org.springframework.context.ApplicationContext
import org.apache.commons.logging.LogFactory
import javax.servlet.ServletContext
import javax.servlet.ServletContextEvent
import javax.servlet.ServletContextListener
import javax.servlet.annotation.WebListener
import javax.websocket.CloseReason
import javax.websocket.OnClose
import javax.websocket.OnError
import javax.websocket.OnMessage
import javax.websocket.OnOpen
import javax.websocket.Session
import javax.websocket.server.PathParam
import javax.websocket.server.ServerContainer
import javax.websocket.server.ServerEndpoint
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.ConcurrentLinkedQueue

/**
 * Created by hell on 16.2.2015.
 */
@ServerEndpoint("/websocket/{gameId}")
@WebListener
class WebSocket implements ServletContextListener {

    private static final log = LogFactory.getLog(this)
    private static final Set<Session> clients = ([] as Set).asSynchronized()
    private static final Map<String, Queue<String>> allStates = new ConcurrentHashMap<>()

    @Override
    void contextInitialized(ServletContextEvent servletContextEvent) {
        ServletContext servletContext = servletContextEvent.servletContext
        ServerContainer serverContainer = servletContext.getAttribute("javax.websocket.server.ServerContainer")

        try {
            // This is necessary for Grails to add the endpoint in development.
            // In production, the endpoint will be added by the @ServerEndpoint
            // annotation.
            if (Environment.current == Environment.DEVELOPMENT) {
                serverContainer.addEndpoint(WebSocket)
            }

            // This is mainly for demonstration of retrieving the ApplicationContext,
            // the GrailsApplication instance, and application configuration.
            ApplicationContext ctx = (ApplicationContext) servletContext.getAttribute(GrailsApplicationAttributes.APPLICATION_CONTEXT)
            GrailsApplication grailsApplication = ctx.grailsApplication
            serverContainer.defaultMaxSessionIdleTimeout = grailsApplication.config.servlet.defaultMaxSessionIdleTimeout ?: 0

            // Subscribe to game status messages in NATS
            Nats nats = ctx.nats
            nats.subscribe("consoleGameState", new MessageHandler() {
                @Override
                public void onMessage(Message message) {
                    String gameState = message.getBody()
                    JSONObject gameStateObject = new JSONObject(gameState)
                    String gamePublicId = gameStateObject.getString("id")
                    log.debug("Received state for game ${gamePublicId}")

                    if (!allStates.containsKey(gamePublicId)) {
                        Queue<String> stateList = new ConcurrentLinkedQueue<>()
                        stateList.offer(gameState)
                        allStates.put(gamePublicId, stateList)
                    } else {
                        allStates.get(gamePublicId).offer(gameState)
                    }
                }
            })
            nats.subscribe("consoleGameEnd", new MessageHandler() {
                @Override
                public void onMessage(Message message) {
                    String gameState = message.getBody()
                    JSONObject gameStateObject = new JSONObject(gameState)
                    String gamePublicId = gameStateObject.getString("id")
                    log.debug("Received game end for game ${gamePublicId}")

                    if (!allStates.containsKey(gamePublicId)) {
                        Queue<String> stateList = new ConcurrentLinkedQueue<>()
                        stateList.offer(gameState)
                    } else {
                        allStates.get(gamePublicId).offer(gameState)
                    }

                    // All states received. Persist those for the game.
                    Game.withNewSession {
                        Game g = Game.findByPublicId(gamePublicId)
                        log.debug("Ending game id ${g.id}")
                        StringBuilder statesString = new StringBuilder().append("[")
                        Iterator<String> iterator = allStates.get(gamePublicId).iterator()
                        while(iterator.hasNext()) {
                            statesString.append(iterator.next())
                            if (iterator.hasNext()) {
                                statesString.append(",")
                            }
                        }
                        statesString.append("]")

                        // Generate results
                        List<GameResult> results = new ArrayList<>()
                        JSONArray players = gameStateObject.getJSONArray("players")
                        for (int i = 0; i < players.length(); i++) {
                            JSONObject player = players.getJSONObject(i)
                            GameTeam gt = g.gameTeams.find { GameTeam gt1 -> gt1.connectionId.equals(player.getString("botId")) } as GameTeam
                            GameResult gr = new GameResult()
                            gr.team = gt.team
                            gr.survived = player.getInt("hitpoints") > 0
                            gr.kills = player.getJSONArray("kills").length()
                            gr.damageDone = player.getInt("damageMade")
                            results.add(gr)
                        }

                        g.state = GameState.FINISHED
                        g.states = statesString.toString()
                        g.results = results
                        g.save flush:true

                        Tournament t = Tournament.createCriteria().get {
                            games {
                                eq('id', g.id)
                            }
                        }
                        if (t) {
                            t.calculatePoints(results)
                            t.startNextGame()
                        }

                        // And release states from the memory
                        allStates.remove(gamePublicId)
                    }
                }
            })
        } catch (IOException e) {
            log.error(e.message, e)
        }
    }

    @Override
    void contextDestroyed(ServletContextEvent servletContextEvent) {
    }

    /**
     * This method is executed when a client connects to this websocket
     * endpoint, and adds the new user's session to our users list.
     */
    @OnOpen
    public void onOpen(Session userSession, @PathParam("gameId") long gameId) {
        log.debug("Connected on game ${gameId}")
        Game.withNewSession {
            Game game = Game.findById(gameId)
            if (game) {
                String gamePublicId = game.publicId
                log.debug("Found game with id ${game.id}")
                userSession.userProperties.put("gameId", gamePublicId)
                clients.add(userSession)
                userSession.basicRemote.sendText("${game.tiles}")

                // Visualization client has connected here. Start a thread to stream all data for the client.
                Thread.start {
                    int fps = 1000/5
                    Queue<String> states = new ConcurrentLinkedQueue<>()
                    JSONArray statesArray = new JSONArray(game.states)
                    for (int i = 0; i < statesArray.length(); i++) {
                        String state = statesArray.getString(i)
                        states.add(state)
                    }

                    final int timeout = 10000
                    long timer = System.currentTimeMillis()

                    // Loop here until game ends or timeout occurs
                    boolean running = true
                    while (running) {
                        // Poll (read and remove) the first state inserted into the queue
                        String state = states.poll()
                        if (state) {
                            log.debug("Seding msg to gameId ${gameId}...")

                            if (userSession.isOpen()) {
                                userSession.basicRemote.sendText(state)
                            } else {
                                running = false
                            }

                            JSONObject stateJson = new JSONObject(state)
                            // Check if this state was the last state
                            if (stateJson.getString("state").equals("end")) {
                                log.debug("Reached the last frame. Ending streaming thread for game id ${gameId}")
                                // All frames streamed to the client, we can end this thread.
                                running = false
                            }
                        } else {
                            // Last state received but it wasn't end state..
                            log.warn("Received the last gameState but it's state wasn't end... ending game id ${gameId}")
                            running = false
                        }

                        try {
                            Thread.sleep(fps)
                        } catch (InterruptedException ignored) {}
                    }
                }
            } else {
                log.warn("Could not find game with give id.")
            }
        }
    }

    /**
     * This method is executed when a client sends a message to the
     * websocket endpoint..
     * @param message
     * @param userSession
     */
    @OnMessage
    public void onMessage(String message, @PathParam("gameId") String gameId) {
        // No need to receive messages from clients
    }

    /**
     * This method is executed when a client disconnects.
     */
    @OnClose
    public void onClose(Session userSession, CloseReason closeReason) {
        clients.remove(userSession)
    }

    @OnError
    public void onError(Throwable t) {
        log.error(t.message, t)
    }

    /**
     * Iterate through all clients and send a message to them.
     * @param message
     */
    private void sendMessage(String gameId, String message) {
        Iterator<Session> iterator = clients.iterator()
        while(iterator.hasNext()) {
            Session session = iterator.next()
            if (session.getUserProperties().get("gameId").equals(gameId)) {
                log.debug("Seding msg to gameId ${gameId}...")
                session.basicRemote.sendText(message)
            }
        }
    }
}

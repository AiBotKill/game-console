package botkill.gameconsole

import grails.util.Environment
import nats.client.Message
import nats.client.MessageHandler
import nats.client.Nats
import org.codehaus.groovy.grails.commons.GrailsApplication
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
    private static final Map<String, Queue<String>> states = new ConcurrentHashMap<>()

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
            nats.subscribe("*.gameState", new MessageHandler() {
                @Override
                public void onMessage(Message message) {
                    String gamePublicId = message.getSubject().split("\\.")[0]
                    String gameState = message.getBody()
                    sendMessage(gamePublicId, gameState)

                    if (!states.containsKey(gamePublicId)) {
                        Queue<String> stateList = new ConcurrentLinkedQueue<>()
                        stateList.offer(gameState)
                    } else {
                        states.get(gamePublicId).offer(gameState)
                    }
                }
            });
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
                log.debug("Found game with id ${game.id}")
                userSession.userProperties.put("gameId", game.publicId)
                clients.add(userSession)
                sendMessage(game.publicId, "${game.tiles}")
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

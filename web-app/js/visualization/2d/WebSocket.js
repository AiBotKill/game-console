/**
 * Created with IntelliJ IDEA.
 * User: Hell
 * Date: 12.11.2014
 * Time: 23:58
 * To change this template use File | Settings | File Templates.
 */
// Create our websocket object with the address to the websocket
define(function() {

    return {
        io: undefined,
        connect: function(listener) {
            console.log("Connecting...");

            var socketUrl = "ws://" + location.hostname+ (location.port ? ':' + location.port : ':7000');
            socketUrl += document.getElementById("websocketPath").innerHTML;
            var ws = new WebSocket(socketUrl);

            ws.onopen = function(){
                console.log("Socket has been opened!");
            };

            ws.onmessage = function(message) {
                listener.handle(message.data);
            };

            ws.onerror = function(error) {
                console.log("WebSocket error: ", error);
            };
        }
    }
});
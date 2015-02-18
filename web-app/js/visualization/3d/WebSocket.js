function connect(listener) {
    console.log("Connecting...");

    var socketUrl = "ws://" + location.hostname + (location.port ? ':' + location.port : '');
    socketUrl += document.getElementById("websocketPath").innerHTML;
    console.log(socketUrl);
    var ws = new WebSocket(socketUrl);

    ws.onopen = function () {
        console.log("Socket has been opened!");
    };

    ws.onmessage = function (message) {
        listener.syncState(message.data);
    };

    ws.onerror = function (error) {
        console.log("WebSocket error: ", error);
    };

};
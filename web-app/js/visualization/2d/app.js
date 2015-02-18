

requirejs(['./WebSocket', './MsgListener', './HudCanvas', './config'],
    function(socket, listener, hud, config) {
        var mouseclicked = false;

        var zoom = function(e) {
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            config.zoom += delta/2;
            config.zoom = Math.min(25, config.zoom);
            config.zoom = Math.max(1, config.zoom);
            listener.resize();
            listener.draw(hud.getCurrentFrame(), false);
        };

        hud.init(listener);

        listener.init(function() {
            socket.connect(listener);
            window.addEventListener("mousewheel", zoom);
            window.addEventListener("DOMMouseScroll", zoom);

            window.addEventListener("mousedown", function(e) {
                mouseclicked = true;
            });
            window.addEventListener("mouseup", function(e) {
                mouseclicked = false
            });
            window.addEventListener("mousemove", function(e) {
                if (mouseclicked) {
                    if (e.movementX) {
                        config.offset[0] += e.movementX;
                        config.offset[1] += e.movementY;
                    } else if (e.mozMovementX) {
                        config.offset[0] += e.mozMovementX;
                        config.offset[1] += e.mozMovementY;
                    } else if (e.webkitMovementX) {
                        config.offset[0] += e.webkitMovementX;
                        config.offset[1] += e.webkitMovementY;
                    }

                    var moving = true;
                    listener.draw(hud.getCurrentFrame(), moving);
                }
            });

            window.addEventListener("resize", function() {
                listener.resize();
                listener.draw(hud.getCurrentFrame(), false);
            });
        });
    }
);
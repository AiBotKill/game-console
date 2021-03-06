define(["require", "./config"], function(require) {
        var config = require("config");
        var TILE_SIZE = config.getTileSize();
        var ctx = document.getElementById("hudcanvas").getContext("2d");
        var textureMap = {};
		var DEBUG_ON = 0, DEBUG_OFF = 1,
            PLAY = 2, PAUSE = 3;

        var PLAYER_SIZE = TILE_SIZE;

        var msgListener;

        var debugMode = config.debugMode;
        var paused = false;
        var currentFrame = 0;

        var scrollFinderX = 0;
        var previousMouseX = 0;
        var moveFinderTimeout;
        var scrollBar = {};
        var scrollFinder = {};

		var hudItems = [
            "debugModeOn",
            "debugModeOff",
            "play",
            "pause"
		];
				
		function getMousePos(evt) {
			var rect = ctx.canvas.getBoundingClientRect();
			return {
				x: evt.clientX - rect.left,
				y: evt.clientY - rect.top
			};
		}
	  
        function drawHud() {
            console.log("Drawing HUD...");
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            // Debug mode toggle
			var img = debugMode ? textureMap[DEBUG_ON] : textureMap[DEBUG_OFF];
			var x = 10;
			var y = ctx.canvas.height - img.elem.height - 10;
			img.x = x;
			img.y = y;
			img.click = toggleDebugMode;
			ctx.drawImage(img.elem, img.x, img.y, img.elem.width, img.elem.height);
            ctx.font = 'normal 12px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText("Debug mode", x, y - 5);

            x += img.elem.width;

            // Play/Pause buttons
            img = paused ? textureMap[PLAY] : textureMap[PAUSE];
            x += 30;
            y = ctx.canvas.height - img.elem.height - 10;
            img.x = x;
            img.y = y;
            img.click = togglePause;
            ctx.drawImage(img.elem, img.x, img.y, img.elem.width, img.elem.height);

            x += img.elem.width;

            // Scroll bar
            x += 20;
            scrollBar.width = config.tilesXCount*config.getTileSize() - x;
            scrollBar.height = 2;
            y = ctx.canvas.height - img.elem.height/2 - 10;
            scrollBar.x = x;
            scrollBar.y = y;
            scrollBar.click = jumpTo;
            ctx.beginPath();
            ctx.moveTo(scrollBar.x, scrollBar.y);
            ctx.lineTo(scrollBar.x + scrollBar.width, scrollBar.y);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "white";
            ctx.stroke();

            // Scroll finder
            scrollFinder.width = 15;
            scrollFinder.height = 15;
            y = ctx.canvas.height - img.elem.height/2 - 9;
            scrollFinder.x = scrollFinderX > 0 ? scrollFinderX : x;
            scrollFinderX = scrollFinder.x;
            scrollFinder.y = y;
            scrollFinder.mousedown = moveFinder;
            ctx.beginPath();
            ctx.arc(scrollFinder.x, scrollFinder.y, scrollFinder.width/2, 0, 2 * Math.PI, false);
            ctx.fillStyle = "rgba(200, 0, 0, 1)";
            ctx.fill();
        }

        var toggleDebugMode = function() {
            console.log("Debug mode " + !debugMode + "...");
            debugMode = !debugMode;
            drawHud();
            msgListener.redraw(currentFrame);
        };
        var pause = function() {
            paused = true;
            drawHud();
        };
        var togglePause = function() {
            paused = !paused;
            drawHud();

            if (paused) {
                console.log("Paused...");
            } else {
                console.log("Resuming...");
                msgListener.draw(currentFrame);
            }
        };
        var jumpTo = function(x) {
            currentFrame = Math.ceil(x / (scrollBar.width / msgListener.getHistorySize()));

            console.log("Jumping to frame: " + currentFrame);

            scrollFinderX = scrollBar.x + scrollBar.width / msgListener.getHistorySize() * (currentFrame-1);
            drawHud();
            msgListener.draw(currentFrame);
        };
        var moveFinder = function(x, deltaTime) {
            scrollFinderX = x;
            scrollFinderX = Math.max(scrollFinderX, scrollBar.x);
            scrollFinderX = Math.min(scrollFinderX, scrollBar.x + scrollBar.width);
            currentFrame = Math.ceil(scrollFinderX / (scrollBar.width / msgListener.getHistorySize()));
            drawHud();

            // Redraw only if finder moved enough
            moveFinderTimeout = setTimeout(function() {
                msgListener.draw(currentFrame);
                scrollFinder.previousMousePos = x;
            }, 500);
        };

        return {
            isDebugMode: function() { return debugMode; },
            isPaused: function() { return paused; },
            setCurrentFrame: function(frame) {
                currentFrame = frame;
                scrollFinderX = scrollBar.x + scrollBar.width / msgListener.getHistorySize() * (currentFrame-1);

            },
            getCurrentFrame: function() { return currentFrame; },

            init: function(listener) {
                msgListener = listener;
				ctx.canvas.addEventListener('click', function(evt) {
					var mousePos = getMousePos(evt);

                    // Special check for record playback scroll bar
                    if (mousePos.y > scrollBar.y - 3 && mousePos.y < scrollBar.y + scrollBar.height + 3 && mousePos.x > scrollBar.x && mousePos.x < scrollBar.x + scrollBar.width) {
                        // Pass x coordinate relative to scroll bar
                        scrollBar.click(mousePos.x - scrollBar.x);
                        return;
                    }

					for (var key in textureMap) {
						if (textureMap.hasOwnProperty(key)) {
							var img = textureMap[key];
                            if (mousePos.y > img.y && mousePos.y < img.y + img.elem.height && mousePos.x > img.x && mousePos.x < img.x + img.elem.width) {
                                img.click();
                                return;
                            }
						}
					};
				}, false);

                ctx.canvas.addEventListener('mousedown', function(evt) {
                    var mousePos = getMousePos(evt);
                    if (mousePos.y > scrollFinder.y - 3 && mousePos.y < scrollFinder.y + scrollFinder.height + 3 && mousePos.x > scrollFinderX && mousePos.x < scrollFinderX + scrollFinder.width) {
                        scrollFinder.clicked = true;
                        previousMouseX = mousePos.x;
                        pause();
                    }
                }, false);
                ctx.canvas.addEventListener('mouseup', function(evt) {
                    if (scrollFinder.clicked) {
                        scrollFinder.clicked = false;
                    }
                }, false);
                ctx.canvas.addEventListener('mousemove', function(evt) {
                    if (scrollFinder.clicked) {
                        paused = true;
                        var mousePos = getMousePos(evt);

                        // Redraw only after 500ms without moving mouse
                        clearTimeout(moveFinderTimeout);
                        moveFinder(mousePos.x);
                    }
                }, false);

                for (var i = 0; i < hudItems.length; i++) {
                    var elem = new Image();
                    elem.src = config.assetsPath + "/hud/"+ hudItems[i]+".png";
					var img = {};
					img.elem = elem;
					textureMap[i] = img;
                }

                this.resize();
            },
            drawTimeLeft: function(timeLeft) {
                ctx.font = 'normal 30px Arial';
                ctx.fillStyle = 'red';
                timeLeft = Math.floor(timeLeft);
                var center = ctx.canvas.width / 2 - ctx.measureText(timeLeft).width/2;
                ctx.fillText("Time left: " + timeLeft, center, 40);
            },
            drawPlayerData: function(players) {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                drawHud();

                for (var i = 0; i < players.length; i++) {
                    var player = players[i];
                    var x = player.position.x * TILE_SIZE + config.offset[0];
                    var y = player.position.y * TILE_SIZE + config.offset[1];

                    // Points
                    ctx.font = 'bold 15px Arial';
                    ctx.fillStyle = 'red';
                    var kills = player.kills ? player.kills.length : 0;
                    var points = player.damageMade + kills * 50;
                    var pointsY = i * 18 + 24;
                    ctx.fillText(player.name + ": " + points + "pts", 10, pointsY);

                    // Name
                    ctx.font = 'bold 15px Courier';
                    ctx.fillStyle = 'white';
                    ctx.fillText(player.name, x - ctx.measureText(player.name).width/2, y - PLAYER_SIZE - 20);

                    var playerMaxHp = 100;

                    // Healt bar
                    ctx.fillStyle = "black";
                    var x1 = x - playerMaxHp/2 - 1;
                    var y1 = y - PLAYER_SIZE - 15;
                    var width = playerMaxHp + 2;
                    var height = 8;
                    ctx.fillRect(x1, y1, width, height);

                    ctx.fillStyle = "red";
                    x1 = x - playerMaxHp/2;
                    y1 = y - PLAYER_SIZE - 14;
                    width = playerMaxHp;
                    height = 6;
                    ctx.fillRect(x1, y1, width, height);

                    ctx.fillStyle = "green";
                    x1 = x - playerMaxHp/2;
                    y1 = y - PLAYER_SIZE - 14;
                    width = player.hitpoints;
                    height = 6;
                    ctx.fillRect(x1, y1, width, height);
                }
            },
            resize: function() {
                TILE_SIZE = config.getTileSize();
                PLAYER_SIZE = TILE_SIZE;
                ctx.canvas.width  = window.innerWidth;
                ctx.canvas.height = window.innerHeight;
            }
        }
    }
);
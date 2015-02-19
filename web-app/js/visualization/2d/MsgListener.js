/**
 * Created with IntelliJ IDEA.
 * User: Hell
 * Date: 13.11.2014
 * Time: 1:18
 * To change this template use File | Settings | File Templates.
 */
define(['./TerrainCanvas', './PlayerCanvas', './AirCanvas', './FovCanvas', './SoundCanvas', './HudCanvas', './config'], function(terrain, players, air, fov, sound, hud, config) {
        var messageHistory = [];
        var lastDrawn;

        function currentFrameIsLatest() {
            return messageHistory.length == hud.getCurrentFrame();
        }

        window.requestAnimFrame = (function(callback) {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000/60);
                };
        })();

        return {
            getHistorySize: function() { return messageHistory.length; },
            init: function(callback) {
                terrain.init(function() {
                    air.init(function() {
                        players.init(function() {
                            callback();
                        });
                    });
                });
            },
            handle: function(msg) {
                var data = JSON.parse(msg);

                if (data.tiles && data.tiles.length > 0 && terrain.tiles.length == 0) {
                    var lastTile = data.tiles[data.tiles.length-1];
                    config.tilesXCount = lastTile.X;
                    config.tilesYCount = lastTile.Y;
                    var environment = data.environment ? data.environment : 'forest';
                    terrain.setTiles(data.tiles, environment);
                    messageHistory.push(data);
                    hud.setCurrentFrame(messageHistory.length);
                    this.resize();
                    this.redraw(1);
                    var mock = '{"type":"gameState","timeLeft":23,"id":"9ad26e38-534e-4344-ac72-99ffb7d91963","startTime":"2015-02-19T00:13:13.430704923Z","timeLimit":60000000000,"state":"running","gameArea":[50,28],"mode":"DEATHMATCH","environment":"","players":[{"radius":1,"position":{"x":0,"y":0},"velocity":{"x":0,"y":0},"id":"a401b51a-be99-4dfe-aa60-583f33fce546","botId":"12bede08-97c1-4e73-bea7-3c6084bad6ac","name":"","team":0,"lookingAt":{"x":0,"y":0},"hitpoints":100,"damageMade":0,"killed":null,"lastFired":"0001-01-01T00:00:00Z","linkdead":false,"action":{"type":"","direction":null}},{"radius":1,"position":{"x":0,"y":0},"velocity":{"x":0,"y":0},"id":"1e819fd6-b9fd-4cd0-ab39-f39bc14287b0","botId":"3ee5afcd-4d65-4a2a-9d25-eff9afec1665","name":"","team":1,"lookingAt":{"x":0,"y":0},"hitpoints":100,"damageMade":0,"killed":null,"lastFired":"0001-01-01T00:00:00Z","linkdead":false,"action":{"type":"","direction":null}}],"bullets":null,"collisions":null,"startingPositions":[{"x":21,"y":21},{"x":24,"y":24}]}';
                    this.handle(mock);
                    return;
                }

                // Save for pause and playback
                messageHistory.push(data);
                if (!hud.isPaused()) {
                    hud.setCurrentFrame(messageHistory.length);
                    if (currentFrameIsLatest()) {
                        this.draw(hud.getCurrentFrame(), false);
                    }
                }
            },
            draw: function(frame, moving) {
                console.log("Draw frame " + frame);
                var data = messageHistory[frame-1];
                if (moving || data.tiles != undefined && data.tiles.length > 0) {
                    terrain.draw();
                }
                if (data.players) {
                    players.draw(data.players);

                    // Draw player names, hp bars and other stuff to hud.
                    // Hud is on top of fov canvas so darkness won't affect on it.
                    hud.drawPlayerData(data.players);
                }
                hud.drawTimeLeft(data.timeLeft);

                air.draw(data.items, data.bullets);

                if (data.players) {
                    fov.draw(data.players);
                }

                if (!moving && data.sounds) {
                    sound.draw(data.sounds);
                }
                lastDrawn = (new Date()).getTime();

                var that = this;
                if (!hud.isPaused() && !currentFrameIsLatest()) {
                    requestAnimFrame(function() {
                        hud.setCurrentFrame(hud.getCurrentFrame()+1);
                        that.draw(hud.getCurrentFrame());
                    });
                }
            },
			redraw: function(frame) {
				console.log("Redrawing tiles and all...");
				this.draw(frame, false);
			},
            resize: function() {
                terrain.resize();
                players.resize();
                air.resize();
                fov.resize();
                sound.resize();
                hud.resize();
            }
        }
    }
);
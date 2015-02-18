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

                if (terrain.tiles.length == 0 && data.tiles) {
                    var lastTile = data.tiles[data.tiles.length-1];
                    config.tilesXCount = lastTile.X;
                    config.tilesYCount = lastTile.Y;
                    terrain.setTiles(data.tiles);
                    messageHistory.push(data);
                    this.resize();
                    this.redraw(1)
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
                if (data.tiles != undefined && data.tiles.length > 0) {
                    terrain.draw();
                }
                if (data.players) {
                    players.draw(data.players);

                    // Draw player names, hp bars and other stuff to hud.
                    // Hud is on top of fov canvas so darkness won't affect on it.
                    hud.drawPlayerData(data.players);
                }

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
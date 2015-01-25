/**
 * Created with IntelliJ IDEA.
 * User: Hell
 * Date: 13.11.2014
 * Time: 1:13
 * To change this template use File | Settings | File Templates.
 */
define(["require", "./config", "./HudCanvas"], function(require) {
        var config = require("config");
        var TILE_SIZE = config.getTileSize();
        var hud = require("HudCanvas");
        var ctx = document.getElementById("terraincanvas").getContext("2d");
        var textureMap = {};

        return {
			tiles: [],
            init: function(callback) {
                var tileTypes = [
                    't0','t1','t2','t3','t4','grass'
                ];

                for (var i = 0; i < tileTypes.length; i++) {
                    var img = new Image();
                    img.src = config.assetsPath + "tiles/"+ tileTypes[i] + ".png";
                    textureMap[i] = img;
                    if (i == tileTypes.length-1) {
                        img.onload = callback;
                    }
                }

                this.resize();
            },
            draw: function() {
                console.log("Drawing tiles...");
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.fillStyle = "black";
                ctx.fill();

                if (this.tiles.length > 0) {
                    var lastTile = this.tiles[this.tiles.length-1];

                    var fullTiles = [];
                    // Fill tiles with ground
                    for (var y = 0; y <= lastTile.Y; y++) {
                        for (var x = 0; x <= lastTile.X; x++) {
                            var tile = {"Type":5, "X":x, "Y":y};
                            fullTiles[y*lastTile.Y+x] = tile;

                            if (hud.isDebugMode()) {
                                ctx.drawImage(textureMap[tile.Type], tile.X * TILE_SIZE + config.offset[0], tile.Y * TILE_SIZE + config.offset[1], TILE_SIZE - 1, TILE_SIZE - 1);
                            } else {
                                ctx.drawImage(textureMap[tile.Type], tile.X * TILE_SIZE, tile.Y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                            }
                        }
                    }

                    // Place obstacles
                    for (var i = 0; i < this.tiles.length; i++) {
                        tile = this.tiles[i];
                        fullTiles[tile.Y * lastTile.Y + tile.X] = tile;
                    }

                    // Bitmasks
                    var TOP_LEFT = 1;
                    var TOP = 2;
                    var TOP_RIGHT = 4;
                    var LEFT = 8;
                    var RIGHT = 16;
                    var BOTTOM_LEFT = 32;
                    var BOTTOM = 64;
                    var BOTTOM_RIGHT = 128;

                    // Draw obstacles
                    for (var i = 0; i < fullTiles.length; i++) {
                        tile = fullTiles[i];

                        var type = tile.Type;
                        var rotate = 0;
                        if (tile.Type == 1) {
                            type = 4;
                            var s = 0;

                            //var topLeft = fullTiles[(tile.Y - 1) * lastTile.Y + (tile.X - 1)];
                            //s = topLeft ? topLeft.Type == 1 ? TOP_LEFT : 0 : TOP_LEFT;
                            var topCenter = fullTiles[(tile.Y - 1) * lastTile.Y + tile.X];
                            s = topCenter ? topCenter.Type == 1 ? TOP : 0 : TOP;
                            //var topRight = fullTiles[(tile.Y - 1) * lastTile.Y + (tile.X + 1)];
                            //s |= topRight ? topRight.Type == 1 ? TOP_RIGHT : 0 : TOP_RIGHT;
                            var left = fullTiles[tile.Y * lastTile.Y + (tile.X - 1)];
                            s |= left ? left.Type == 1 ? LEFT : 0 : LEFT;
                            var right = fullTiles[tile.Y * lastTile.Y + (tile.X + 1)];
                            s |= right ? right.Type == 1 ? RIGHT : 0 : RIGHT;
                            //var bottomLeft = fullTiles[(tile.Y + 1) * lastTile.Y + (tile.X - 1)];
                            //s |= bottomLeft ? bottomLeft.Type == 1 ? BOTTOM_LEFT : 0 : BOTTOM_LEFT;
                            var bottomCenter = fullTiles[(tile.Y + 1) * lastTile.Y + tile.X];
                            s |= bottomCenter ? bottomCenter.Type == 1 ? BOTTOM : 0 : BOTTOM;
                            //var bottomRight = fullTiles[(tile.Y + 1) * lastTile.Y + (tile.X + 1)];
                            //s |= bottomRight ? bottomRight.Type == 1 ? BOTTOM_RIGHT : 0 : BOTTOM_RIGHT;

                            // Fully surrounded
                            if ((TOP | LEFT | RIGHT | BOTTOM) == s) {
                                type = 0;
                            }

                            // Top open
                            else if ((LEFT | RIGHT | BOTTOM) == s) {
                                type = 1;
                            }

                            // Bottom open
                            else if ((LEFT | RIGHT | TOP) == s) {
                                type = 1;
                                rotate = 180*Math.PI/180;
                            }

                            // Right open
                            else if ((LEFT | BOTTOM | TOP) == s) {
                                type = 1;
                                rotate = 90*Math.PI/180;
                            }

                            // Left open
                            else if ((RIGHT | BOTTOM | TOP) == s) {
                                type = 1;
                                rotate = 270*Math.PI/180;
                            }

                            // Left and bottom open
                            else if ((RIGHT | TOP) == s) {
                                type = 2;
                                rotate = 270*Math.PI/180;
                            }

                            // Right and bottom open
                            else if ((LEFT | TOP) == s) {
                                type = 2;
                                rotate = 180*Math.PI/180;
                            }

                            // Right and top open
                            else if ((LEFT | BOTTOM) == s) {
                                type = 2;
                                rotate = 90*Math.PI/180;
                            }

                            // Left and top open
                            else if ((RIGHT | BOTTOM) == s) {
                                type = 2;
                            }
                        }

                        if (hud.isDebugMode()) {
                            ctx.save();
                            ctx.translate(tile.X*TILE_SIZE + config.offset[0], tile.Y*TILE_SIZE + config.offset[1]);
                            if (rotate > 0) {
                                ctx.translate((TILE_SIZE-1)/2, (TILE_SIZE-1)/2);
                                ctx.rotate(rotate);
                                ctx.translate(-(TILE_SIZE-1)/2, -(TILE_SIZE-1)/2);
                            }
                            ctx.drawImage(textureMap[type], 0, 0, TILE_SIZE-1, TILE_SIZE-1);
                            ctx.restore();
                        } else {
                            ctx.drawImage(textureMap[type], tile.X * TILE_SIZE + config.offset[0], tile.Y * TILE_SIZE + config.offset[1], TILE_SIZE, TILE_SIZE);
                        }
                    }
                }
            },
            resize: function() {
                TILE_SIZE = config.getTileSize();
                ctx.canvas.width  = window.innerWidth;
                ctx.canvas.height = window.innerHeight;
				this.draw();
            }
        }
    }
);
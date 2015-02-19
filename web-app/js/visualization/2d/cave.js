define(["require", "./config", "./HudCanvas"], function(require) {
    var config = require("config");
    var hud = require("HudCanvas");
    var TILE_SIZE = config.getTileSize();
    var ctx = document.getElementById("terraincanvas").getContext("2d");
    var CAVE = 'cave';
    var groundTexture;
    var textureMap = {};
    var tileVariants = 1;
    var tiles = [];

    return {
        init: function(callback) {
            for (var i = 0; i < tileVariants; i++) {
                img = new Image();
                img.src = config.assetsPath + "tiles/" + CAVE + (i+1) + ".png";
                if (i == tileVariants-1) {
                    img.onload = function() {
                        var img = new Image();
                        img.src = config.assetsPath + "tiles/"+ CAVE + "_ground.png";
                        img.onload = callback;
                        groundTexture = img;
                    }
                }
                textureMap[i] = img;
            }
        },
        setTiles: function(tiles) {
            this.tiles = tiles;
        },
        draw: function () {
            // Draw ground first

            var currentTileX = 0;
            var currentTileY = 0;
            var tileSize = 256;
            var imageSize = 1024;

            var lastTile = this.tiles[this.tiles.length-1];

            // Draw ground
            for (var x = 0; x <= lastTile.X; x++) {
                for (var y = 0; y <= lastTile.Y; y++) {
                    var tile = this.tiles[x*(lastTile.Y+1)+y];
                    if (hud.isDebugMode()) {
                        ctx.drawImage(
                            groundTexture,
                            currentTileX,
                            currentTileY,
                            tileSize,
                            tileSize,
                            tile.X * TILE_SIZE + config.offset[0],
                            tile.Y * TILE_SIZE + config.offset[1],
                            TILE_SIZE - 1,
                            TILE_SIZE - 1);
                    } else {
                        ctx.drawImage(
                            groundTexture,
                            currentTileX,
                            currentTileY,
                            tileSize,
                            tileSize,
                            tile.X * TILE_SIZE + config.offset[0],
                            tile.Y * TILE_SIZE + config.offset[1],
                            TILE_SIZE,
                            TILE_SIZE);
                    }
                    currentTileX += tileSize;
                    currentTileX %= imageSize;
                }
                currentTileX = 0;
                currentTileY += tileSize;
                currentTileY %= imageSize;
            }


            // Then obstacles

            // Bitmasks
            var TOP = 1;
            var LEFT = 2;
            var RIGHT = 4;
            var BOTTOM = 8;

            currentTileX = 0;
            currentTileY = 0;
            tileSize = 64;
            imageSize = 1024;

            // Draw obstacles
            for (x = 0; x <= lastTile.X; x++) {
                for (y = 0; y <= lastTile.Y; y++) {
                    tile = this.tiles[x * (lastTile.Y+1) + y];
                    if (tile.Type != 'ground') {
                        var type = 0;
                        var s = 0;

                        var topCenter = this.tiles[tile.X * (lastTile.Y+1) + (tile.Y - 1)];
                        s = topCenter ? topCenter.Type != 'ground' ? TOP : 0 : TOP;
                        var left = this.tiles[(tile.X - 1) * (lastTile.Y+1) + tile.Y];
                        s |= left ? left.Type != 'ground' ? LEFT : 0 : LEFT;
                        var right = this.tiles[(tile.X + 1) * (lastTile.Y+1) + tile.Y];
                        s |= right ? right.Type != 'ground' ? RIGHT : 0 : RIGHT;
                        var bottomCenter = this.tiles[tile.X * (lastTile.Y+1) + (tile.Y + 1)];
                        s |= bottomCenter ? bottomCenter.Type != 'ground' ? BOTTOM : 0 : BOTTOM;

                        ctx.save();
                        ctx.translate(tile.X * TILE_SIZE + config.offset[0], tile.Y * TILE_SIZE + config.offset[1]);

                        var fullySurrounded = ((LEFT | BOTTOM | RIGHT | TOP) == s);

                        // If fully surrounded
                        if (!fullySurrounded) {
                            var radius = 50;

                            // No surroundings
                            if (s == 0) {
                                radius = 20;
                                ctx.beginPath();
                                ctx.moveTo(radius, 0);
                                ctx.lineTo(TILE_SIZE - radius, 0);
                                ctx.quadraticCurveTo(TILE_SIZE, 0, TILE_SIZE, radius);
                                ctx.lineTo(TILE_SIZE, TILE_SIZE - radius);
                                ctx.quadraticCurveTo(TILE_SIZE, TILE_SIZE, TILE_SIZE - radius, TILE_SIZE);
                                ctx.lineTo(radius, TILE_SIZE);
                                ctx.quadraticCurveTo(0, TILE_SIZE, 0, TILE_SIZE - radius);
                                ctx.lineTo(0, radius);
                                ctx.quadraticCurveTo(0, 0, radius, 0);
                                ctx.closePath();
                            }
                            // Left, right and top open
                            else if ((BOTTOM) == s) {
                                radius = 20;
                                ctx.beginPath();
                                ctx.moveTo(radius, 0);
                                ctx.lineTo(TILE_SIZE - radius, 0);
                                ctx.quadraticCurveTo(TILE_SIZE, 0, TILE_SIZE, radius);
                                ctx.lineTo(TILE_SIZE, TILE_SIZE);
                                ctx.lineTo(0, TILE_SIZE);
                                ctx.lineTo(0, radius);
                                ctx.quadraticCurveTo(0, 0, radius, 0);
                                ctx.closePath();
                            }

                            // Left, bottom and top open
                            else if ((RIGHT) == s) {
                                radius = 20;
                                ctx.beginPath();
                                ctx.moveTo(radius, 0);
                                ctx.lineTo(TILE_SIZE, 0);
                                ctx.lineTo(TILE_SIZE, TILE_SIZE);
                                ctx.lineTo(radius, TILE_SIZE);
                                ctx.quadraticCurveTo(0, TILE_SIZE, 0, TILE_SIZE - radius);
                                ctx.lineTo(0, radius);
                                ctx.quadraticCurveTo(0, 0, radius, 0);
                                ctx.closePath();
                            }

                            // Right, bottom and top open
                            else if ((LEFT) == s) {
                                radius = 20;
                                ctx.beginPath();
                                ctx.moveTo(0, 0);
                                ctx.lineTo(TILE_SIZE - radius, 0);
                                ctx.quadraticCurveTo(TILE_SIZE, 0, TILE_SIZE, radius);
                                ctx.lineTo(TILE_SIZE, TILE_SIZE - radius);
                                ctx.quadraticCurveTo(TILE_SIZE, TILE_SIZE, TILE_SIZE - radius, TILE_SIZE);
                                ctx.lineTo(0, TILE_SIZE);
                                ctx.lineTo(0, 0);
                                ctx.closePath();
                            }

                            // Right, bottom and left open
                            else if ((TOP) == s) {
                                radius = 20;
                                ctx.beginPath();
                                ctx.moveTo(0, 0);
                                ctx.lineTo(TILE_SIZE, 0);
                                ctx.lineTo(TILE_SIZE, TILE_SIZE - radius);
                                ctx.quadraticCurveTo(TILE_SIZE, TILE_SIZE, TILE_SIZE - radius, TILE_SIZE);
                                ctx.lineTo(radius, TILE_SIZE);
                                ctx.quadraticCurveTo(0, TILE_SIZE, 0, TILE_SIZE - radius);
                                ctx.lineTo(0, 0);
                                ctx.closePath();
                            }
                            // Left and bottom open
                            else if ((RIGHT | TOP) == s) {
                                ctx.beginPath();
                                ctx.moveTo(0, 0);
                                ctx.lineTo(TILE_SIZE, 0);
                                ctx.lineTo(TILE_SIZE, TILE_SIZE);
                                ctx.lineTo(radius, TILE_SIZE);
                                ctx.quadraticCurveTo(0, TILE_SIZE, 0, TILE_SIZE - radius);
                                ctx.lineTo(0, 0);
                                ctx.closePath();
                            }

                            // Right and bottom open
                            else if ((LEFT | TOP) == s) {
                                ctx.beginPath();
                                ctx.moveTo(0, 0);
                                ctx.lineTo(TILE_SIZE, 0);
                                ctx.lineTo(TILE_SIZE, TILE_SIZE - radius);
                                ctx.quadraticCurveTo(TILE_SIZE, TILE_SIZE, TILE_SIZE - radius, TILE_SIZE);
                                ctx.lineTo(0, TILE_SIZE);
                                ctx.lineTo(0, 0);
                                ctx.closePath();
                            }

                            // Right and top open
                            else if ((LEFT | BOTTOM) == s) {
                                ctx.beginPath();
                                ctx.moveTo(0, 0);
                                ctx.lineTo(TILE_SIZE - radius, 0);
                                ctx.quadraticCurveTo(TILE_SIZE, 0, TILE_SIZE, radius);
                                ctx.lineTo(TILE_SIZE, TILE_SIZE);
                                ctx.lineTo(0, TILE_SIZE);
                                ctx.lineTo(0, 0);
                                ctx.closePath();
                            }

                            // Left and top open
                            else if ((RIGHT | BOTTOM) == s) {
                                ctx.beginPath();
                                ctx.moveTo(radius, 0);
                                ctx.lineTo(TILE_SIZE, 0);
                                ctx.lineTo(TILE_SIZE, TILE_SIZE);
                                ctx.lineTo(0, TILE_SIZE);
                                ctx.lineTo(0, radius);
                                ctx.quadraticCurveTo(0, 0, radius, 0);
                                ctx.closePath();
                            }

                            else {
                                ctx.beginPath();
                                ctx.moveTo(0, 0);
                                ctx.lineTo(TILE_SIZE, 0);
                                ctx.lineTo(TILE_SIZE, TILE_SIZE);
                                ctx.lineTo(0, TILE_SIZE);
                                ctx.lineTo(0, 0);
                                ctx.closePath();
                            }

                            ctx.clip();
                        }

                        if (hud.isDebugMode()) {
                            ctx.drawImage(
                                textureMap[type],
                                currentTileX,
                                currentTileY,
                                tileSize,
                                tileSize,
                                0,
                                0,
                                TILE_SIZE - 1,
                                TILE_SIZE - 1);
                        } else {
                            ctx.drawImage(
                                textureMap[type],
                                currentTileX,
                                currentTileY,
                                tileSize,
                                tileSize,
                                0,
                                0,
                                TILE_SIZE,
                                TILE_SIZE);
                        }
                        ctx.restore();
                    }
                    currentTileY += tileSize;
                    currentTileY %= imageSize;
                }
                currentTileY = 0;
                currentTileX += tileSize;
                currentTileX %= imageSize;
            }
        },
        resize: function() {
            TILE_SIZE = config.getTileSize();
            ctx.canvas.width  = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
            this.draw();
        }
    }
});
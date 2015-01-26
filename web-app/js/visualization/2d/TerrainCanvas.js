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
        var groundTextures = {};
        var fullTiles = [];
        var environments = ['forest','cave'];
        var tileVariants = 4;
        var environment;

        return {
			tiles: [],
            init: function(callback) {
                // Load textures
                for (i = 0; i < environments.length; i++) {
                    img = new Image();
                    img.src = config.assetsPath + "tiles/"+ environments[i] + "_ground.png";
                    groundTextures[environments[i]] = img;

                }

                for (var i = 0; i < environments.length; i++) {
                    for (var j = 0; j < tileVariants; j++) {
                        var img = new Image();
                        img.src = config.assetsPath + "tiles/" + environments[i] + (j+1) + ".png";
                        textureMap[i*(environments.length+tileVariants)+j] = img;
                        if (i == environments.length-1 && j == tileVariants-1) {
                            img.onload = callback;
                        }
                    }
                }

                this.resize();
            },
            setTiles: function(data) {
                //TODO: Check if forest or cavern
                this.environment = "forest";

                this.tiles = data;
                var lastTile = this.tiles[this.tiles.length-1];

                // Fill the whole map with ground
                for (var y = 0; y <= lastTile.Y; y++) {
                    for (var x = 0; x <= lastTile.X; x++) {
                        var type = "ground";
                        fullTiles[y * lastTile.Y + x] = {"Type": type, "X": x, "Y": y};
                    }
                }

                // Place obstacles (trees, walls)
                for (var i = 0; i < this.tiles.length; i++) {
                    var tile = this.tiles[i];
                    // Randomly use one of the 4 different obstacle types
                    tile.Type = Math.floor((Math.random() * 4));
                    fullTiles[tile.Y * lastTile.Y + tile.X] = tile;
                }
            },
            draw: function() {
                console.log("Drawing tiles...");
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.fillStyle = "black";
                ctx.fill();

                if (this.tiles.length > 0) {
                    var FILL_TREE_SIZE = 140;

                    // Draw ground first
                    for (var i = 0; i < fullTiles.length; i++) {
                        var tile = fullTiles[i];
                        if (tile.Type == 'ground') {
                            if (hud.isDebugMode()) {
                                ctx.drawImage(
                                    groundTextures[this.environment],
                                    tile.X * TILE_SIZE + config.offset[0],
                                    tile.Y * TILE_SIZE + config.offset[1],
                                    TILE_SIZE - 1,
                                    TILE_SIZE - 1);
                            } else {
                                ctx.drawImage(
                                    groundTextures[this.environment],
                                    tile.X * TILE_SIZE + config.offset[0],
                                    tile.Y * TILE_SIZE + config.offset[1],
                                    TILE_SIZE,
                                    TILE_SIZE);
                            }
                        }
                    }

                    // Then obstacles
                    for (i = 0; i < fullTiles.length; i++) {
                        tile = fullTiles[i];
                        if (tile.Type != 'ground') {
                            var tileType = (environments.length+tileVariants)*environments.indexOf(this.environment) + tile.Type;
                            if (hud.isDebugMode()) {
                                ctx.save();
                                ctx.translate(tile.X * TILE_SIZE + config.offset[0], tile.Y * TILE_SIZE + config.offset[1]);
                                ctx.drawImage(
                                    textureMap[tileType],
                                    0,
                                    0,
                                    FILL_TREE_SIZE,
                                    FILL_TREE_SIZE,
                                    0 - TILE_SIZE/4,
                                    0 - TILE_SIZE/4,
                                    TILE_SIZE*1.5,
                                    TILE_SIZE*1.5);
                                ctx.restore();
                            } else {
                                ctx.save();
                                ctx.translate(tile.X * TILE_SIZE + config.offset[0], tile.Y * TILE_SIZE + config.offset[1]);
                                ctx.drawImage(
                                    textureMap[tileType],
                                    0,
                                    0,
                                    FILL_TREE_SIZE,
                                    FILL_TREE_SIZE,
                                    0 - TILE_SIZE/4,
                                    0 - TILE_SIZE/4,
                                    TILE_SIZE*1.5,
                                    TILE_SIZE*1.5);
                                ctx.restore();
                            }
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
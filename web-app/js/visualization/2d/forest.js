define(["require", "./config", "./HudCanvas"], function(require) {
    var config = require("config");
    var hud = require("HudCanvas");
    var TILE_SIZE = config.getTileSize();
    var ctx = document.getElementById("terraincanvas").getContext("2d");
    var FOREST = 'forest';
    var groundTexture;
    var textureMap = {};
    var tileVariants = 4;
    var FILL_TREE_SIZE = 140;
    var tiles = [];

    return {
        init: function(callback) {
            var img = new Image();
            img.src = config.assetsPath + "tiles/"+ FOREST + "_ground.png";
            groundTexture = img;

            for (var i = 0; i < tileVariants; i++) {
                img = new Image();
                img.src = config.assetsPath + "tiles/" + FOREST + (i+1) + ".png";
                textureMap[i] = img;
                if (i == tileVariants-1) {
                    img.onload = callback;
                }
            }
        },
        setTiles: function(fulltiles) {
            this.tiles = fulltiles;
        },
        draw: function () {
            // Draw ground first
            for (var i = 0; i < this.tiles.length; i++) {
                var tile = this.tiles[i];
                if (tile.Type == 'ground') {
                    if (hud.isDebugMode()) {
                        ctx.drawImage(
                            groundTexture,
                            tile.X * TILE_SIZE + config.offset[0],
                            tile.Y * TILE_SIZE + config.offset[1],
                            TILE_SIZE - 1,
                            TILE_SIZE - 1);
                    } else {
                        ctx.drawImage(
                            groundTexture,
                            tile.X * TILE_SIZE + config.offset[0],
                            tile.Y * TILE_SIZE + config.offset[1],
                            TILE_SIZE,
                            TILE_SIZE);
                    }
                }
            }

            // Then obstacles
            for (i = 0; i < this.tiles.length; i++) {
                tile = this.tiles[i];
                if (tile.Type != 'ground') {
                    var tileType = tile.Type;
                    if (hud.isDebugMode()) {
                        ctx.save();
                        ctx.translate(tile.X * TILE_SIZE + config.offset[0], tile.Y * TILE_SIZE + config.offset[1]);
                        ctx.drawImage(
                            textureMap[tileType],
                            0,
                            0,
                            FILL_TREE_SIZE,
                            FILL_TREE_SIZE,
                            0 - TILE_SIZE / 4,
                            0 - TILE_SIZE / 4,
                            TILE_SIZE * 1.5,
                            TILE_SIZE * 1.5);
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
                            0 - TILE_SIZE / 4,
                            0 - TILE_SIZE / 4,
                            TILE_SIZE * 1.5,
                            TILE_SIZE * 1.5);
                        ctx.restore();
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
});
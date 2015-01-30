/**
 * Created with IntelliJ IDEA.
 * User: Hell
 * Date: 13.11.2014
 * Time: 1:13
 * To change this template use File | Settings | File Templates.
 */
define(["require", "./config", './cave', './forest'], function(require) {
        var config = require("config");
        var cave = require("cave");
        var forest = require("forest");
        var ctx = document.getElementById("terraincanvas").getContext("2d");
        var environment;

        return {
			tiles: [],
            init: function(callback) {
                // Load textures
                cave.init(function() {
                    forest.init(callback);
                });
                this.resize();
            },
            setTiles: function(data) {
                //TODO: Check if forest or cave
                this.environment = "forest";

                this.tiles = data;
                var lastTile = this.tiles[this.tiles.length-1];

                var fullTiles = [];
                // Fill the whole map with ground
                for (var y = 0; y <= lastTile.Y; y++) {
                    for (var x = 0; x <= lastTile.X; x++) {
                        fullTiles[y * lastTile.Y + x] = {"Type": "ground", "X": x, "Y": y};
                    }
                }

                // Place obstacles (trees, walls)
                for (var i = 0; i < this.tiles.length; i++) {
                    var tile = this.tiles[i];
                    // Randomly use one of the 4 different obstacle types
                    tile.Type = Math.floor((Math.random() * 4));
                    fullTiles[tile.Y * lastTile.Y + tile.X] = tile;
                }

                if (this.environment == 'cave') {
                    cave.setTiles(fullTiles);
                } else if (this.environment == 'forest') {
                    forest.setTiles(fullTiles);
                }
            },
            draw: function() {
                console.log("Drawing tiles...");
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.fillStyle = "black";
                ctx.fill();

                if (this.tiles.length > 0) {
                    if (this.environment == 'cave') {
                        cave.draw();
                    } else if (this.environment == 'forest') {
                        forest.draw();
                    }
                }
            },
            resize: function() {
                ctx.canvas.width  = window.innerWidth;
                ctx.canvas.height = window.innerHeight;

                if (this.environment == 'cave') {
                    cave.resize();
                } else if (this.environment == 'forest') {
                    forest.resize();
                }
            }
        }
    }
);
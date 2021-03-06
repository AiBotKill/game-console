/**
 * Created with IntelliJ IDEA.
 * User: Hell
 * Date: 13.11.2014
 * Time: 1:13
 * To change this template use File | Settings | File Templates.
 */
define(["require", "./config"], function(require) {
        var config = require("config");
        var TILE_SIZE = config.getTileSize();
        var ctx = document.getElementById("aircanvas").getContext("2d");
        var textureMap = {};

        function drawItems(items) {
            console.log("Drawing items...");

            if (items) {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    var width = TILE_SIZE * item.size;
                    var height = TILE_SIZE * item.size;
                    ctx.shadowColor = '#101010';
                    ctx.shadowBlur = 10;
                    ctx.shadowOffsetX = 10;
                    ctx.shadowOffsetY = 10;
                    ctx.drawImage(textureMap[item.type], item.x * TILE_SIZE - width / 2, item.y * TILE_SIZE - height / 2, width, height);
                }
            }
        }

        function drawBullets(bullets) {
            console.log("Drawing bullets...");
            if (bullets) {
                for (var i = 0; i < bullets.length; i++) {
                    var bullet = bullets[i];
                    var x = bullet.position.x * TILE_SIZE + config.offset[0];
                    var y = bullet.position.y * TILE_SIZE + config.offset[1];

                    ctx.beginPath();
                    ctx.arc(x, y, TILE_SIZE / 10, 0, 2 * Math.PI, false);
                    ctx.lineWidth = 1;
                    ctx.fillStyle = "rgba(255, 255, 0, 1)";
                    ctx.fill();
                }
            }
        }

        return {
            init: function(callback) {
                var itemTypes = [
                    'box1.png'
                ];

                for (var i = 0; i < itemTypes.length; i++) {
                    var img = new Image();
                    img.src = config.assetsPath + "items/"+ itemTypes[i];
                    textureMap[itemTypes[i]] = img;
                    if (i == itemTypes.length-1) {
                        img.onload = callback;
                    }
                }

                this.resize();
            },
            draw: function(items, bullets) {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                drawItems(items);
                drawBullets(bullets);
            },
            resize: function() {
                TILE_SIZE = config.getTileSize();
                ctx.canvas.width  = window.innerWidth;
                ctx.canvas.height = window.innerHeight;
            }
        }
    }
);
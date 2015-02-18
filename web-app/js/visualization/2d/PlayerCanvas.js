/**
 * Created with IntelliJ IDEA.
 * User: Hell
 * Date: 13.11.2014
 * Time: 1:13
 * To change this template use File | Settings | File Templates.
 */
define(["require", "./HudCanvas", "./config"], function(require) {
        var hud = require("HudCanvas");
        var config = require("config");
        var TILE_SIZE = config.getTileSize();
        var PLAYER_SIZE = getPlayerSize();

        var ctx = document.getElementById("playercanvas").getContext("2d");
        var img = new Image();

        function getPlayerSize() {
            return TILE_SIZE;
        }

        function findAngle(v1, v2) {
            var angle1 = Math.atan2(-v1.y, -v1.x);
            var angle2 = Math.atan2(-v2.y, v2.x);
            return angle1-angle2;
        }

        function drawPlayer(player, x, y) {
            // Calculate the angle between vectors 0,-1 and player velocity
            var v1 = {x:0, y:-1};
            var angle = findAngle(v1, player.lookingAt); // TODO: Should use looking direction instead of velocity
            ctx.save();
            ctx.shadowColor = '#101010';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = PLAYER_SIZE/5;
            ctx.shadowOffsetY = PLAYER_SIZE/5;
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.drawImage(img, -PLAYER_SIZE/2, -PLAYER_SIZE/2, PLAYER_SIZE, PLAYER_SIZE);
            ctx.restore();
        }

        function drawRingOfHearing(player, x, y) {
            ctx.beginPath();
            ctx.arc(x, y, player.hearing*TILE_SIZE/5, 0, 2 * Math.PI, false);
            ctx.lineWidth = 1;
            var opacity = hud.isDebugMode() ? 0.1 : 0.2;
            ctx.fillStyle = "rgba(240, 255, 90, " + opacity + ")";
            if (hud.isDebugMode()) {
                ctx.strokeStyle = "rgba(0,0,0,0.5)";
                ctx.stroke();
            }
            ctx.fill();
        }

        return {
            init: function(callback) {
                img.src = config.assetsPath + "player.png";
                img.onload = callback;
                this.resize();
            },
            draw: function(players) {
                console.log("Drawing players...");
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                for (i = 0; i < players.length; i++) {
                    var player = players[i];
                    var x = player.position.x * TILE_SIZE + config.offset[0];
                    var y = player.position.y * TILE_SIZE + config.offset[1];

                    //drawRingOfHearing(player, x, y);
                    drawPlayer(player, x, y);
                }
            },
            resize: function() {
                TILE_SIZE = config.getTileSize();
                PLAYER_SIZE = getPlayerSize();
                ctx.canvas.width  = window.innerWidth;
                ctx.canvas.height = window.innerHeight;
            }
        }
    }
);
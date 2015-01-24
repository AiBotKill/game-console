/**
 * Created with IntelliJ IDEA.
 * User: Hell
 * Date: 15.11.2014
 * Time: 17:44
 * To change this template use File | Settings | File Templates.
 */
define("config", [], function() {
    return {
        debugMode: true,
        tilesXCount: 21,
        tilesYCount: 13,
        assetsPath: "../../images/visualization/2d/",
        getTileSize : function() {
            return window.innerHeight / (this.tilesYCount + 1); // Tiles on y-axis and +1 for hud controls
        }
    }
});
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
        tilesXCount: 0,
        tilesYCount: 0,
        assetsPath: "../../images/visualization/2d/",
        zoom: 1,
        offset: [0, 0],
        getTileSize : function() {
            return window.innerHeight / (this.tilesYCount) * this.zoom; // Tiles on y-axis and +1 for hud controls
        }
    }
});

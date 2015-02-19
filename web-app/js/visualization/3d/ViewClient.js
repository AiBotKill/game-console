var serverData = 0;
/* Used to mark whether this is the first gamestate. */
var firstSync = true;

function initSync() {
    var client = new Client();
    connect(client);
}

/* Init the maptiles and size. */
function initMap(data) {
    WORLD_MAP = data;
    var lastTile = WORLD_MAP.tiles[WORLD_MAP.tiles.length - 1];
    MAPTILES_X = lastTile.X;
    MAPTILES_Y = lastTile.Y;
    GROUND_X = (MAPTILES_X * TILE_WIDTH);
    GROUND_Y = (MAPTILES_Y * TILE_HEIGHT);
    GROUND_TILES = GROUND_X / 16;
    WALL_TILES_COUNT = (MAPTILES_X + MAPTILES_Y) / 2;
}

/* Initialize everything.*/
function init(data) {
    serverData = data;
    generateMisc();
    generateWorld();
    // We enter gameloop.
    console.log("Entering gameloop...");
    hud = createHUDCanvas();
    firstSync = false;
    viewLoop();
}

function syncState(json){
    serverData = json;
}

function Client() {
    this.syncState = function (data) {
        var json = JSON.parse(data);
        console.log("JSON: ", json);
        if(firstSync){
            if (json.tiles) {
                initMap(json);
            }
            else if (json.type) {
                init(json);
            }
        }
        else{
            syncState(json);
        }
    };
}

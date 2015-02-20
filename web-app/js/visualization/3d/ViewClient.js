var serverData = 0;
/* Used to mark whether this is the first gamestate. */
var initDone = false;
var mapLoaded = false;
var gameInit = false;

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
    mapLoaded = true;
}

/* Initialize everything.*/
function init(data, callback) {
    serverData = data;
    generateMisc();
    generateWorld();
    // We enter gameloop.
    console.log("Entering gameloop...");
    hud = createHUDCanvas();
    viewLoop();
    callback();
}

function syncState(json){
    serverData = json;
}

function firstSyncDone(){
    gameInit = true;
    initDone = true;
    console.log("Initialization done.");
}

function Client() {
    this.syncState = function (data) {
        var json = JSON.parse(data);
        console.log("JSON: ", json);
        if(!initDone){
            if (!json.type && !mapLoaded) {
                initMap(json);
            }
            else if (json.type && !gameInit) {
                init(json, firstSyncDone);
            }
        }
        else{
            syncState(json);
        }
    };
}

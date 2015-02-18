var serverData = 0;
/* Used to mark whether this is the first gamestate. */
var firstSync = true;

function initSync() {
    var client = new Client();
    connect(client);
}


/* sync gamestate. */
function syncGamestate(data) {
    serverData = data;
}

/* Init the maptiles and size. */
function initMap() {

}

/* Initialize everything. TODO move map to init map. Data parameter is actually gamestate.*/
function init(data) {
    WORLD_MAP = data;
    var lastTile = WORLD_MAP.tiles[WORLD_MAP.tiles.length - 1];
    MAPTILES_X = lastTile.X;
    MAPTILES_Y = lastTile.Y;
    GROUND_X = (MAPTILES_X * TILE_WIDTH);
    GROUND_Y = (MAPTILES_Y * TILE_HEIGHT);
    GROUND_TILES = GROUND_X / 16;
    WALL_TILES_COUNT = (GROUND_X + GROUND_Y) / 2;
    
    synchronizeState();
    generateMisc();
    generateWorld();
    // We enter gameloop.
    console.log("Entering gameloop...");
    hud = createHUDCanvas();
    isHUDDrawn = false;
    viewLoop();
}

function synchronizeState() {
    /* TESTING HARD. */
    serverData = {
        "gamestate": {
            "rounds": "3",
            "currentRound": "0",
            "timeLeft": "300",
            "environment": TEST_ENV,
            "rain": "",
            "darkness": TEST_DARKNESS,
            "bullets": [{
                    "id": "0",
                    "x": "50",
                    "y": "50",
                    "velocity": {
                        "x": 1,
                        "y": 0.5
                    }
                }],
            "players": [{
                    "name": "Team Silver",
                    "x": 0,
                    "y": 0
                },
                {
                    "name": "Derka Derb",
                    "x": 53,
                    "y": 30
                },
                {
                    "name": "Visual Dominatrix Matrix 4D",
                    "x": 80,
                    "y": 50
                },
                {
                    "name": "Merga Lerb",
                    "x": 120,
                    "y": 80
                },
                {
                    "name": "Team Deathmatch",
                    "x": 90,
                    "y": 160
                },
                {
                    "name": "Punishers",
                    "x": 90,
                    "y": 190
                },
                {
                    "name": "Groundhog league",
                    "x": 90,
                    "y": 220
                },
                {
                    "name": "Avengers",
                    "x": 120,
                    "y": 100
                },
                {
                    "name": "Red Menace",
                    "x": 140,
                    "y": 100
                }]
        }
    };
}

function Client() {
    this.syncState = function (data) {
        console.log(data);
        var json = JSON.parse(data);
        console.log("JSON: ", json);
        if (json.tiles) {
            init(json);
        }
        /*
         else if(json.gamestate){
         // If this is the first gamestate we receive.
         if(firstSync){
         init(json);
         }
         }
         */
    };
}

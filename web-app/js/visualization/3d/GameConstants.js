/* SCREEN CONSTANTS. */
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var AOR = WIDTH / HEIGHT;
var FOV = 60;
var FAR_DISTANCE = 8000;
var NEAR_DISTANCE = 1;
/*************************/

/* RENDERING CONSTANTS. */
var TEXTURE_MIN_FILTER = THREE.LinearMipMapNearestFilter;
var TEXTURE_MAG_FILTER = THREE.LinearMipMapNearestFilter;
var NUMBER_OF_LIGHTS = 32;
var SHADOWS = true;
/************************/

/* ENVIRONMENT CONSTANTS. */
var ENVIRONMENT_CAVERN = 0;
var ENVIRONMENT_FOREST = 1;
/*****************************/

/* LIGHT VALUE CONSTANTS*/
var LIGHT_DAY = "rgb(255, 255, 255)";
var LIGHT_EVENING = "rgb(245, 196, 61)";
var LIGHT_NIGHT = "rgb(0, 200, 0)";

var LIGHT_VALUE_DAY = 2;
var LIGHT_VALUE_EVENING = 1;
var LIGHT_VALUE_NIGHT = 1.80;

var DARKNESS_DAY_MIN = 0;
var DARKNESS_EVENING_MIN = 0.33;
var DARKNESS_NIGHT_MIN = 0.66; 

/***********************************/


/* TEST CONSTANTS FOR CONSOLE DEMOING. */
var TEST_ENV = 1;
var TEST_DARKNESS = 0.5;
/***************************************/
var EXPLOSION_WIDTH = 64;
var EXPLOSION_HEIGHT = 64;
var EXPLOSION_DURATION = 40;
var HUD_STATUS_MESSAGE_DELAY = 100;

var HUD_STATUS_MESSAGE_X = 40 * (WIDTH / 100);
var HUD_STATUS_MESSAGE_Y = 3 * (HEIGHT / 100);
var HUD_STATUS_MESSAGE_BOX_X = 39.4 * (WIDTH / 100);
var HUD_STATUS_MESSAGE_BOX_Y = 0 * (WIDTH / 100);

var CAMERA_PLAYER_Z = 4.07000000000002;

var CROSSHAIR_WIDTH = 4 * (WIDTH / 100);
var CROSSHAIR_HEIGHT = 6 * (HEIGHT / 100);

var CROSSHAIR_X = (50 * (WIDTH / 100)) - CROSSHAIR_WIDTH;
var CROSSHAIR_Y = (53.5 * (HEIGHT / 100)) - CROSSHAIR_HEIGHT;

var HUD_UPPER_PLAYER_NAME_X = 1 * (WIDTH / 100);
var HUD_UPPER_TEXT_Y = 3 * (HEIGHT / 100);


var HUD_NAME_FIELD_WIDTH = 20 * (WIDTH / 100);
var HUD_NAME_FIELD_HEIGHT = 5 * (HEIGHT / 100);
var HUD_NAME_FIELD_X = 0;
var HUD_NAME_FIELD_Y = 0;

var HUD_ROUND_COUNT_X = (WIDTH - HUD_NAME_FIELD_WIDTH) + 1 * (WIDTH / 100);
var HUD_ROUND_COUNT_Y = 3 * (HEIGHT / 100);

var HUD_TIME_LEFT_X = (WIDTH - HUD_NAME_FIELD_WIDTH) + 8 * (WIDTH / 100);
var HUD_TIME_LEFT_Y = 3 * (HEIGHT / 100);

var HUD_STATUS_FIELD_WIDTH = 28 * (WIDTH / 100);
var HUD_STATUS_FIELD_HEIGHT = 20 * (HEIGHT / 100);
var HUD_STATUS_FIELD_X = 0;
var HUD_STATUS_FIELD_Y = HEIGHT - HUD_STATUS_FIELD_HEIGHT;

var HUD_HP_TEXT_X = 2 * (HEIGHT / 100);
var HUD_HP_TEXT_Y = 88 * (HEIGHT / 100);
var HUD_HP_TEAM_X = 2 * (HEIGHT / 100);
var HUD_HP_TEAM_Y = 84 * (HEIGHT / 100);

var HUD_TEXT_COLOR = "#17FF1F";


var MOVE_SPEED = 0.1;

var KEY_LEFT = 'left';
var KEY_RIGHT = 'right';
var KEY_UP = 'up';
var KEY_DOWN = 'down';

var Z_KEY = "z";
var A_KEY = "a";

var PLAYER_WIDTH = 10;
var PLAYER_HEIGHT = 10;
var PLAYER_DEPTH = 0;

var WALL_WIDTH = GROUND_X;
var WALL_HEIGHT = 128;
var WALL_DEPTH = 128;

var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;
var TILE_DEPTH = 32;

var GROUND_X = (80 * TILE_WIDTH);
var GROUND_Y = (80 * TILE_HEIGHT);
var GROUND_Z = 0;

var GROUND_TILES = GROUND_X / 16;

var WORLD_WALL_X = [(-GROUND_X / 2) + (WALL_WIDTH / 2), GROUND_X / 2 - (WALL_WIDTH / 2), -GROUND_X];
var WORLD_WALL_Y = [(-GROUND_Y / 2) + (WALL_HEIGHT / 2), GROUND_Y / 2 - (WALL_HEIGHT / 2), GROUND_Y];
var WORLD_WALL_Z = WALL_DEPTH / 2;

var TEST_MAP = {
    "tiles": [
        {
            "Type": "type",
            "X": 0.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 13.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 14.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 15.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 16.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 17.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 18.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 36.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 37.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 38.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 39.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 40.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 41.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 42.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 69.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 70.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 0.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 13.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 14.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 15.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 16.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 17.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 18.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 36.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 37.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 38.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 39.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 40.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 41.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 42.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 1.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 13.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 14.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 15.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 16.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 36.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 41.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 42.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 2.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 13.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 14.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 15.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 42.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 3.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 4.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 5.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 6.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 7.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 7.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 7.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 7.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 7.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 7.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 7.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 7.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 7.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 7.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 38.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 8.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 69.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 9.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 69.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 10.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 18.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 69.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 11.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 18.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 12.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 18.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 13.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 18.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 14.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 15.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 16.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 15.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 16.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 17.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 14.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 15.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 16.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 17.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 18.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 14.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 15.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 16.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 17.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 19.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 15.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 16.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 17.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 20.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 21.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 21.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 21.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 21.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 21.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 21.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 21.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 21.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 21.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 21.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 22.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 22.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 22.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 22.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 22.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 22.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 22.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 22.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 22.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 23.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 23.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 23.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 23.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 23.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 23.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 23.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 23.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 23.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 23.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 23.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 24.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 41.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 42.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 25.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 40.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 41.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 42.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 26.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 39.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 40.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 41.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 42.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 27.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 39.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 40.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 41.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 28.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 38.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 39.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 40.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 29.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 30.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 30.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 30.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 30.0
        },
        {
            "Type": "type",
            "X": 37.0,
            "Y": 30.0
        },
        {
            "Type": "type",
            "X": 38.0,
            "Y": 30.0
        },
        {
            "Type": "type",
            "X": 39.0,
            "Y": 30.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 30.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 30.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 30.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 30.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 31.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 31.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 31.0
        },
        {
            "Type": "type",
            "X": 36.0,
            "Y": 31.0
        },
        {
            "Type": "type",
            "X": 37.0,
            "Y": 31.0
        },
        {
            "Type": "type",
            "X": 38.0,
            "Y": 31.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 31.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 31.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 31.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 31.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 36.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 37.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 32.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 13.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 36.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 33.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 13.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 34.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 35.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 36.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 36.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 36.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 36.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 36.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 36.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 36.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 36.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 36.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 36.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 36.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 37.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 37.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 37.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 37.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 37.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 37.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 37.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 37.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 37.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 38.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 39.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 40.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 41.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 42.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 43.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 69.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 70.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 44.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 69.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 70.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 45.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 69.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 70.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 46.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 69.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 70.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 47.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 48.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 49.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 14.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 15.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 16.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 50.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 14.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 15.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 16.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 51.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 52.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 53.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 54.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 55.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 56.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 39.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 57.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 39.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 40.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 58.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 59.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 18.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 60.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 61.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 62.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 62.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 62.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 62.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 62.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 62.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 62.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 62.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 62.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 62.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 62.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 63.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 63.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 63.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 63.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 63.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 63.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 63.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 63.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 63.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 63.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 63.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 64.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 64.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 64.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 64.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 65.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 65.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 65.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 65.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 65.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 66.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 66.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 66.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 66.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 66.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 66.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 66.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 67.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 67.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 67.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 67.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 67.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 67.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 67.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 67.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 67.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 68.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 68.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 68.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 68.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 68.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 68.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 68.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 68.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 68.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 68.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 69.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 70.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 71.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 72.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 73.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 74.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 75.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 76.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 41.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 42.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 69.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 70.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 77.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 13.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 14.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 36.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 37.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 38.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 39.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 40.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 41.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 42.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 69.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 70.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 78.0
        },
        {
            "Type": "type",
            "X": 0.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 1.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 2.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 3.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 4.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 5.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 6.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 7.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 8.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 9.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 10.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 11.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 12.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 13.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 14.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 15.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 16.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 17.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 18.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 19.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 20.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 21.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 22.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 23.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 24.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 25.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 26.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 27.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 28.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 29.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 30.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 31.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 32.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 33.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 34.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 35.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 36.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 37.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 38.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 39.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 40.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 41.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 42.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 43.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 44.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 45.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 46.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 47.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 48.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 49.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 50.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 51.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 52.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 53.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 54.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 55.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 56.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 57.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 58.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 59.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 60.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 61.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 62.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 63.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 64.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 65.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 66.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 67.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 68.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 69.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 70.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 71.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 72.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 73.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 74.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 75.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 76.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 77.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 78.0,
            "Y": 79.0
        },
        {
            "Type": "type",
            "X": 79.0,
            "Y": 79.0
        }
    ]
};

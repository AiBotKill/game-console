/* SCREEN CONSTANTS. */
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var AOR = WIDTH / HEIGHT;
var FOV = 60;
var FAR_DISTANCE = 8000;
var NEAR_DISTANCE = 1;
/*************************/


/* WORLD CONSTANTS. */
/* This variable contains the world map tiles. */
var WORLD_MAP = {};
var MAPTILES_X = 0;
var MAPTILES_Y = 0;

var GROUND_X = 0; //(MAPTILES_X * TILE_WIDTH)
var GROUND_Y = 0; //(MAPTILES_Y * TILE_HEIGHT)
var GROUND_Z = 0;

var GROUND_TILES = 0; //GROUND_X / 16;
var WALL_TILES_COUNT = 0; //(GROUND_X + GROUND_Y) / 2
/*************************/

/* RENDERING CONSTANTS. */
var TEXTURE_MIN_FILTER = THREE.LinearMipMapNearestFilter;
var TEXTURE_MAG_FILTER = THREE.LinearMipMapNearestFilter;
var NUMBER_OF_LIGHTS = 4;
var NUMBER_OF_SMOKE_EMITTERS = 4;
var SMOKE_DURATION = 32;
var LASER_BLAST_DURATION = 32;
var LASER_WIDTH = 8;
var LASER_HEIGHT = 8;
var SHADOWS = true;
/************************/

/* CAMERA CONSTANTS. */
/* The number of seconds we wait before switching to another view. */
var CAMERA_TIME = 60;
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

/* CONTROL CONSTANTS. */
var KEY_COOLDOWN = 10;
/***********************************/

/* TEST CONSTANTS FOR CONSOLE DEMOING. */
var TEST_ENV = 1;
var TEST_DARKNESS = 0.2;
/***************************************/
var EXPLOSION_WIDTH = 32;
var EXPLOSION_HEIGHT = 32;
var EXPLOSION_LASER_HEIGHT = 8;
var EXPLOSION_LASER_WIDTH = 8;
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
var WALL_HEIGHT = 80;
var WALL_DEPTH = 128;

var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;
var TILE_DEPTH = 32;

var WORLD_WALL_X = [(-GROUND_X / 2) + (WALL_WIDTH / 2), GROUND_X / 2 - (WALL_WIDTH / 2), -GROUND_X];
var WORLD_WALL_Y = [(-GROUND_Y / 2) + (WALL_HEIGHT / 2), GROUND_Y / 2 - (WALL_HEIGHT / 2), GROUND_Y];
var WORLD_WALL_Z = WALL_DEPTH / 2;

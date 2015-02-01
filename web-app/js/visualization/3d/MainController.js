var scene;
var camera;
var ground;
var isHUDDrawn;

/* Model trees. */
var bulletTree = [];
var playerTree = [{
    "id":"testi",
    "model":"", // Modelidata.
}];
var explosionTree = [];
var decoTree = [];

var hudStatusMessage;
var showMessage;
var messageDelay = 0;

var playerFollowed = {
    "name": "Robomies",
    "hp": 100,
    "team": 0
};

var modelLoader;

var playerTexture = [];
var fpsMode = false;
//TESTING
var testPlayer;
var testPlayerData = {
    "direction":0
};

var lightValue;
var lightColor;

/* Player data used for visualization.
 Sillä syncillä kun pelaajan energiat näyttävät nollaa, niin pyöritetään räjähdys
 niihin koordinaatteihin ja id:tä vastaava pelaaja poistetaan visualPlayers taulukosta.
 */

var visualPlayers = [{
    "id":"testi",
    "model":"" // Modelidata.
}];

var player = {
    "id": "",
    "name": "",
    "x": "", // Tile on x-axis
    "y": "", // Tile on y-axis
    "velocity": "", // {x:float,y:float}
    "lookAt": "", // {x:float,y:float}
    "shootAt": "", // {x:float,y:float} only if player just shoot
    "currentHp": "", // 1-99
    "hp": "", // 1-99, counterpart: speed
    "speed": "", // 1-99, counterpart: hp
    "sight": 20, // 1-99, counterpart: hearing
    "hearing": "", // 1-99, counterpart: sight
    "team": "",
    "isHit": "", // If player was just hit
    "weapon": {
        "firingSpeed": "", // 1-99, counterpart: damage
        "damage": "", // 1-99, counterpart: firingSpeed
        "carry": "", // 1-99, counterpart: noise
        "noise": ""        // 1-99, counterpart: carry
    }
};

function statusMessageDelay() {
    if (messageDelay > 0) {
        messageDelay--;
    }
    else {
        showMessage = false;
        hudStatusMessage = "";
    }
}

function setStatusMessage(message) {
    showMessage = true;
    hudStatusMessage = message;
    messageDelay = HUD_STATUS_MESSAGE_DELAY;
}

function generateWorld() {
    modelLoader = new THREE.JSONLoader;
    scene = new THREE.Scene();
    console.log("Generating world...");
    CURRENT_ENV.lightsCamera();
    CURRENT_ENV.generateSky();
    CURRENT_ENV.generateMap();
    
    loadPlayerData();
}


function loadPlayerData() {
    console.log("Loading player graphics...");

    var path =  "graphics/player/";
    var x = 20;
    modelLoader.load(path + "robotti.json", function (geometry, materials) {
        // SkinnedMesh tukee animaatioita.
        testPlayer = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
        testPlayer.rotation.x += Math.PI / 2;
        testPlayer.position.x = x;
        testPlayer.position.z = -2.5;
        testPlayer.rotation.y = 3.099;
        scene.add(testPlayer);
    });
}

function renderHud() {
    var graphics = hud.getContext("2d");
    graphics.clearRect(0, 0, WIDTH, HEIGHT);

    if (showMessage) {
        graphics.font = "20px Inconsolata";
        graphics.drawImage(hudImage, HUD_STATUS_MESSAGE_BOX_X, HUD_STATUS_MESSAGE_BOX_Y,
                HUD_NAME_FIELD_WIDTH, HUD_NAME_FIELD_HEIGHT);
        graphics.fillStyle = HUD_TEXT_COLOR;
        graphics.fillText(hudStatusMessage, HUD_STATUS_MESSAGE_X, HUD_STATUS_MESSAGE_Y);
        statusMessageDelay();
        graphics.restore();
    }

    if (isHUDDrawn) {
        graphics.font = "20px Inconsolata";

        graphics.drawImage(crosshair, CROSSHAIR_X, CROSSHAIR_Y, CROSSHAIR_WIDTH, CROSSHAIR_HEIGHT);

        graphics.drawImage(hudImage, HUD_NAME_FIELD_X,
                HUD_NAME_FIELD_Y, HUD_NAME_FIELD_WIDTH, HUD_NAME_FIELD_HEIGHT);
        graphics.fillStyle = HUD_TEXT_COLOR;
        graphics.fillText("Player: " + playerFollowed.name,
                HUD_UPPER_PLAYER_NAME_X, HUD_UPPER_TEXT_Y);

        graphics.drawImage(hudImage, HUD_STATUS_FIELD_X,
                HUD_STATUS_FIELD_Y, HUD_STATUS_FIELD_WIDTH, HUD_STATUS_FIELD_HEIGHT);

        graphics.fillText("HP: " + playerFollowed.hp, HUD_HP_TEXT_X, HUD_HP_TEXT_Y);
        graphics.fillText("Team: " + playerFollowed.team, HUD_HP_TEAM_X, HUD_HP_TEAM_Y);

        graphics.drawImage(hudImage, WIDTH - HUD_NAME_FIELD_WIDTH,
                HUD_NAME_FIELD_Y, HUD_NAME_FIELD_WIDTH, HUD_NAME_FIELD_HEIGHT);

        graphics.fillText("Time left: " + serverData.gamestate.timeLeft, HUD_TIME_LEFT_X, HUD_TIME_LEFT_Y);
        graphics.fillText("Round: " + serverData.gamestate.rounds, HUD_ROUND_COUNT_X, HUD_ROUND_COUNT_Y);

        graphics.restore();
    }
}

function addBullet() {

}

function refreshPlayerData() {
    /*
     * Käydään gamestaten pelaajadataa lävitse ja vertaillaan sitä
     * visualisaation tallentamaan pelaajadataan.
     */
}

function refreshBullets(bullet) {

}

function refreshViewState() {
    refreshPlayerData();
    refreshBullets();
}



var scene;
var camera;
var ground;
var isHUDDrawn;

/* Model trees. */
/* bullet tree is constructed of laserObjects. Each of which have a model for graphics
 * and a velocity value.
 */
var bulletTree = [];
var playerTree = [];

var lightTree = [];

/* Templates which hold the geometry and material for objects that require realtime mesh
 * generation during the game. 
 * */
var laserTemplate = {};
var explosionTemplate = {};
var explosionTexture = [];
var destroyedRobotTemplate = {};

var BULLET_HEIGHT;

/* A particle tree for all the different emitters. */
var particleTree = {
    "smoke": "emittersForDeadPlayers",
    "laser": "emittersForLaserBlasts"
};

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

var playerTexture = [];
var fpsMode = false;
//TESTING
var testPlayer;
var testPlayerData = {
    "direction": 0
};


var lightValue;
var lightColor;

var clock = new THREE.Clock();

/* Player data used for visualization.
 Sillä syncillä kun pelaajan energiat näyttävät nollaa, niin pyöritetään räjähdys
 niihin koordinaatteihin ja id:tä vastaava pelaaja poistetaan visualPlayers taulukosta.
 */

var visualPlayers = [
    {
        "id": "testi",
        "model": "" // Modelidata.
    }
];

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

function fetchLight(color, intensity, distance){
    for(var i = 0; i < lightTree.length; i ++){
        if(lightTree[i].intensity === 0){
            lightTree[i].intensity = intensity;
            lightTree[i].distance = distance;
            lightTree[i].color = color;
            return lightTree[i];
        }
    }
    return false;
}

function statusMessageDelay() {
    if (messageDelay > 0) {
        messageDelay--;
    }
    else {
        showMessage = false;
        hudStatusMessage = "";
    }
};

function setStatusMessage(message) {
    showMessage = true;
    hudStatusMessage = message;
    messageDelay = HUD_STATUS_MESSAGE_DELAY;
};

function generateMisc() {
    loadPlayerData();
    loadLaserData();
    loadDestroyedRobot();
    loadExplosion();
    loadLights();
    loadParticles();
};

function generateWorld() {
    scene = new THREE.Scene();
    console.log("Generating world...");
    CURRENT_ENV.lightsCamera();
    CURRENT_ENV.generateSky();
    CURRENT_ENV.generateMap();
    scene.add(CURRENT_ENV.environmentGroup);
};

function loadLights(){
    console.log("Loading lights..");
    for(var i = 0; i < NUMBER_OF_LIGHTS; i++){
        lightTree[i] = new THREE.PointLight("rgb(0, 0, 0)", 0, 1);
        CURRENT_ENV.environmentGroup.add(lightTree[i]);
    }
}

function loadParticles(){
    particleTree.smoke = new SPE.Group({
        texture: THREE.ImageUtils.loadTexture(ASSETS_PATH + "/misc/smoketext.png"),
        maxAge: 2
    });
    particleTree.laser = new SPE.Group({
        texture: THREE.ImageUtils.loadTexture(ASSETS_PATH + "/misc/smoketext.png"),
        maxAge: 8
    });
    
    var fire = new SPE.Emitter({
        type: 'cube',
        position: new THREE.Vector3(0, 0, 0),
        positionSpread: new THREE.Vector3(1, 0, 10),
        acceleration: new THREE.Vector3(0, -10, 0),
        velocity: new THREE.Vector3(0, 0, 10),
        velocitySpread: new THREE.Vector3(8, 8, 32),
        radius: 8,
        particlesPerSecond: 100,
        angleStartSpread: 720,
        sizeStart: 32,
        sizeEnd: 8,
        opacityStart: 1,
        opacityEnd: 0,
        colorStart: new THREE.Color("red"),
        colorMiddle: new THREE.Color("orange"),
        colorEnd: new THREE.Color("white"),
        emitterDuration: SMOKE_DURATION
    });
    particleTree.smoke.addPool(NUMBER_OF_EMITTERS, fire, true);
    CURRENT_ENV.environmentGroup.add(particleTree.smoke.mesh);
}

function loadDestroyedRobot() {

};

function loadExplosion() {
    explosionTemplate = {
        "geometry": new THREE.PlaneBufferGeometry(EXPLOSION_WIDTH, EXPLOSION_HEIGHT),
        "texture": THREE.ImageUtils.loadTexture(ASSETS_PATH + '/misc/explosion.png'),
        "decalMaterial": new THREE.MeshPhongMaterial({
            'map': THREE.ImageUtils.loadTexture(ASSETS_PATH + '/misc/explosionDecal.png'),
            'bumpMap': THREE.ImageUtils.loadTexture(ASSETS_PATH + '/misc/explosionDecal.png'),
            'alphaTest': 0.5
        })
    };
};

function loadLaserData() {
    var path = ASSETS_PATH + "player/";
    modelLoader.load(path + "laser.json", function (geometry, materials) {
        laserTemplate.geometry = geometry;
        laserTemplate.materials = new THREE.MeshFaceMaterial(materials);
    });
};

function loadPlayerData() {
    console.log("Loading player graphics...");

    var path = ASSETS_PATH + "player/";
    var player;

    modelLoader.load(path + "robotti.json", function (geometry, materials) {
        // SkinnedMesh tukee animaatioita.
        var playerMaterials = new THREE.MeshFaceMaterial(materials);

        for (var i = 0; i < serverData.gamestate.players.length; i++) {
            player = new THREE.SkinnedMesh(geometry, playerMaterials);
            player.scale.set(3, 3, 3);
            player.rotation.x += Math.PI / 2;
            player.position.x = serverData.gamestate.players[i].x;
            player.position.y = serverData.gamestate.players[i].y;
            var helper = new THREE.BoundingBoxHelper(player, 0xff0000);
            helper.update();
            player.position.z -= helper.box.min.z;
            player.castShadow = true;
            player.receiveShadow = true;

            var playerObject = {
                "model": player,
                "data": serverData.gamestate.players[i]
            };

            playerTree.push(playerObject);
            CURRENT_ENV.environmentGroup.add(playerObject.model);
        }
        BULLET_HEIGHT = helper.box.min.z;
    });
};

function createSmoke(x, y){
    particleTree.smoke.triggerPoolEmitter(1, new THREE.Vector3(x, y, 0));
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
};

function createNewBullet(x, y) {
    var laser = new THREE.Mesh(laserTemplate.geometry, laserTemplate.materials);
    laser.scale.set(0.5, 0.5, 0.5);
    laser.position.x = x;
    laser.position.y = y;
    laser.position.z = BULLET_HEIGHT;
    return laser;
}

function addDestroyedRobot(x, y) {

}

function addExplosion(x, y, player) {
    var light;
    var mesh;
    if(serverData.gamestate.darkness >= DARKNESS_NIGHT_MIN){
        light = fetchLight(new THREE.Color("rgb(191, 255, 201)"), 2.0, 30);
    }
    else{
        light = fetchLight(new THREE.Color("rgb(255, 171, 0)"), 2.0, 30);
    }
    
    if(light){
        light.position.set(x, y, EXPLOSION_HEIGHT / 2 - 8);
    }
    var cloneTexture = explosionTemplate.texture.clone();
    cloneTexture.needsUpdate = true;
    if(serverData.gamestate.darkness >= DARKNESS_NIGHT_MIN){
        mesh = new THREE.Mesh(explosionTemplate.geometry, new THREE.MeshLambertMaterial({
            'map': cloneTexture,
            'alphaTest': 0.5
        }));
    }
    else{
        mesh = new THREE.Mesh(explosionTemplate.geometry, new THREE.MeshBasicMaterial({
            'map': cloneTexture,
            'alphaTest': 0.5
        }));
    }
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = EXPLOSION_HEIGHT / 2 - 2;
    var decal = new THREE.Mesh(explosionTemplate.geometry, explosionTemplate.decalMaterial);
    decal.position.x = x;
    decal.position.y = y;
    decal.position.z = 0.1;
    CURRENT_ENV.environmentGroup.add(decal);
    CURRENT_ENV.environmentGroup.add(mesh);
    explosionTree.push(new Explosion(mesh, light, player));
}

/* Explosion object used in a robot explosion. */
function Explosion(model, light, player) {
    this.model = model;
    this.light = light;
    this.player = player;
    this.model.material.map.wrapS = this.model.material.map.wrapT = THREE.RepeatWrapping;
    this.model.material.map.repeat.set(1 / 4, 1 / 4);
    /* Overall time the animation spends before it restarts. */
    this.animationSpeed = EXPLOSION_DURATION;
    /* Number of frames in the animation. */
    this.numberOfTiles = 16;
    /* Time that the CURRENT tile spends on screen. */
    this.frameCounter = this.animationSpeed / this.numberOfTiles;
    /* The index of the tile that is currently displayed. */
    this.currentTile = 0;
    /* If the Explosion has ended and should be destroyed. */
    this.ended = false;

    this.animate = function () {
        this.model.lookAt(
            new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z));
        this.frameCounter--;
        if (this.frameCounter <= 0) {
            if (this.light.intensity < 1) {
                this.light.intensity = 2;
            }
            else {
                this.light.intensity = 0.5;
            }
            this.frameCounter = this.animationSpeed / this.numberOfTiles;
            this.currentTile++;
            var currentColumn = this.currentTile % 4;
            var currentRow = Math.floor(this.currentTile / 4);
            this.model.material.map.offset.x = currentColumn / 4;
            this.model.material.map.offset.y = currentRow / 4;
        }
        if (this.currentTile >= this.numberOfTiles) {
            this.ended = true;
        }
    };

    this.end = function () {
        this.ended = true;
    };
};

function addBullet(x, y, xSpeed, ySpeed, id) {
    var laserObject = {
        "model": createNewBullet(x, y),
        "id": id,
        "velocity": {
            "x": xSpeed,
            "y": ySpeed
        }
    };

    bulletTree.push(laserObject);
    CURRENT_ENV.environmentGroup.add(laserObject.model);
};

function refreshPlayerData() {
    /*
     * Käydään gamestaten pelaajadataa lävitse ja vertaillaan sitä
     * visualisaation tallentamaan pelaajadataan.
     */
};

function refreshBullets() {
    if (bulletTree.length > 0) {
        for (var i = 0; i < bulletTree.length; i++) {
            bulletTree[i].model.translateX(bulletTree[i].velocity.x);
            bulletTree[i].model.translateY(bulletTree[i].velocity.y);

            if (bulletTree[i].model.position.x > GROUND_X) {
                CURRENT_ENV.environmentGroup.remove(bulletTree[i].model);
                bulletTree.splice(i, 1);
            }
        }
    }
};

function refreshMisc() {
    if (explosionTree.length > 0) {
        for (var i = 0; i < explosionTree.length; i++) {
            if (explosionTree[i].ended) {
                if(explosionTree[i].light){
                    explosionTree[i].light.intensity = 0;
                }
                createSmoke(explosionTree[i].player.position.x, explosionTree[i].player.position.y);
                CURRENT_ENV.environmentGroup.remove(explosionTree[i].model);
                CURRENT_ENV.environmentGroup.remove(explosionTree[i].player);
                explosionTree.splice(i, 1);
            }
            else {
                explosionTree[i].animate();
            }
        }
    }
};

function refreshViewState() {
    refreshMisc();
    refreshPlayerData();
    refreshBullets();
};



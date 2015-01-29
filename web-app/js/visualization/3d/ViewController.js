var scene;
var camera;
var ground;
var isHUDDrawn;
var assetsPath = document.getElementById("assetsPath").innerHTML;

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
    "model":"", // Modelidata.
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


function generateWorld(rounds, darkness, rain, indoor, tiles, items, players) {
    console.log("Generating world...");
    modelLoader = new THREE.JSONLoader;
    scene = new THREE.Scene();
    console.log("Lights, camera..");
    lightsCamera();
    generateSky();
    generateMap();
    loadPlayerData();
    /* FOR TEST DEMOS. */
    console.log("ACTION!!!");
}

function setStatusMessage(message){
    showMessage = true;
    hudStatusMessage = message;
    messageDelay = HUD_STATUS_MESSAGE_DELAY;
}

function statusMessageDelay(){
    if(messageDelay > 0){
        messageDelay --;
    }
    else{
        showMessage = false;
        hudStatusMessage = "";
    }
}

function renderHud(){
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

    if(isHUDDrawn){
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

        graphics.restore();
    }
}

function generateSky(){
    var path;
    
    if(serverData.gamestate.environment === ENVIRONMENT_FOREST){
        if(serverData.gamestate.darkness < DARKNESS_NIGHT_MIN){
            var skybox;
            path = assetsPath + "skybox/";
            var textures = [];

            for (var i = 0; i < 6; i++) {
                textures.push(new THREE.MeshBasicMaterial({
                    map: THREE.ImageUtils.loadTexture(path + "day" + i + ".png"),
                    side: THREE.BackSide
                }));
            };

            var skyMaterial = new THREE.MeshFaceMaterial(textures);

            skybox = new THREE.Mesh(new THREE.BoxGeometry(8000, 8000, 8000), skyMaterial);
            skybox.rotation.x += Math.PI / 2;
            scene.add(skybox);
        }
    }
    else if(serverData.gamestate.environment === ENVIRONMENT_CAVERN){
        path = assetsPath + "env/";
        var ceilingType;
        var ceiling;
        ceilingType = "ground" + serverData.gamestate.environment + ".png";

        var texture = THREE.ImageUtils.loadTexture(path + ceilingType);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(80, 80);

        var ceilingMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.BackSide});

        ceiling = new THREE.Mesh(new THREE.PlaneBufferGeometry(GROUND_X, GROUND_Y), ceilingMaterial);
        ceiling.position.x = 0;
        ceiling.position.y = 0;
        ceiling.position.z = WALL_HEIGHT / 2;
        scene.add(ceiling);
    }
}

function lightsCamera(){
    camera = new THREE.PerspectiveCamera(FOV, AOR, NEAR_DISTANCE, FAR_DISTANCE);

    camera.position.set(0, 0, 5);
    camera.lookAt(scene.position);
    camera.rotation.x += Math.PI / 2;
    camera.position.z = CAMERA_PLAYER_Z;

    camera.position.x = 16;
    camera.position.y = 10;
    camera.rotation.x = 1.57;
    camera.rotation.y = 2.7390000000000025;
    
    if(serverData.gamestate.darkness >= DARKNESS_DAY_MIN && 
            serverData.gamestate.darkness < DARKNESS_EVENING_MIN){
        lightValue = LIGHT_VALUE_DAY;
        lightColor = LIGHT_DAY;
    }
    else if(serverData.gamestate.darkness >= DARKNESS_EVENING_MIN && 
            serverData.gamestate.darkness < DARKNESS_NIGHT_MIN){
        lightValue = LIGHT_VALUE_EVENING;
        lightColor = LIGHT_EVENING;
    }
    else{
        lightValue = LIGHT_VALUE_NIGHT;
        lightColor = LIGHT_NIGHT;
    }

    // The light that lights the whole world.
    var light = new THREE.PointLight(lightColor, lightValue, LIGHT_RADIUS);
    light.position.set(GROUND_X, 0, 500);
    scene.add(light);
    
    var light = new THREE.PointLight(lightColor, lightValue, LIGHT_RADIUS);
    light.position.set(-GROUND_X, 0, 500);
    scene.add(light);
    
    // The light that lights the whole world.
    var light = new THREE.PointLight(lightColor, lightValue, LIGHT_RADIUS);
    light.position.set(0, GROUND_Y, 500);
    scene.add(light);

    var light = new THREE.PointLight(lightColor, lightValue, LIGHT_RADIUS);
    light.position.set(0, -GROUND_Y, 500);
    scene.add(light);
}

function createGround(path){
    var groundType;
    groundType = "ground" + serverData.gamestate.environment + ".png";
        
    var texture = THREE.ImageUtils.loadTexture(path + groundType);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(80, 80);

    var groundMaterial = new THREE.MeshLambertMaterial({map: texture});

    ground = new THREE.Mesh(new THREE.PlaneBufferGeometry(GROUND_X, GROUND_Y), groundMaterial);
    ground.position.x = 0;
    ground.position.y = 0;
    scene.add(ground);
};

function generateDecorationSprite(x, y, decorationParticles){
    var offsetX = 1 + (Math.random() * TILE_WIDTH);
    var offsetY = 1 + (Math.random() * TILE_HEIGHT);
    var decoration = new THREE.Vector3(x + offsetX, y + offsetY, 1);
    decorationParticles.vertices.push(decoration);
};

/*
 * Here we create the blocks and the walls for the world.
 */
function generateMapData(path){
    var wallWidth = GROUND_X;
    var x;
    var y;
    var offsetX;
    var offsetY;

    var wallTextureName;
    wallTextureName = "worldWall" + serverData.gamestate.environment + ".png";

    /* Create world walls. */
    var wallTexture = THREE.ImageUtils.loadTexture(path + wallTextureName);
    wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
    wallTexture.repeat.set(4, 1);

    var wallMaterial = new THREE.MeshLambertMaterial({
        map: wallTexture,
        transparent: true,
        alphaTest: 0.5,
        side: THREE.DoubleSide
    });
    
    var blockTexture = THREE.ImageUtils.loadTexture(path + "blockTexture" + serverData.gamestate.environment + ".png");
    
    var blockMaterial = new THREE.MeshLambertMaterial({
        map: blockTexture,
        transparent: true,
        alphaTest: 0.5,
        side: THREE.DoubleSide
    });

    createWorldWall(wallWidth, 128, GROUND_X / 2 - wallWidth / 2, GROUND_Y / 2, false, wallMaterial);
    createWorldWall(wallWidth, 128, GROUND_X / 2 - wallWidth / 2, -GROUND_Y / 2, false, wallMaterial);
    createWorldWall(wallWidth, 128, GROUND_X / 2, GROUND_Y / 2 - wallWidth / 2, true, wallMaterial);
    createWorldWall(wallWidth, 128, -GROUND_X / 2, GROUND_Y / 2 - wallWidth / 2, true, wallMaterial);
    
    for (var i = 0; i < TEST_MAP.tiles.length; i++) {
        offsetX = 1 + (Math.random() * TILE_WIDTH);
        offsetY = 1 + (Math.random() * TILE_HEIGHT);
        x = (TEST_MAP.tiles[i].X * TILE_WIDTH) - (GROUND_X / 2);
        y = (TEST_MAP.tiles[i].Y * TILE_HEIGHT) - (GROUND_Y / 2);
        createTileBlock(x + offsetX, y + offsetY, blockMaterial);
    }
    
    /* GENERATE DECORATION 2D PARTICLES. */
    var decorationParticles = new THREE.Geometry();
    var decorationTexture = THREE.ImageUtils.loadTexture(path + "grassSprite.png");
    var decorationMaterial = new THREE.PointCloudMaterial({
        map: decorationTexture,
        transparent: true,
        alphaTest: 0.5,
        color: "rgb(255,255,255)", 
        size:4
    });
    
    
    for(var x = -GROUND_X / TILE_WIDTH; x < GROUND_X / TILE_WIDTH; x ++){
        for(var y = -GROUND_Y / TILE_HEIGHT; y < TILE_HEIGHT / TILE_HEIGHT; y ++){
            var random = (Math.random() * 10);
            if(random > 4){
                generateDecorationSprite(x * TILE_WIDTH, y * TILE_HEIGHT, decorationParticles);  
            }
        }
    }
    
    var decorationSystem = new THREE.ParticleSystem(decorationParticles, decorationMaterial);
    scene.add(decorationSystem);
};

/*
 * Use this to create blocks to the world.
 * @returns {undefined}
 */
function createTileBlock(x, y, blockMaterial){

    var block;
    var placeX;
    var placeY;
    var placeZ;

    block = new THREE.Mesh(new THREE.PlaneBufferGeometry(TILE_WIDTH, TILE_HEIGHT), blockMaterial);
    placeX = x + TILE_WIDTH / 2;
    placeY = y + TILE_HEIGHT / 2;
    placeZ = TILE_HEIGHT / 2;

    block.position.x = placeX;
    block.position.y = placeY;
    block.position.z = placeZ;
    block.rotation.x += Math.PI / 2;
    scene.add(block);
    
    block = new THREE.Mesh(new THREE.PlaneBufferGeometry(TILE_WIDTH, TILE_HEIGHT), blockMaterial);
    block.position.x = placeX;
    block.position.y = placeY;
    block.position.z = placeZ;
    block.rotation.x += Math.PI / 2;
    block.rotation.y += Math.PI / 2;
    scene.add(block);
}

function createWorldWall(width, height, x, y, rotateY, wallMaterial){
    var worldWall;

    worldWall = new THREE.Mesh(new THREE.PlaneBufferGeometry(width, height), wallMaterial);
    worldWall.position.x = x;
    worldWall.position.y = y;
    worldWall.position.z = height / 2;
    worldWall.rotation.x += Math.PI / 2;

    if(rotateY){
        worldWall.rotation.y += Math.PI / 2;
    }
    scene.add(worldWall);
}
/*
function createTree(path){
    var treeTexture = THREE.ImageUtils.loadTexture(path + "tree0.png");

    var treeMaterial = new THREE.MeshBasicMaterial({
        map: treeTexture,
        transparent: true,
        alphaTest: 0.5
    });
    var tree;
    var placeX;
    var placeY;
    var placeZ;

    tree = new THREE.Mesh(new THREE.BoxGeometry(MIN_TREE_WIDTH, MIN_TREE_HEIGHT, 0), treeMaterial);
    placeX = Math.floor(Math.random() * 400 - 400) + 64;
    placeY = Math.floor(Math.random() * 400 - 400) + 64;
    placeZ = MIN_TREE_HEIGHT / 2;

    tree.position.x = placeX;
    tree.position.y = placeY;
    tree.position.z = placeZ;
    tree.rotation.x += Math.PI / 2;
    scene.add(tree);

    tree = new THREE.Mesh(new THREE.BoxGeometry(MIN_TREE_WIDTH, MIN_TREE_HEIGHT, 0), treeMaterial);
    tree.position.x = placeX;
    tree.position.y = placeY;
    tree.position.z = placeZ;
    tree.rotation.x += Math.PI / 2;
    tree.rotation.y += Math.PI / 2;
    scene.add(tree);
}
*/
function generateMap(){
    console.log("Generating map..");
    var path = assetsPath + "env/";
    generateMapData(path);
    createGround(path);
}

function loadPlayerData() {
    console.log("Loading player graphics...");

    var path = assetsPath + "player/";
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

function addBullet(){
    
}

function refreshPlayerData(){
    /*
     * Käydään gamestaten pelaajadataa lävitse ja vertaillaan sitä
     * visualisaation tallentamaan pelaajadataan.
     */
}

function refreshBullets(bullet){
    
}

function refreshViewState(){
    refreshPlayerData();
    refreshBullets();
}


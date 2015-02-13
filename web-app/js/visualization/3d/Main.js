var renderer;
var canvas;
var hud;
var hudImage;
var crosshair;
var ASSETS_PATH = document.getElementById("assetsPath").innerHTML;
var modelLoader;

function initialization() {
    KeyboardJS.enable();
    console.log("Initializing...");
    initHud();
    canvas = document.getElementById("gameCanvas");
    renderer = new THREE.WebGLRenderer({antialiasing: false, canvas:canvas});
    renderer.setSize(WIDTH, HEIGHT);
    modelLoader = new THREE.JSONLoader;
    if(SHADOWS){
        renderer.shadowMapEnabled = true;
        renderer.shadowMapType = THREE.PCFSoftShadowMap;
    }
    // Initial synchronization.
    synchronizeState();
    // We initialize the world and associated controller.
    if(serverData.gamestate.environment === ENVIRONMENT_FOREST){
        CURRENT_ENV = new ForestController();
    }
    else if(serverData.gamestate.environment === ENVIRONMENT_CAVERN){
        CURRENT_ENV = new CavernController();
    }
    generateMisc();
    generateWorld();
    // We enter gameloop.
    console.log("Entering gameloop...");
    hud = createHUDCanvas();
    isHUDDrawn = false;
    viewLoop();
}

function initHud(){
    hudImage = new Image();
    hudImage.src = ASSETS_PATH + "hud/hudPiece.png";
    crosshair = new Image();
    crosshair.src = ASSETS_PATH + "hud/crosshair.png";
}

function createHUDCanvas(){
    var canvasContainer = document.getElementById('container');
    var overlayCanvas = document.createElement('canvas');
    overlayCanvas.style.position = 'absolute';
    overlayCanvas.style.left = '0px';
    overlayCanvas.style.top = '0px';
    overlayCanvas.width = WIDTH;
    overlayCanvas.height = HEIGHT;
    canvasContainer.appendChild(overlayCanvas);
    return overlayCanvas;
}

function viewLoop(){
    requestAnimFrame(viewLoop);
    synchronizeState();
    checkInput();
    refreshViewState();
    renderScreen();
    renderHud();
}



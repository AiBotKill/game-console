var renderer;
var canvas;
var hud;
var hudImage;
var crosshair;
var assetsPath = document.getElementById("assetsPath").innerHTML;

function initialization() {
    KeyboardJS.enable();
    console.log("Initializing...");
    initHud();
    canvas = document.getElementById("gameCanvas");
    renderer = new THREE.WebGLRenderer({antialiasing: false, canvas:canvas});
    renderer.setSize(WIDTH, HEIGHT);
    // Initial synchronization.
    synchronizeState();
    // We initialize the world.
    generateWorld();
    // We enter gameloop.
    console.log("Entering gameloop...");
    hud = createHUDCanvas();
    isHUDDrawn = false;
    viewLoop();
}

function initHud(){
    hudImage = new Image();
    hudImage.src = assetsPath + "hud/hudPiece.png";
    crosshair = new Image();
    crosshair.src = assetsPath + "hud/crosshair.png";
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



var pressedKeys;
var cooldown = 0;

function checkInput() {
    pressedKeys = KeyboardJS.activeKeys();
    inputCooldown();
    for (var i = 0; i < pressedKeys.length; i++) {
        processInput(pressedKeys[i]);
    }
}

function inputCooldown() {
    if (cooldown > 0) {
        cooldown--;
    }
}

function actionCameraModeFPS(){
    cameraSettings.cameraCounter = CAMERA_TIME;
    playerTree[cameraSettings.playerIndex].model.remove(camera);
    cameraSettings.cameraMode = new CameraModeFPS();
}

function actionCameraModeExternal(){
    cameraSettings.cameraCounter = CAMERA_TIME;
    playerTree[cameraSettings.playerIndex].model.remove(camera);
    cameraSettings.cameraMode = new CameraModeExternal();
}

function actionCameraModeArea(){
    cameraSettings.cameraCounter = CAMERA_TIME;
    cameraSettings.cameraMode = new CameraModeArea();
}

function actionPreviousPlayer(){
    cameraSettings.cameraCounter = CAMERA_TIME;
    var index = cameraSettings.playerIndex;
    var players = serverData.players.length;
    playerTree[index].model.remove(camera);

    if(index > 0){
        cameraSettings.playerIndex--;
    }
    else {
        cameraSettings.playerIndex = players - 1;
    }
    setStatusMessage("Previous bot");
    cameraSettings.cameraMode.resetCamera();
}

function actionNextPlayer(){
    cameraSettings.cameraCounter = CAMERA_TIME;
    var index = cameraSettings.playerIndex;
    var players = serverData.players.length;
    playerTree[index].model.remove(camera);
    
    if(index < players - 1){
        cameraSettings.playerIndex ++;
    }
    else{
        cameraSettings.playerIndex = 0;
    }
    setStatusMessage("Next bot");
    cameraSettings.cameraMode.resetCamera();
}

function processInput(key) {
    /* FINAL CONTROLS. */
    if(cooldown === 0){
        if(key === '1'){
            cooldown = KEY_COOLDOWN;
            actionCameraModeFPS();
        }
        if(key === '2'){
            cooldown = KEY_COOLDOWN;
            actionCameraModeExternal();
        }
        /*
        if(key === '3'){
            cooldown = KEY_COOLDOWN;
            actionCameraModeArea();
        }
        */
        if(isHUDDrawn){
            if(key === 'left'){
                cooldown = KEY_COOLDOWN;
                actionPreviousPlayer();
            }
            if(key === 'right'){
                cooldown = KEY_COOLDOWN;
                actionNextPlayer();
            }
        }
    }
    
    /*
     if (cooldown === 0) {
     if (key === '1') {
     cooldown = 20;
     camera.position.x = 17.79;
     camera.position.y = 0.19;
     camera.position.z = 4.570000000000018;
     camera.rotation.x = 1.57;
     camera.rotation.y = 1.53;
     setStatusMessage("FPS CAMERA");
     isHUDDrawn = true;
     }
     if (key === '2') {
     cooldown = 20;
     camera.position.x = 16;
     camera.position.y = 10;
     camera.rotation.x = 1.57;
     camera.rotation.y = 2.7390000000000025;
     setStatusMessage("EXTERNAL CAMERA");
     isHUDDrawn = false;
     }
    */
    /*
    if (key === 't') {
        if (playerTree.length != 0) {
            playerTree[cameraSettings.playerIndex].model.rotation.y += 0.04;
        }
    }
    if (key === 'j') {
        if (playerTree.length != 0) {
            playerTree[cameraSettings.playerIndex].model.position.x += 1;
        }
    }
    if (key === 'k') {
        if (playerTree.length != 0) {
            playerTree[cameraSettings.playerIndex].model.position.x += -1;
        }
    }
     /*
     if (key === 'space') {
     if (playerTree.length != 0) {
     addBullet(
     playerTree[0].model.position.x,
     playerTree[0].model.position.y,
     serverData.gamestate.bullets[0].velocity.x,
     serverData.gamestate.bullets[0].velocity.y);
     }
     }
     if (key === 'e') {
     if (playerTree.length != 0) {
     cooldown = 5;
     addExplosion(playerTree[0].model.position.x, playerTree[0].model.position.y, playerTree[0].model);
     playerTree.splice(0, 1);
     }
     }*/

    if(!isHUDDrawn){
        if (key === "w") {
            camera.translateZ(-1);
        }
        if (key === 's') {
            camera.translateZ(1);
        }
        if (key === 'a') {
            camera.translateX(-1);
        }
        if (key === 'd') {
            camera.translateX(1);
        }
        if (key === 'y') {
            camera.translateY(0.5);
        }
        if (key === 'u') {
            camera.translateY(-0.5);
        }
        if (key === KEY_LEFT) {
            camera.rotation.x += 0.03;
        }
        if (key === KEY_RIGHT) {
            camera.rotation.x -= 0.03;
        }
        console.log("X: ", camera.position.x);
        console.log("Y: ", camera.position.y);
        console.log("Z: ", camera.position.z);
        console.log("X: ", camera.rotation.x);
        console.log("YROT: ", camera.rotation.y);
    }
     /*
     if (key === 'n') {
     testPlayer.rotation.y += 0.01;
     console.log(testPlayer.rotation.y);
     }
     if (key === 'm') {
     testPlayer.rotation.y -= 0.01;
     console.log(testPlayer.rotation.y);
     }
     /*
     if (key === 'h') {
     if (isHUDDrawn) {
     cooldown = 20;
     isHUDDrawn = false;
     }
     else {
     cooldown = 20;
     isHUDDrawn = true;
     }
     }
     */
}



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

function processInput(key) {
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
        if(key === 't'){
            playerTree[0].model.rotation.y += 0.04;
        }
        if(key === 'j'){
            playerTree[0].model.translateX(1);
        }
        if (key === 'k') {
            playerTree[0].model.translateX(-1);
        }
        if(key === 'space'){
            addBullet(
            playerTree[0].model.position.x, 
            playerTree[0].model.position.y, 
            serverData.gamestate.bullets[0].velocity.x, 
            serverData.gamestate.bullets[0].velocity.y);
        }
        if(key === 'e'){
            scene.remove(playerTree[0].model);
            playerTree.splice(0, 1);
            addExplosion(playerTree[0].model.position.x, playerTree[0].model.position.y);
        }
        /*
        if(key === 'l'){
            CURRENT_ENV.environmentGroup.remove(testPlayer);
        }
         */
        if (key === KEY_LEFT) {
            camera.rotation.y += 0.03;
        }
        if (key === KEY_RIGHT) {
            camera.rotation.y -= 0.03;
        }
        if (key === "w") {
            camera.translateZ(-1.5);
        }
        if (key === 's') {
            camera.translateZ(1.5);
        }
        if (key === 'a') {
            camera.translateX(-1.5);
        }
        if (key === 'd') {
            camera.translateX(1.5);
        }

        if (key === 'y') {
            camera.translateY(0.1);
        }
        if (key === 'u') {
            camera.translateY(-0.1);

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
        /*
         console.log(camera.position.x);
         console.log(camera.position.y);
         
         console.log("ROT X " + camera.rotation.x);
         console.log("ROT Y " + camera.rotation.y);
         */
         
    }
}



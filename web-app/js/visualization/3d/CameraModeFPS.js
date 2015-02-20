function CameraModeFPS() {

    this.resetCamera = function () {
        if(!playerTree[cameraSettings.playerIndex].destroyed && playerTree[cameraSettings.playerIndex].model){
            orbitingCamera = false;
            playerTree[cameraSettings.playerIndex].model.add(camera);
            camera.rotation.x = Math.PI * -0.5;
            camera.rotation.y = Math.PI * -0.5;
            camera.rotation.z = Math.PI * -0.5;
            camera.position.set(1, 6, 0);
            isHUDDrawn = true;
        }
        else{
            this.refreshCameraMode();
        }
    };

    this.refreshCameraMode = function () {
        var index = cameraSettings.playerIndex;
        var players = playerTree.length;
        if(playerTree[cameraSettings.playerIndex].model){
            playerTree[cameraSettings.playerIndex].model.remove(camera);
        }
        if (index < players - 1) {
            cameraSettings.playerIndex++;
        }
        else {
            cameraSettings.playerIndex = 0;
        }
        setStatusMessage("NEXT BOT");
        if(!playerTree[cameraSettings.playerIndex].destroyed && playerTree[cameraSettings.playerIndex].model){
            orbitingCamera = false;
            playerTree[cameraSettings.playerIndex].model.add(camera);
            camera.rotation.x = Math.PI * -0.5;
            camera.rotation.y = Math.PI * -0.5;
            camera.rotation.z = Math.PI * -0.5;
            camera.position.set(1, 6, 0);
            isHUDDrawn = true;
        }
    };
    setStatusMessage("FPS CAMERA");
    this.resetCamera();
}



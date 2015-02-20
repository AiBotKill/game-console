function CameraModeExternal(){

    this.resetCamera = function () {
        if(!playerTree[cameraSettings.playerIndex].destroyed && playerTree[cameraSettings.playerIndex].model){
            playerTree[cameraSettings.playerIndex].model.add(camera);
            orbitingCamera = true;
            isHUDDrawn = false;
            camera.position.set(6, 15, 6);
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
        this.resetCamera();
    };
    setStatusMessage("EXTERNAL CAMERA");
    this.resetCamera();
}


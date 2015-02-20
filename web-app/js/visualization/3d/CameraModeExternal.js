function CameraModeExternal(){

    this.resetCamera = function () {
        if(!playerTree[cameraSettings.playerIndex].destroyed){
            playerTree[cameraSettings.playerIndex].model.remove(camera);
            //orbitingCamera = true;
            isHUDDrawn = false;
            //camera.translateY(5);
        }
        else{
            this.refreshCameraMode();
        }
    };

    this.refreshCameraMode = function () {
        /*
        var index = cameraSettings.playerIndex;
        var players = playerTree.length;
        playerTree[cameraSettings.playerIndex].model.remove(camera);
        if (index < players - 1) {
            cameraSettings.playerIndex++;
        }
        else {
            cameraSettings.playerIndex = 0;
        }
        setStatusMessage("NEXT BOT");
        this.resetCamera();
        */
    };
    setStatusMessage("EXTERNAL CAMERA");
    this.resetCamera();
}


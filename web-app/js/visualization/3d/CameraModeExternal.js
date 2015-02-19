function CameraModeExternal(){

    this.resetCamera = function () {
        playerTree[cameraSettings.playerIndex].model.add(camera);
        orbitingCamera = true;
        isHUDDrawn = false;
        setStatusMessage("EXTERNAL CAMERA");
    };

    this.refreshCameraMode = function () {
        var index = cameraSettings.playerIndex;
        var players = serverData.gamestate.players.length;
        playerTree[cameraSettings.playerIndex].model.remove(camera);
        if (index < players - 1) {
            cameraSettings.playerIndex++;
        }
        else {
            cameraSettings.playerIndex = 0;
        }
        setStatusMessage("NEXT BOT");
        this.resetCamera();
    };
    this.resetCamera();
}


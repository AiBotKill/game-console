function CameraModeFPS() {

    this.resetCamera = function () {
        orbitingCamera = false;
        playerTree[cameraSettings.playerIndex].model.add(camera);
        camera.rotation.x = Math.PI * -0.5;
        camera.rotation.y = Math.PI * -0.5;
        camera.rotation.z = Math.PI * -0.5;
        camera.position.set(1, 6, 0);
        isHUDDrawn = true;
    };

    this.refreshCameraMode = function () {
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
    };
    setStatusMessage("FPS CAMERA");
    this.resetCamera();
}



function CameraModeExternal() {

    this.resetCamera = function () {
        //orbitingCamera = true;
        camera.position.x = 17.79;
        camera.position.y = 0.19;
        camera.rotation.x = 1.57;
        camera.rotation.y = 1.53;
        camera.position.z = 10;
        isHUDDrawn = false;
        //camera.translateY(5);
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


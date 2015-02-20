function CameraModeExternal() {

    this.resetCamera = function () {
        //orbitingCamera = true;
        camera.position.set(0, 0, 0);
        camera.rotation.set(0, 0, 0);

        camera.lookAt(scene.position);
        camera.rotation.x += Math.PI / 2;
        camera.position.z = CAMERA_PLAYER_Z;

        camera.position.x = 16;
        camera.position.y = 10;
        camera.rotation.x = 1.57;
        camera.rotation.y = 2.7390000000000025;
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


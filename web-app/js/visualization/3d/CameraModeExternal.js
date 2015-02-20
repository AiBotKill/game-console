function CameraModeExternal() {

    this.resetCamera = function () {
        //orbitingCamera = true;
        camera.position.set(0, 0, 0);
        camera.rotation.x = 0;
        camera.rotation.y = 0;
        camera.rotation.z = 0;

        camera.lookAt(scene.position);
        camera.rotation.x += Math.PI / 2;
        camera.position.z = 122.76917439842951;

        camera.position.x = 361.71279298511456;
        camera.position.y = 481.7027766598378;
        camera.rotation.x = 1.6900000000000002;
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


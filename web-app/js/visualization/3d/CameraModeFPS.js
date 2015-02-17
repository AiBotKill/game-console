function CameraModeFPS(index){
    isHUDDrawn = true;
    setStatusMessage("FPS CAMERA");
    playerTree[index].model.add(camera);
    camera.rotation.x = Math.PI * -0.5;
    camera.rotation.y = Math.PI * -0.5;
    camera.rotation.z = Math.PI * -0.5;
    camera.position.set(1, 6, 0);
    
    this.refreshCameraMode = function(cameraSettings) {
        var index = cameraSettings.playerIndex;
        var players = serverData.gamestate.players.length;
        playerTree[cameraSettings.playerIndex].model.remove(camera);

        if (index < players) {
            cameraSettings.playerIndex++;
        }
        else {
            cameraSettings.playerIndex = 0;
        }
        setStatusMessage("NEXT BOT");
        playerTree[cameraSettings.playerIndex].model.add(camera);
        camera.rotation.x = Math.PI * -0.5;
        camera.rotation.y = Math.PI * -0.5;
        camera.rotation.z = Math.PI * -0.5;
        camera.position.set(1, 6, 0);
    };
    
    
}



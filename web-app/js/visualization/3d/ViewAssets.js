var environmentSheet;

function loadTextures(){
    environmentSheet = THREE.ImageUtils.loadTexture(
            assetsPath + "envTiles" + serverData.gamestate.environment + ".png");
}




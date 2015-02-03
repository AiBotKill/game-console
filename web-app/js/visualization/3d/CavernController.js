var CavernController = {

    generateSky: function () {
        path = ASSETS_PATH + "env/";
        var ceilingType;
        var ceiling;
        ceilingType = "ground" + serverData.gamestate.environment + ".png";

        var texture = THREE.ImageUtils.loadTexture(path + ceilingType);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(80, 80);

        var ceilingMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.BackSide});

        ceiling = new THREE.Mesh(new THREE.PlaneBufferGeometry(GROUND_X, GROUND_Y), ceilingMaterial);
        ceiling.position.x = 0;
        ceiling.position.y = 0;
        ceiling.position.z = WALL_HEIGHT / 2;
        scene.add(ceiling);
    }
};



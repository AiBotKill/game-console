var ForestController = {
    
    generateSky: function () {
        var path;
        if (serverData.gamestate.darkness < DARKNESS_NIGHT_MIN) {
            var skybox;
            path = ASSETS_PATH + "skybox/";
            var textures = [];

            for (var i = 0; i < 6; i++) {
                textures.push(new THREE.MeshBasicMaterial({
                    map: THREE.ImageUtils.loadTexture(path + "day" + i + ".png"),
                    side: THREE.BackSide
                }));
            }
            ;

            var skyMaterial = new THREE.MeshFaceMaterial(textures);

            skybox = new THREE.Mesh(new THREE.BoxGeometry(8000, 8000, 8000), skyMaterial);
            skybox.rotation.x += Math.PI / 2;
            scene.add(skybox);
        }
    },

    lightsCamera: function () {
        camera = new THREE.PerspectiveCamera(FOV, AOR, NEAR_DISTANCE, FAR_DISTANCE);

        camera.position.set(0, 0, 5);
        camera.lookAt(scene.position);
        camera.rotation.x += Math.PI / 2;
        camera.position.z = CAMERA_PLAYER_Z;

        camera.position.x = 16;
        camera.position.y = 10;
        camera.rotation.x = 1.57;
        camera.rotation.y = 2.7390000000000025;

        if (serverData.gamestate.darkness >= DARKNESS_DAY_MIN &&
                serverData.gamestate.darkness < DARKNESS_EVENING_MIN) {
            lightValue = LIGHT_VALUE_DAY;
            lightColor = LIGHT_DAY;
        }
        else if (serverData.gamestate.darkness >= DARKNESS_EVENING_MIN &&
                serverData.gamestate.darkness < DARKNESS_NIGHT_MIN) {
            lightValue = LIGHT_VALUE_EVENING;
            lightColor = LIGHT_EVENING;
        }
        else {
            lightValue = LIGHT_VALUE_NIGHT;
            lightColor = LIGHT_NIGHT;
            scene.fog = new THREE.Fog("rgb(0, 100, 0)", 10, 500);
        }

        // The light that lights the whole world.
        var light = new THREE.PointLight(lightColor, lightValue, LIGHT_RADIUS);
        light.position.set(GROUND_X, 0, 500);
        scene.add(light);

        var light = new THREE.PointLight(lightColor, lightValue, LIGHT_RADIUS);
        light.position.set(-GROUND_X, 0, 500);
        scene.add(light);

        // The light that lights the whole world.
        var light = new THREE.PointLight(lightColor, lightValue, LIGHT_RADIUS);
        light.position.set(0, GROUND_Y, 500);
        scene.add(light);

        var light = new THREE.PointLight(lightColor, lightValue, LIGHT_RADIUS);
        light.position.set(0, -GROUND_Y, 500);
        scene.add(light);
    },
    
    createGround: function (path) {
        var groundType;
        groundType = "ground" + serverData.gamestate.environment + ".png";

        var texture = THREE.ImageUtils.loadTexture(path + groundType);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(80, 80);
        texture.minFilter = TEXTURE_MIN_FILTER;
        texture.magFilter = TEXTURE_MAG_FILTER;

        var groundMaterial = new THREE.MeshLambertMaterial({map: texture});

        ground = new THREE.Mesh(new THREE.PlaneBufferGeometry(GROUND_X, GROUND_Y), groundMaterial);
        ground.position.x = 0;
        ground.position.y = 0;
        scene.add(ground);
    },
     
    generateDecorationSprite: function (x, y, decorationParticles) {
        var offsetX = 1 + (Math.random() * TILE_WIDTH);
        var offsetY = 1 + (Math.random() * TILE_HEIGHT);
        var decoration = new THREE.Vector3(x + offsetX, y + offsetY, 1);
        decorationParticles.vertices.push(decoration);
    },
    
    generateMap: function () {
        console.log("Generating map..");
        var path = ASSETS_PATH + "env/";
        this.generateMapData(path);
        this.createGround(path);
    },

    /*
     * Here we create the blocks and the walls for the world.
     */
    generateMapData: function (path) {
        var wallWidth = GROUND_X;
        var x;
        var y;
        var offsetX;
        var offsetY;
        var blockTexture;

        var wallTextureName;
        wallTextureName = "worldWall" + serverData.gamestate.environment + ".png";

        /* Create world walls. */
        var wallTexture = THREE.ImageUtils.loadTexture(path + wallTextureName);
        wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
        wallTexture.repeat.set(4, 1);
        wallTexture.minFilter = TEXTURE_MIN_FILTER;
        wallTexture.magFilter = TEXTURE_MAG_FILTER;

        var wallMaterial = new THREE.MeshLambertMaterial({
            map: wallTexture,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide
        });

        blockTexture = THREE.ImageUtils.loadTexture(path + "envTiles" + serverData.gamestate.environment + ".png");
        blockTexture.minFilter = TEXTURE_MIN_FILTER;
        blockTexture.magFilter = TEXTURE_MAG_FILTER;

        var blockMaterial = new THREE.MeshLambertMaterial({
            map: blockTexture,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide
        });

        this.createWorldWall(wallWidth, 128, GROUND_X / 2 - wallWidth / 2, GROUND_Y / 2, false, wallMaterial);
        this.createWorldWall(wallWidth, 128, GROUND_X / 2 - wallWidth / 2, -GROUND_Y / 2, false, wallMaterial);
        this.createWorldWall(wallWidth, 128, GROUND_X / 2, GROUND_Y / 2 - wallWidth / 2, true, wallMaterial);
        this.createWorldWall(wallWidth, 128, -GROUND_X / 2, GROUND_Y / 2 - wallWidth / 2, true, wallMaterial);

        for (var i = 0; i < TEST_MAP.tiles.length; i++) {
            offsetX = 1 + (Math.random() * TILE_WIDTH);
            offsetY = 1 + (Math.random() * TILE_HEIGHT);
            x = (TEST_MAP.tiles[i].X * TILE_WIDTH) - (GROUND_X / 2);
            y = (TEST_MAP.tiles[i].Y * TILE_HEIGHT) - (GROUND_Y / 2);
            this.createTileBlock(x + offsetX, y + offsetY, blockMaterial);
        }

        /* GENERATE DECORATION 2D PARTICLES. */
        var decorationParticles = new THREE.Geometry();
        var decorationTexture = THREE.ImageUtils.loadTexture(path + "envTiles" + serverData.gamestate.environment + ".png");
        decorationTexture.minFilter = TEXTURE_MIN_FILTER;
        decorationTexture.magFilter = TEXTURE_MAG_FILTER;
        
        var decorationMaterial = new THREE.PointCloudMaterial({
            map: decorationTexture,
            transparent: true,
            alphaTest: 0.5,
            color: lightColor,
            size: 4
        });

        for (var x = -GROUND_X / 2; x < GROUND_X / 2; x += TILE_WIDTH) {
            for (var y = -GROUND_Y / 2; y < GROUND_Y; y += TILE_HEIGHT) {

                var random = (Math.random() * 10);
                if (random > 4) {
                    this.generateDecorationSprite(x, y, decorationParticles);
                }
            }
        }

        var decorationSystem = new THREE.ParticleSystem(decorationParticles, decorationMaterial);
        scene.add(decorationSystem);
    },

    /*
     * Use this to create blocks to the world.
     * @returns {undefined}
     */
    createTileBlock: function (x, y, blockMaterial) {

        var block;
        var placeX;
        var placeY;
        var placeZ;

        block = new THREE.Mesh(new THREE.PlaneBufferGeometry(TILE_WIDTH, TILE_HEIGHT), blockMaterial);
        placeX = x + TILE_WIDTH / 2;
        placeY = y + TILE_HEIGHT / 2;
        placeZ = TILE_HEIGHT / 2;

        block.position.x = placeX;
        block.position.y = placeY;
        block.position.z = placeZ;
        block.rotation.x += Math.PI / 2;
        scene.add(block);

        block = new THREE.Mesh(new THREE.PlaneBufferGeometry(TILE_WIDTH, TILE_HEIGHT), blockMaterial);
        block.position.x = placeX;
        block.position.y = placeY;
        block.position.z = placeZ;
        block.rotation.x += Math.PI / 2;
        block.rotation.y += Math.PI / 2;
        scene.add(block);
    },
    
    createWorldWall: function (width, height, x, y, rotateY, wallMaterial) {
        var worldWall;

        worldWall = new THREE.Mesh(new THREE.PlaneBufferGeometry(width, height), wallMaterial);
        worldWall.position.x = x;
        worldWall.position.y = y;
        worldWall.position.z = height / 2;
        worldWall.rotation.x += Math.PI / 2;

        if (rotateY) {
            worldWall.rotation.y += Math.PI / 2;
        }
        scene.add(worldWall);
    }
};


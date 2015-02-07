var ForestController = {
    environmentGroup: new THREE.Object3D(),
    
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
            this.environmentGroup.add(skybox);
        }
        else if(serverData.gamestate.darkness >= DARKNESS_EVENING_MIN &&
                serverData.gamestate.darkness < DARKNESS_NIGHT_MIN){
            var skybox;
            path = ASSETS_PATH + "skybox/";
            var textures = [];

            for (var i = 0; i < 6; i++) {
                textures.push(new THREE.MeshBasicMaterial({
                    map: THREE.ImageUtils.loadTexture(path + "evening" + i + ".jpg"),
                    side: THREE.BackSide
                }));
            }
            ;

            var skyMaterial = new THREE.MeshFaceMaterial(textures);

            skybox = new THREE.Mesh(new THREE.BoxGeometry(8000, 8000, 8000), skyMaterial);
            skybox.rotation.x += Math.PI / 2;
            this.environmentGroup.add(skybox);
        }
    },

    lightsCamera: function () {
        var lightPosition;
        var shadows = true;
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
            lightPosition = 640;
        }
        else if (serverData.gamestate.darkness >= DARKNESS_EVENING_MIN &&
                serverData.gamestate.darkness < DARKNESS_NIGHT_MIN) {
            lightValue = LIGHT_VALUE_EVENING;
            lightColor = LIGHT_EVENING;
            lightPosition = 480;
        }
        else {
            lightValue = LIGHT_VALUE_NIGHT;
            lightColor = LIGHT_NIGHT;
            scene.fog = new THREE.Fog("rgb(0, 100, 0)", 10, 500);
            shadows = false;
        }
        var light = new THREE.HemisphereLight(lightColor, 1);
        light.position.set(0, 0, 500);
        this.environmentGroup.add(light);
        
        if(shadows && SHADOWS){
            var light = new THREE.DirectionalLight("rgb(0, 0, 0)", 0);
            light.onlyShadow = true;
            light.position.set(0, 480, 1000);
            light.castShadow = true;
            light.shadowDarkness = 0.8;
            light.shadowCameraVisible = false;
            light.shadowMapWidth = 2048;
            light.shadowMapHeight = 2048;

            light.shadowCameraLeft = -GROUND_X;
            light.shadowCameraRight = GROUND_X;
            light.shadowCameraTop = GROUND_Y;
            light.shadowCameraBottom = -GROUND_Y;

            light.shadowCameraNear = 500;
            light.shadowCameraFar = 5000;
            light.shadowCameraFov = 60;
            this.environmentGroup.add(light);
        }
    },
    
    createGround: function (path) {
        var groundType;
        groundType = "ground.png";

        var texture = THREE.ImageUtils.loadTexture(path + groundType);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(GROUND_TILES, GROUND_TILES);

        var groundMaterial = new THREE.MeshLambertMaterial({map: texture});

        ground = new THREE.Mesh(new THREE.PlaneBufferGeometry(GROUND_X, GROUND_Y), groundMaterial);
        ground.position.x = 0;
        ground.position.y = 0;
        ground.receiveShadow = true;
        ground.castShadow = false;
        this.environmentGroup.add(ground);
    },
     
    generateDecorationSprite: function (x, y, decorationParticles) {
        var offsetX = 1 + (Math.random() * TILE_WIDTH);
        var offsetY = 1 + (Math.random() * TILE_HEIGHT);
        var decoration = new THREE.Vector3(x + offsetX, y + offsetY, 1);
        decorationParticles.vertices.push(decoration);
    },
    
    generateMap: function () {
        console.log("Generating map..");
        var path = ASSETS_PATH + "env/forest/";
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
        var blockMaterials = [];
        var blockGeometry;

        var wallTextureName;
        wallTextureName = "worldWall.png";

        /* Create world walls. */
        var wallTexture = THREE.ImageUtils.loadTexture(path + wallTextureName);
        wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
        wallTexture.repeat.set(4, 1);

        var wallMaterial = new THREE.MeshLambertMaterial({
            map: wallTexture,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide
        });
        
        var wallGeometry = new THREE.PlaneBufferGeometry(wallWidth, 128);
        
        blockGeometry = new THREE.PlaneBufferGeometry(TILE_WIDTH, TILE_HEIGHT);
        
        for(var i = 0; i < 4; i ++){
            blockMaterials.push(new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture(path + "block" + i + ".png"),
                transparent: true,
                alphaTest: 0.5,
                side: THREE.DoubleSide
            }));
        }

        this.createWorldWall(GROUND_X / 2 - wallWidth / 2, GROUND_Y / 2, false, wallGeometry, wallMaterial);
        this.createWorldWall(GROUND_X / 2 - wallWidth / 2, -GROUND_Y / 2, false, wallGeometry, wallMaterial);
        this.createWorldWall(GROUND_X / 2, GROUND_Y / 2 - wallWidth / 2, true, wallGeometry, wallMaterial);
        this.createWorldWall(-GROUND_X / 2, GROUND_Y / 2 - wallWidth / 2, true, wallGeometry, wallMaterial);

        for (var i = 0; i < TEST_MAP.tiles.length; i++) {
            offsetX = 1 + (Math.random() * TILE_WIDTH);
            offsetY = 1 + (Math.random() * TILE_HEIGHT);
            x = (TEST_MAP.tiles[i].X * TILE_WIDTH) - (GROUND_X / 2);
            y = (TEST_MAP.tiles[i].Y * TILE_HEIGHT) - (GROUND_Y / 2);
            this.createTileBlock(x + offsetX, y + offsetY, blockMaterials, blockGeometry);
        }
        /* GENERATE DECORATION 2D PARTICLES. */
        /*
        var decorationParticles = new THREE.Geometry();
        var decorationTexture = THREE.ImageUtils.loadTexture(path + "grassSprite.png");
        var decorationMaterial = new THREE.PointCloudMaterial({
            map: decorationTexture,
            transparent: true,
            alphaTest: 0.5,
            color: lightColor,
            size: 4
        });
/*
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
        */
    },

    /*
     * Use this to create blocks to the world.
     * @returns {undefined}
     */
    createTileBlock: function (x, y, blockMaterial, blockGeometry) {

        var block;
        var placeX;
        var placeY;
        var placeZ;
        var randomTile;
        
        placeX = x + TILE_WIDTH / 2;
        placeY = y + TILE_HEIGHT / 2;
        placeZ = TILE_HEIGHT / 2;
        
        randomTile = Math.floor((Math.random() * 4));
        
        block = new THREE.Mesh(blockGeometry, blockMaterial[randomTile]);
        
        block.position.x = placeX;
        block.position.y = placeY;
        block.position.z = placeZ;
        block.rotation.x += Math.PI / 2;
        block.receiveShadow = true;
        block.castShadow = true;
        
        this.environmentGroup.add(block);

        block = new THREE.Mesh(blockGeometry, blockMaterial[randomTile]);

        block.position.x = placeX;
        block.position.y = placeY;
        block.position.z = placeZ;
        block.rotation.x += Math.PI / 2;
        block.rotation.y += Math.PI / 2;
        block.receiveShadow = true;
        block.castShadow = true;

        this.environmentGroup.add(block);
        
    },
    
    createWorldWall: function (x, y, rotateY, wallGeometry, wallMaterial) {
        var worldWall;

        worldWall = new THREE.Mesh(wallGeometry, wallMaterial);
        worldWall.position.x = x;
        worldWall.position.y = y;
        worldWall.position.z = WALL_HEIGHT / 2;
        worldWall.rotation.x += Math.PI / 2;

        if (rotateY) {
            worldWall.rotation.y += Math.PI / 2;
        }
        this.environmentGroup.add(worldWall);
    }
};


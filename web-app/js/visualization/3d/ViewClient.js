var serverData = {};

function synchronizeState() {
    /* TESTING HARD. */
    serverData = {
        "gamestate": {
            "rounds": "3",
            "currentRound": "0",
            "timeLeft": "300",
            "environment": TEST_ENV,
            "rain": "",
            "darkness": TEST_DARKNESS,
            "bullets": [{
                    "id": "0",
                    "x": "50",
                    "y": "50",
                    "velocity":{
                        "x": 1,
                        "y": 0.5
                    }
                }],
            "players": [{
                    "id": "",
                    "x": 0,
                    "y": 0
                },
                {
                    "id": "",
                    "x": 53,
                    "y": 30
                },
                {
                    "id": "",
                    "x": 80,
                    "y": 50
                },
                {
                    "id": "",
                    "x": 120,
                    "y": 80
                },
                {
                    "id": "",
                    "x": 90,
                    "y": 160
                },
                {
                    "id": "",
                    "x": 90,
                    "y": 190
                },
                {
                    "id": "",
                    "x": 90,
                    "y": 220
                },
                {
                    "id": "",
                    "x": 120,
                    "y": 100
                },
                {
                    "id": "",
                    "x": 140,
                    "y": 100
                }]
        }
    };
}
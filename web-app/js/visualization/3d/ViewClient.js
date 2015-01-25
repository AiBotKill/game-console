var serverData = {};

function synchronizeState(){
    /* TESTING HARD. */
    serverData = {
        "gamestate":{
            "rounds":"3",
            "currentRound":"0",
            "timeLeft":"300",
            "environment": ENVIRONMENT_CAVERN,
            "rain":"",
            "darkness":"",
            "bullets":[{
                "id":"0",
                "x":"50",
                "y":"50"
            }]
        }
    };
}
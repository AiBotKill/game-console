$(function() {
    addNewTeam();

    $( "#ai span" ).draggable({
        appendTo: "body",
        start: function(event, ui) {
            ui.helper.css("width", $(this).css("width"));
        }
    });
    $( ".ai-team-list" ).droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: dropped
    });

    checkGameMode();
    $("#mode").change(checkGameMode);
});

function checkGameMode() {
    if ($("#mode").val() === "DEATHMATCH" || $("#mode").val() === "DUEL") {

        // Remove all but first 2 teams
        if ($("#mode").val() === "DUEL") {
            $("#teamsContainer").find(".panel:gt(1)").remove();
        }

        // Remove all but the first AI
        $(".ai-team-list").find("li:gt(0)").remove();
        // Loop through each team
        $.each($(".ai-team-list"), function(index, element) {
            // Don't accept any more AIs if team already has one
            if ($(element).children().size() == 1 && !$(element).children().first().hasClass("placeholder")) {
                $(element).droppable("option", "accept","#notacceptinganymore");
            }
        });
    } else if ($("#mode").val() === "TEAM") {
        // Accept as many AIs as user wants
        $.each($(".ai-team-list"), function(index, element) {
            $(element).droppable("option", "accept","span");
        });
    }

    // Add new team DEATHMATCH and all teams are having 1 AI
    if ($("#mode").val() === "DEATHMATCH" || $("#mode").val() === "TEAM") {
        addNewTeam();
    }
}

function dropped(event, ui) {
    $( this ).find( ".placeholder" ).remove();
    var team = this.id.split("-")[2];
    var id = $(this).children().size();
    var connectionId = $(ui.draggable).attr("id").split(";")[1];
    var closeIcon = '<button onclick="removeAi('+team+','+id+','+connectionId+','+ui.draggable.text()+')" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    var input = $("<input type='hidden' name='teamAssignments' value='"+connectionId+":"+team+"' />");
    $( "<li id='ai-"+id+"' class='list-group-item'></li>" ).text( ui.draggable.text()).append(closeIcon).append(input).appendTo( this );

    $(ui.draggable).remove();

    // Accept only 1 AI if DEATHMATCH or DUEL selected
    if (($("#mode").val() === "DEATHMATCH" || $("#mode").val() === "DUEL") && id == 0) {
        $(this).droppable("option", "accept","#notacceptinganymore");
    }

    // If only 1 team (on create) or DUEL mode and 2 teams
    if ($("#mode").val() != "DUEL" || $("#teamsContainer").children(".panel").size() == 1) {
        addNewTeam();
    }
}

function addNewTeam() {
    // If all teams have at least one AI
    var allTeamsHaveMembers = true;
    $.each($(".ai-team-list"), function (index, element) {
        if ($(element).children().size() == 1 && $(element).children().first().hasClass("placeholder")) {
            allTeamsHaveMembers = false;
        }
    });
    // Add new team
    if (allTeamsHaveMembers) {
        var teamNumber = $("#teamsContainer").children(".panel").size() + 1;
        var teamHeader = $('<div class="panel panel-default"></div>');
        var color = $("#color-"+(teamNumber-1)).html();
        teamHeader.append($('<div class="panel-heading color-'+color+'"></div>').append('<h3 class="panel-title">Team ' + teamNumber + '</h3>'));
        var teamBody = $('<ul class="list-group ai-team-list" id="ai-team-' + teamNumber + '"></ul>');
        teamBody.append('<li class="list-group-item placeholder"><strong>Drag AIs here</strong></li>');
        teamHeader.append(teamBody).appendTo($("#teamsContainer"));
        teamBody.droppable({
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: dropped
        });
    }
}

function removeAi(team, id, connectionId, name) {
    $( "#ai-team-" + team + " #ai-" + id).remove();

    var connectedAI = "<span id=\"team;"+connectionId+"\" style=\"cursor:move\" class=\"list-group-item\">"+name+"</span>";
    connectedAI.appendTo($("#ai"));

    var team = $("#ai-team-" + team);
    if (team.children("li").size() == 0) {
        if ($("#mode").val() === "DEATHMATCH" || $("#mode").val() === "DUEL") {
            team.droppable("option", "accept","span");
        }
        $("<li class='placeholder list-group-item'></li>").text($("#placeholderText").html()).appendTo(team);
    }
}


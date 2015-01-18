
$("#mode").change(function() {
    if ($("#mode").val() === "DEATHMATCH") {
        $(".participationCheckbox").removeAttr("disabled");
        $(".participationCheckbox").show();
        $(".teamSelect").hide();
        $(".teamSelect").attr("disabled", "disabled");
    } else {
        $(".participationCheckbox").hide();
        $(".participationCheckbox").attr("disabled", "disabled");
        $(".teamSelect").removeAttr("disabled");
        $(".teamSelect").show();
    }
});


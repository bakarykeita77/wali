
function changementDeLangue() {
     
    $("#langue").click(function() {
        $("#langue ul").toggle(".afficher");
    });

    $("#li_nk").click(function() {
        $(".nk").css("display","block");
        $(".fr").css("display","none");
        $("*").css("direction","rtl");
    });

    $("#li_fr").click(function() {
        $(".fr").css("display","block");
        $(".nk").css("display","none");
        $("*").css("direction","ltr");
    });
}
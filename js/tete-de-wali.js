
const version_nkos = document.querySelectorAll(".nk");
const version_francaises = document.querySelectorAll(".fr");

$("#langue").click(function() {
    $("#langue ul").toggle(".afficher");
});

$("#li_nk").click(function() {
    $(".nk").css("display","block");
    $(".fr").css("display","none");
    $("body").css("direction","rtl");
});

$("#li_fr").click(function() {
    $(".fr").css("display","block");
    $(".nk").css("display","none");
    $("body").css("direction","ltr");
});
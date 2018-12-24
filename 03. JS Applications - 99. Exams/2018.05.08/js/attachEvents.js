$(document).on({
    ajaxStart: function() { $("#loadingBox").fadeIn() },
    ajaxStop: function() { $("#loadingBox").fadeOut() }
});
function showInfo(message) {
    let infoBox = $("#infoBox");
    infoBox.text(message);
    infoBox.fadeIn();
    setTimeout(function () {
        infoBox.on("click",function () {
            infoBox.fadeOut();
        });
        infoBox.fadeOut();
    },3000)
}
function showError(message) {
    let errorBox = $("#errorBox");
    errorBox.text(message);
    errorBox.on("click",function () {
        errorBox.fadeOut();
    });
    errorBox.fadeIn();
}
if (localStorage.getItem("authToken")!==null) {
    userLoggedIn();
} else {
    userLoggedOut();
}
function userLoggedIn() {
    $("#viewLogin").hide();
    $("#viewRegister").hide();
    $(".left-container li:nth-child(2)").show();
    $(".left-container li:nth-child(3)").hide();
    $(".left-container li:nth-child(4)").hide();
    $(".right-container").show();
    $(".right-container").find("span").text(`Welcome, ${localStorage.getItem("username")}!`);
    $("#viewAddFlight").show();
    $("#viewCatalog").show();
    $("#viewEditFlight").show();
    $("#viewMyFlights").show();

}

function userLoggedOut() {
    $("#viewLogin").show();
    $("#viewRegister").show();
    $(".left-container li:nth-child(2)").hide();
    $(".left-container li:nth-child(3)").show();
    $(".left-container li:nth-child(4)").show();
    $(".right-container").hide();
    $("#viewAddFlight").hide();
    $("#viewCatalog").hide();
    $("#viewEditFlight").hide();
    $("#viewMyFlights").hide();
}
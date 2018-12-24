$(document).on({
    ajaxStart: () => $("#loadingBox").fadeIn(),
    ajaxStop: () => $("#loadingBox").fadeOut()
});
function showSuccess(message) {
    let box = $("#infoBox");
    box.find("span").text(message);
    box.fadeIn();
    setInterval(function () {
        box.fadeOut();
        box.on("click",()=>box.fadeOut());
    },3000);
}
function showError(message) {
    let box = $("#errorBox");
    box.find("span").text(message);
    box.fadeIn();
    box.on("click",()=>box.fadeOut());
}
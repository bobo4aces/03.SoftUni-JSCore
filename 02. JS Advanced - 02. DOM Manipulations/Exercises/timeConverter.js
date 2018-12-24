function attachEventsListeners() {
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let daysButton = document.getElementById("daysBtn");
    let hoursButton = document.getElementById("hoursBtn");
    let minutesButton = document.getElementById("minutesBtn");
    let secondsButton = document.getElementById("secondsBtn");
    daysButton.addEventListener("click",function () {
        hours.value=24*days.value;
        minutes.value=1440*days.value;
        seconds.value=86400*days.value;
    });
    hoursButton.addEventListener("click",function () {
        days.value=hours.value/24;
        minutes.value=hours.value*60;
        seconds.value=hours.value*3600;
    });
    minutesButton.addEventListener("click",function () {
        days.value=minutes.value/(24*60);
        hours.value=minutes.value/60;
        seconds.value=minutes.value*60;
    });
    secondsButton.addEventListener("click",function () {
        days.value=seconds.value/(24*60*60);
        hours.value=seconds.value/3600;
        minutes.value=seconds.value/60;
    });
}
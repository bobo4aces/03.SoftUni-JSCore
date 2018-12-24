function timer() {
    let hours = $("#hours");
    let minutes = $("#minutes");
    let seconds = $("#seconds");
    let startButton = $("#start-timer");
    let pauseButton = $("#stop-timer");
    let totalSeconds = 0;
    let interval=undefined;
    startButton.on("click",function () {
        if (!interval) {
            interval=setInterval(time,1000);
        }
    });

    function time() {
        totalSeconds++;
        seconds.text(("0" + totalSeconds % 60).slice(-2));
        minutes.text(("0" + Math.trunc(totalSeconds / 60) % 60).slice(-2));
        hours.text(("0" + Math.trunc(totalSeconds / 3600) % 60).slice(-2));
    }
    pauseButton.on("click",function () {
        clearInterval(interval);
        interval=undefined;
    });
}

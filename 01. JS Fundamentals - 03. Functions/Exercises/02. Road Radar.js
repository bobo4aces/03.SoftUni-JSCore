function roadRadar (array) {
    let currentSpeed = Number(array[0]);
    let motorwayLimit = (speed, limit=130) => speed-limit;
    let interstateLimit = (speed, limit=90) => speed-limit;
    let cityLimit = (speed, limit=50) => speed-limit;
    let residentialAreaLimit = (speed, limit=20) => speed-limit;
    if (array[1] === "motorway") {
        infractionSeverity(motorwayLimit(currentSpeed));
    } else if (array[1] === "interstate") {
        infractionSeverity(interstateLimit(currentSpeed));
    } else if (array[1] === "city") {
        infractionSeverity(cityLimit(currentSpeed));
    } else if (array[1] === "residential") {
        infractionSeverity(residentialAreaLimit(currentSpeed));
    }

    function infractionSeverity(speedDifference) {
        if (0>=speedDifference) {
            console.log();
        } else if (0<speedDifference && speedDifference<=20) {
            console.log("speeding");
        } else if (20<speedDifference && speedDifference<=40) {
            console.log("excessive speeding");
        } else {
            console.log("reckless driving");
        }
    }
}
roadRadar([40, "city"]);
roadRadar([21, "residential"]);
roadRadar([120, "interstate"]);
roadRadar([200, "motorway"]);
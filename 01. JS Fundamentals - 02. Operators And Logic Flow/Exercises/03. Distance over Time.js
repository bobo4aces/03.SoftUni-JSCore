function distanceOverTime (array) {
    let firstSpeed = Number(array[0]);
    let secondSpeed = Number(array[1]);
    let seconds = Number(array[2]);
    let bestSpeed = Math.abs(firstSpeed - secondSpeed);
    let distance = bestSpeed * seconds / 3600 * 1000;
    console.log(distance);
}
distanceOverTime([0, 60, 3600]);
distanceOverTime([11, 10, 120]);
distanceOverTime([5, -5, 40]);
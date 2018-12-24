function convertGradsToRadians (grads) {
    let radians = Number(grads)*360/400 % 360;
    if (grads < 0) {
        radians = 360 + radians;
    }
    console.log(radians);
}
convertGradsToRadians(100);
convertGradsToRadians(400);
convertGradsToRadians(850);
convertGradsToRadians("-50");
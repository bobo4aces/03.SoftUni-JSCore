function distanceBetweenTwoPoints (x1, y1, x2, y2) {
    let firstPoint = {X: Number(x1), Y: Number(y1)};
    let secondPoint = {X: Number(x2), Y: Number(y2)};
    let distance = Math.sqrt(Math.pow((firstPoint.X - secondPoint.X),2) + Math.pow((firstPoint.Y - secondPoint.Y),2));
    console.log(distance);
}
distanceBetweenTwoPoints(2, 4, 5, 0);
distanceBetweenTwoPoints(2.34, 15.66, -13.55, -2.9985);
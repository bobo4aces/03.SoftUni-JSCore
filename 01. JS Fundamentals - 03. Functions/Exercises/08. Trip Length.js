function tripLength ([x1, y1, x2, y2, x3, y3]) {
    let firstPoint = getPoint(x1,y1);
    let secondPoint = getPoint(x2,y2);
    let thirdPoint = getPoint(x3,y3);
    let distanceFrom1To2 = getDistance(firstPoint,secondPoint);
    let distanceFrom2To3 = getDistance(secondPoint,thirdPoint);
    let distanceFrom1To3 = getDistance(firstPoint,thirdPoint);
    if (distanceFrom1To2<=distanceFrom1To3 && distanceFrom2To3<=distanceFrom1To3) {
        console.log(`1->2->3: ${distanceFrom1To2+distanceFrom2To3}`);
    } else if (distanceFrom1To2<=distanceFrom2To3 && distanceFrom1To3<=distanceFrom2To3) {
        console.log(`2->1->3: ${distanceFrom1To2+distanceFrom1To3}`);
    } else {
        console.log(`1->3->2: ${distanceFrom2To3+distanceFrom1To3}`);
    }
    function getPoint (x,y) {
        return {X:x, Y:y};
    }
    function getDistance (firstPoint,secondPoint) {
        return Math.sqrt(Math.pow(firstPoint.X - secondPoint.X,2)+Math.pow(firstPoint.Y - secondPoint.Y,2));
    }
}
tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);
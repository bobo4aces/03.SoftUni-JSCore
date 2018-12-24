function validityChecker ([x1, y1, x2, y2]) {
    let firstPoint = {X:x1, Y:y1};
    let secondPoint = {X:x2, Y:y2};
    let startPoint = {X:0, Y:0};
    isValidDistance(firstPoint,startPoint);
    isValidDistance(secondPoint,startPoint);
    isValidDistance(firstPoint,secondPoint);
    function isValidDistance (firstPoint, secondPoint) {
        let distance = Math.sqrt(Math.pow(firstPoint.X - secondPoint.X,2) + Math.pow(firstPoint.Y - secondPoint.Y,2));
        if (Number.isInteger(distance)) {
            console.log(`{${firstPoint.X}, ${firstPoint.Y}} to {${secondPoint.X}, ${secondPoint.Y}} is valid`);
        } else {
            console.log(`{${firstPoint.X}, ${firstPoint.Y}} to {${secondPoint.X}, ${secondPoint.Y}} is invalid`);
        }
    }

}
validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);
validityChecker([3.3, 0, 0, 4]);
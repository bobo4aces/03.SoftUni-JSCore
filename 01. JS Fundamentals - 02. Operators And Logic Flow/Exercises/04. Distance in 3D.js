function distanceIn3D (array) {
    let firstPoint = {X: Number(array[0]), Y: Number(array[1]), Z: Number(array[2])};
    let secondPoint = {X: Number(array[3]), Y: Number(array[4]), Z: Number(array[5])};
    let distance = Math.sqrt(Math.pow((firstPoint.X - secondPoint.X),2)
        +Math.pow((firstPoint.Y - secondPoint.Y),2)
        +Math.pow((firstPoint.Z - secondPoint.Z),2));
    console.log(distance);
}
distanceIn3D([1, 1, 0, 5, 4, 0]);
distanceIn3D([3.5, 0, 1, 0, 2, -1]);
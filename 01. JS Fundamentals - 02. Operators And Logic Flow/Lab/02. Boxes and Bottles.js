function calculateBoxes (bottlesCount, boxCapacity) {
    let boxCount = Math.ceil(bottlesCount/boxCapacity);
    console.log(boxCount);
}
calculateBoxes(20,5);
calculateBoxes(15,7);
calculateBoxes(5,10);
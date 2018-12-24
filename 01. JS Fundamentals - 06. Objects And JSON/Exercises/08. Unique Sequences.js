function printUniqueSequences (inputArray) {
    let arrays = new Map();
    let orderCount = 0;
    for (let array of inputArray) {
        let sortedArray = Array.from(array).sort((a,b) => b-a);
        arrays.set(orderCount,sortedArray);
        orderCount++;
    }
    let uniqueArrays = new Map();
    let sortedArray = Array.from(arrays.values()).sort((a,b) => a.toString().length-b.toString().length);
    for (let arr of uniqueArrays) {
        console.log(arr);
    }
}
printUniqueSequences(
    [[-3, -2, -1, 0, 1, 2, 3, 4],
        [10, 1, -17, 0, 2, 13],
        [4, -3, 3, -2, 2, -1, 1, 0],
        [7.14, 7.180, 7.339, 80.099],
        [7.339, 80.0990, 7.140000, 7.18],
        [7.339, 7.180, 7.14, 80.099]]
);
function extractIncreasingElements (array) {
    let result = [];
    for (let i=0; i < array.length; i++) {
        if (array[i]>=result[result.length-1]||result[result.length-1]===undefined) {
            result.push(array[i]);
        }
    }
    for (let number of result) {
        console.log(number);
    }
}
extractIncreasingElements([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
extractIncreasingElements([
    1,
    2,
    3,
    4
]);
extractIncreasingElements([
    20,
    3,
    2,
    15,
    6,
    1
]);
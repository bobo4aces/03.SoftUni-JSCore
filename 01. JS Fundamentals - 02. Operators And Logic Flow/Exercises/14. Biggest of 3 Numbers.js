function biggestNumber (array) {
    let biggestNumber = array.sort(function(a,b) {return b-a});
    console.log(biggestNumber[0]);
}
biggestNumber([
    5,
    -2,
    7
]);
biggestNumber([
    130,
    5,
    99

]);
biggestNumber([
    43,
    43.2,
    43.1

]);
biggestNumber([
    5,
    5,
    5
]);
biggestNumber([
    -10,
    -20,
    -30

]);
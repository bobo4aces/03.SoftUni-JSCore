function printNthElement (array) {
    let n = Number(array.pop());
    for (let i=0; i<array.length; i+=n) {
        console.log(array[i]);
    }
}
printNthElement([
    5,
    20,
    31,
    4,
    20,
    2

]);
printNthElement([
    "dsa",
    "asd",
    "test",
    "tset",
    "2"

]);
printNthElement([
    1,
    2,
    3,
    4,
    5,
    6

]);
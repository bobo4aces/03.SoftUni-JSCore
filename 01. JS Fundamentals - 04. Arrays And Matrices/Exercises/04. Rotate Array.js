function rotateArray (array) {
    let rotationCount = Number(array.pop());
    for (let i=0; i<rotationCount%array.length; i++) {
        let currentLastElement = array.pop();
        array.unshift(currentLastElement);
    }
    console.log(array.join(" "));
}
rotateArray([
    "1",
    "2",
    "3",
    "4",
    "2"
]);
rotateArray([
    "Banana",
    "Orange",
    "Coconut",
    "Apple",
    "15"
]);
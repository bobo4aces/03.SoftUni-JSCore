function addRemoveElements (array) {
    let result = [];
    for (let i=0; i<array.length; i++) {
        let lastElement = result[result.length-1];
        if (array[i]==="add") {
            result.push(i+1);
        } else if (array[i]==="remove") {
            result.pop();
        }
    }
    for (let number of result) {
        console.log(number);
    }
    if (result.length===0) {
        console.log("Empty");
    }
}
addRemoveElements([
    "add",
    "add",
    "add",
    "add"
]);
addRemoveElements([
    "add",
    "add",
    "remove",
    "add",
    "add"
]);
addRemoveElements([
    "remove",
    "remove",
    "remove"
]);
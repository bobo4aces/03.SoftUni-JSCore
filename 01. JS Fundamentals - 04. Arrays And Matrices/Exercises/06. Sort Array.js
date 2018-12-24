function sortArray (array) {
    let sortedArray = array.sort((a,b) => a.localeCompare(b)).sort((a,b) => a.length - b.length);
    for (let element of sortedArray) {
        console.log(element);
    }
}
sortArray([
    "alpha",
    "beta",
    "gamma"
]);
sortArray([
    "Isacc",
    "Theodor",
    "Jack",
    "Harrison",
    "George"
]);
sortArray([
    "test",
    "Deny",
    "omen",
    "Default"
]);
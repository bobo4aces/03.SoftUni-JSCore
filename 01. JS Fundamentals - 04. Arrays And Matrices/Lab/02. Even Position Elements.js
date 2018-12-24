function printEvenPositionElements (array) {
    let evenPositionElements = [];
    for (let index in array) {
        if (index % 2 === 0) {
            evenPositionElements.push(array[index]);
        }
    }
    console.log(evenPositionElements.join(" "));
}
printEvenPositionElements(['20', '30', '40']);
printEvenPositionElements(['5', '10']);
function firstAndLastKNumbers (array) {
    let k = array[0];
    let firstElements = array.slice(1,k+1);
    let lastElements = array.slice(array.length-k,array.length);
    console.log(firstElements.join(" "));
    console.log(lastElements.join(" "));
}
firstAndLastKNumbers([2,
    7, 8, 9]
);
firstAndLastKNumbers([3,
    6, 7, 8, 9]
);
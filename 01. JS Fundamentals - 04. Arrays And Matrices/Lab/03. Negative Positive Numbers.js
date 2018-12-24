function negativePositiveNumbers (array) {
    let result = [];
    for (let number of array) {
        if (number >= 0) {
            result.push(number);
        } else {
            result.unshift(number);
        }
    }
    console.log(result.join("\n"));
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
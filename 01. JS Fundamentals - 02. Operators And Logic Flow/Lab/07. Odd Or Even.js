function isNumberOddEvenInvalid(number) {
    let reminder = Math.abs(Number(number) % 2);
    if (reminder === 0) {
        console.log("even");
    } else if (reminder === 1) {
        console.log("odd");
    } else {
        console.log("invalid");
    }
}
isNumberOddEvenInvalid(5);
isNumberOddEvenInvalid(8);
isNumberOddEvenInvalid(1.5);
isNumberOddEvenInvalid(-3);
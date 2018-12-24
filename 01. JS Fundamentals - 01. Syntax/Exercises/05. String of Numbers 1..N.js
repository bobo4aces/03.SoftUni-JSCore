function numbersToString(input) {
    let number = Number(input);
    let string = "";
    for (let i = 1; i <= number; i++) {
        string += i;
    }
    console.log(string);
}
numbersToString('11');
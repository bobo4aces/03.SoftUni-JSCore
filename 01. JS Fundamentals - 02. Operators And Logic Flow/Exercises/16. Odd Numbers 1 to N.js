function printOddNumbersToN (n) {
    let number = Number(n);
    for (let i=1; i<=number; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOddNumbersToN(5);
printOddNumbersToN(4);
printOddNumbersToN(7);
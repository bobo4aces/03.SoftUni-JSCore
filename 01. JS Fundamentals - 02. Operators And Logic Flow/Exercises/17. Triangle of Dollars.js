function printTriangleOfDollars (n) {
    let number = Number(n);
    for (let i=1; i <=number; i++) {
        console.log("$".repeat(i));
    }
}
printTriangleOfDollars(3);
printTriangleOfDollars(2);
printTriangleOfDollars(4);
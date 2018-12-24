function squareOfStars (number) {
    function printStars (count) {
        return "*"+" *".repeat(count-1);
    }
    if (number === undefined) {
        number=5;
    }
    for (let i=1; i<=Number(number); i++) {
        console.log(printStars(number));
    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars();
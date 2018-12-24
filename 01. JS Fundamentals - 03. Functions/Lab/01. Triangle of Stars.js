function triangleOfStars (number) {
    function printStars (count) {
        return "*".repeat(count);
    }
    for (let i=1; i<=Number(number); i++) {
        console.log(printStars(i));
    }
    for (let i=Number(number)-1; i>=1; i--) {
        console.log(printStars(i));
    }
}
triangleOfStars(1);
triangleOfStars(2);
triangleOfStars(5);
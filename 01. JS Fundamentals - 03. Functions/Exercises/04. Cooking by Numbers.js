function cookingByNumbers (array) {
    let chop = (number) => number/2;
    let dice = (number) => Math.sqrt(number);
    let spice = (number) => number+1;
    let bake = (number) => number*3;
    let fillet = (number) => number-(number*0.20);
    let currentNumber = Number(array[0]);
    for (let i=1; i<array.length; i++) {
        if (array[i] === "chop") {
            currentNumber=chop(currentNumber);
        } else if (array[i] === "dice") {
            currentNumber=dice(currentNumber);
        } else if (array[i] === "spice") {
            currentNumber=spice(currentNumber);
        } else if (array[i] === "bake") {
            currentNumber=bake(currentNumber);
        } else if (array[i] === "fillet") {
            currentNumber=fillet(currentNumber);
        }
        console.log(currentNumber);
    }
}
cookingByNumbers([32, "chop", "chop", "chop", "chop", "chop"]);
cookingByNumbers([9, "dice", "spice", "chop", "bake", "fillet"]);
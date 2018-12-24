function printSmallestTwoNumbers (array) {
    let twoSmallestNumbers = array.sort((a,b)=>a-b).slice(0,2);
    console.log(twoSmallestNumbers.join(" "));
}
printSmallestTwoNumbers([30, 15, 50, 5]);
printSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);
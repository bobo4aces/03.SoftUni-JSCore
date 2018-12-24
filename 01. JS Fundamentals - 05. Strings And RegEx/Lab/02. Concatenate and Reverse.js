function concatenateAndReverse (array) {
    let allStrings = array.join("");
    let chars = Array.from(allStrings);
    let reversedChars = chars.reverse();
    let reversedString = reversedChars.join("");
    console.log(reversedString);
}
concatenateAndReverse(['I', 'am', 'student']);
concatenateAndReverse(['race', 'car']);
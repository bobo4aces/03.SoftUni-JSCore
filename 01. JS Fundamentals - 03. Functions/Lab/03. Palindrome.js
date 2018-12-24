function isPalindrome (input) {
    let text = input.toString();
    let isPalindrome = true;
    for (let i=0; i<text.length/2; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            return console.log("false");
        }
    }
    console.log(isPalindrome);
}
isPalindrome("haha");
isPalindrome("racecar");
isPalindrome("unitinu");
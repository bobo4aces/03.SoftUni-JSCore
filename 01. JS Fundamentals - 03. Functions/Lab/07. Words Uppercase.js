function wordsUppercase (input) {
    let upperCaseText = input.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w!=='');
    return console.log(words.join(", "));
    function extractWords() {
        return upperCaseText.split(/\W+/);
    }
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
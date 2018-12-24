function letterOccurences (word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            count++;
        }
    }
    console.log(count);
}
letterOccurences('hello', 'l');
letterOccurences('panther', 'n');
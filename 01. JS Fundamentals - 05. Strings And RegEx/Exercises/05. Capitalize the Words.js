function capitalizeWords (str) {
    let words = str.split(" ");
    let properWords = [];
    for (let word of words) {
        let currentProperWord = word[0].toUpperCase();
        for (let i=1; i<word.length; i++) {
            currentProperWord+=word[i].toLowerCase();
        }
        properWords.push(currentProperWord);
    }
    console.log(properWords.join(" "));
}
capitalizeWords("Capitalize these words");
capitalizeWords("Was that Easy? tRY thIs onE for SiZe!");
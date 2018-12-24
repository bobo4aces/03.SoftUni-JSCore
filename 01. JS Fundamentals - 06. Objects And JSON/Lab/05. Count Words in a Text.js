function countWordsInText (inputLines) {
    let text = inputLines.join("\n");
    let words = text.split(/[^A-Za-z0-9_]+/g).filter(w=>w!=="");
    let wordsCount = {};
    for (let word of words) {
        if (wordsCount[word]===undefined) {
            wordsCount[word] = 1;
        } else {
            wordsCount[word] +=1;
        }
    }
    console.log(JSON.stringify(wordsCount));
}
countWordsInText(["Far too slow, you're far too slow."]);
countWordsInText(["JS devs use Node.js for server-side JS.-- JS for devs"]);
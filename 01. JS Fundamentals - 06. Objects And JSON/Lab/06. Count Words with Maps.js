function countWordsWithMap (inputLines) {
    let text = inputLines.join("\n").toLowerCase();
    let words = text.split(/[^A-Za-z0-9_]+/g).filter(w=>w!=="");
    let wordCountMap = new Map();
    for (let word of words) {
        if (wordCountMap.has(word)) {
            wordCountMap.set(word,wordCountMap.get(word)+1);
        } else {
            wordCountMap.set(word,1);
        }
    }
    let allWords = Array.from(wordCountMap.keys()).sort();
    for (let eachWord of allWords) {
        console.log(`'${eachWord}' -> ${wordCountMap.get(eachWord)} times`);
    }
}
countWordsWithMap(["Far too slow, you're far too slow."]);
countWordsWithMap(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]);
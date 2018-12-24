function countWordOccurences (sentence, word) {
    let pattern = new RegExp(`${word}\\b`,"gi");
    let matches = sentence.match(pattern);
    if (matches!==null) {
        console.log(matches.length);
    } else {
        console.log("0");
    }
}
countWordOccurences("The waterfall was so high, that the child couldn’t see its peak.","the");
countWordOccurences("How do you plan on achieving that? How? How can you even think of that?","how");
countWordOccurences("There was one. Therefore I bought it. I wouldn’t buy it otherwise.","there");
function tribulation (sentences) {
    let firstSentence = sentences[0].split(/\W+/g).map(e=>e.trim()).map(e=>e.toLowerCase()).filter(w=>w!=="");
    let secondSentence = sentences[1].split(/[.!?]+/g).map(e=>e.trim()).filter(w=>w!=="");
    let firstSentenceMatches = new Map();
    for (let word of firstSentence) {
        if (!firstSentenceMatches.has(word)) {
            firstSentenceMatches.set(word,0);
        }
        firstSentenceMatches.set(word,firstSentenceMatches.get(word)+1);
    }
    let firstSentenceUniqueWords = [...firstSentenceMatches].filter(e=>e[1]>=3);
    if (firstSentenceUniqueWords.length<1) {
        console.log("No words");
        return;
    }
    let isMatched = false;
    for (let sentence of secondSentence) {
        let counter = 0;
        let arr=sentence.split(/\W+/);
        for (let [uniqueWord, count] of firstSentenceUniqueWords) {
            for (let w of arr) {
                if (w.toLowerCase()===uniqueWord) {
                    counter++;
                    break;
                }
            }
        }
        if (counter>=2) {
            let index = sentences[1].indexOf(sentence);
            console.log(sentences[1].slice(index,index+sentence.length+1));
            isMatched=true;
        }
    }
    if (!isMatched) {
        console.log("No sentences");
    }
}
tribulation(["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
    "The captain was walking and he was obvious. He did not know what was going to happen to you in the future... Was he curious? We do not know."]
);
tribulation(["Why, why is he so crazy, so so crazy? Why?",
    "There are no words that you should be matching. You should be careful."]
);
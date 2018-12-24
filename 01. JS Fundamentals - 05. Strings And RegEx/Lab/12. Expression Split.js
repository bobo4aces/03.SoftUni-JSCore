function expressionSplit(str) {
    let separators = /\(|\)|,| |;|\./g;
    let splittedExpression = str.split(separators);
    for (let word of splittedExpression) {
        if (word!=="") {
            console.log(word);
        }
    }
}
expressionSplit('let sum = 4 * 4,b = "wow";');
expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');
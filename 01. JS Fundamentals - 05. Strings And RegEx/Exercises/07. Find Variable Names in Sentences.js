function findVariableNamesInSentences (str) {
    let pattern = /\b_([A-Za-z0-9]+\b)/g;
    let variableNames = [],match;
    while (match=pattern.exec(str)) {
        variableNames.push(match[1]);
    }
    console.log(variableNames.join(","));
}
findVariableNamesInSentences("The _id and _age variables are both integers.");
findVariableNamesInSentences("Calculate the _area of the _perfectRectangle object.");
findVariableNamesInSentences("__invalidVariable _evenMoreInvalidVariable_ _validVariable");
function xRemoval (array) {
    let lowerCaseArray = array.map(e=>e.toLowerCase());
    let result = [];
    for (let row=1; row < array.length-1; row++) {
        let wordRow = "";
        let wordRow1 = "";
        let wordRow2 = "";
        for (let col=1; col < array[row].length-1; col++) {
            if (lowerCaseArray[row][col]!==lowerCaseArray[row-1][col-1]||
                lowerCaseArray[row][col]!==lowerCaseArray[row-1][col+1]||
                lowerCaseArray[row][col]!==lowerCaseArray[row+1][col-1]||
                lowerCaseArray[row][col]!==lowerCaseArray[row+1][col+1]){
                continue;
            }
            wordRow+=array[row-1][col-1];
            if (row===array.length-2) {
                wordRow1+=array[row+1][col+1];
                wordRow2+=array[row+1][col+2];
            }

        }
        result.push(wordRow);
        if (row===array.length-2) {
            result.push(wordRow1);
            result.push(wordRow2);
        }
    }
    console.log(result.join("\n"));
}
xRemoval([
    "abnbjs",
    "xoBab",
    "Abmbh",
    "aabab",
    "ababvvvv"
]);
xRemoval([
    "8888888",
    "08*8*80",
    "808*888",
    "0**8*8?"
]);
xRemoval([
    "^u^",
    "j^l^a",
    "^w^WoWl",
    "adw1w6",
    "(WdWoWgPoop)"
]);
xRemoval([
    "puoUdai",
    "miU",
    "ausupirina",
    "8n8i8",
    "m8o8a",
    "8l8o860",
    "M8i8",
    "8e8!8?!"
]);
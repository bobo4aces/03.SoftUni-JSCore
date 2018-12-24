function extractText (str) {
    let extractedText = [];
    let startIndex = str.indexOf("(");
    while (startIndex>-1) {
        let endIndex = str.indexOf(")",startIndex);
        if (endIndex===-1) {
            break;
        }
        extractedText.push(str.substring(startIndex+1,endIndex));
        startIndex = str.indexOf("(",endIndex);
    }
    console.log(extractedText.join(", "));
}
extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');
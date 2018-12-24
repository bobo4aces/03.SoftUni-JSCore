function composeTag (array) {
    let fileLocation = array[0];
    let alternateText = array[1];
    console.log(`<img src="${fileLocation}" alt="${alternateText}">`);
}
composeTag(['smiley.gif', 'Smiley Face']);
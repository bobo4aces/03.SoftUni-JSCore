function printArrayWithGivenDelimiter (array) {
    let delimiter = array.pop();
    console.log(array.join(delimiter));
}
printArrayWithGivenDelimiter([
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "-"
]);
printArrayWithGivenDelimiter([
        "How about no?",
        "I",
        "will",
        "not",
        "do",
        "it!",
        "_"
    ]
);
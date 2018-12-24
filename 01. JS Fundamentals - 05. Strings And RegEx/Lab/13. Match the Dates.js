function matchTheDates (sentences) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})/g;
    let dates = [],match;
    for (let sentence of sentences) {
        while (match = pattern.exec(sentence)) {
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }
    console.log(dates.join("\n"));
}
matchTheDates(["I am born on 30-Dec-1994.","This is not date: 512-Jan-1996.","My father is born on the 29-Jul-1955."]);
matchTheDates(["1-Jan-1999 is a valid date.\n" +
"So is 01-July-2000.\n" +
"I am an awful liar, by the way – Ivo, 28-Sep-2016.\n"]);
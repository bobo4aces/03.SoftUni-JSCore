function rosettaStone (array) {
    let linesCount = Number(array.shift());
    let template =[];
    let matrix = [];
    for (let i=0; i<array.length; i++) {
        if (i<linesCount) {
            template.push(array[i].split(" ").map(Number));
        } else {
            matrix.push(array[i].split(" ").map(Number));
        }
    }
    let wheelOfLetters = [" "];
    for (let i=65; i<=90; i++) {
        wheelOfLetters.push(String.fromCharCode(i));
    }
    let decodedText="";
    for (let row=0; row<matrix.length;row++) {
        for (let col=0; col<matrix[row].length;col++) {
            let currentRow = row%linesCount;
            let currentCol = col%template[currentRow].length;
            let letterPosition = matrix[row][col]+template[currentRow][currentCol];
            decodedText+=wheelOfLetters[letterPosition%27];
        }
    }
    console.log(decodedText);
}
rosettaStone([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]
);
rosettaStone(["1",
    "1 3 13",
    "12 22 14 13 25 0 4 24 23",
    "18 24 2 25 22 0 0 11 18",
    "8 25 6 26 8 23 13 4 14",
    "14 3 14 10 6 1 6 16 14",
    "11 12 2 10 24 2 13 24 0",
    "24 24 10 14 15 25 18 24 12",
    "4 24 0 8 4 22 19 22 14",
    "0 11 18 26 1 19 18 13 15",
    "8 15 14 26 24 14 26 24 14"]);
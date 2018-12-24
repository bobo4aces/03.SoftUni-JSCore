function diagonalAttack (matrix) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    let newMatrix = [];
    for (let row=0; row<matrix.length; row++) {
        newMatrix[row]=matrix[row].split(" ");
    }
    for (let row=0; row<newMatrix.length; row++) {
        firstDiagonalSum+=Number(newMatrix[row][row]);
        secondDiagonalSum+=Number(newMatrix[row][newMatrix.length-1-row]);
    }
    if (firstDiagonalSum!==secondDiagonalSum) {
        return console.log(newMatrix.map(row=>row.join(" ")).join("\n"));
    }
    let result = [];
    for (let row=0; row<newMatrix.length; row++) {
        for (let col=0; col<newMatrix.length; col++) {
            if (row===col) {
                continue;
            }
            if (col===newMatrix.length-1-row) {
                continue;
            }
            newMatrix[row][col]=firstDiagonalSum;
        }
    }
    console.log(newMatrix.map(row=>row.join(" ")).join("\n"));
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);
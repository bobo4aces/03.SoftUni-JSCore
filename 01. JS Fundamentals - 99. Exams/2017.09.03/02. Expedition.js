function expedition (primaryMatrix, secondaryMatrix, overlayCoordinates, startingCoordinates) {
    for (let i=0; i<overlayCoordinates.length; i++) {
        let currentRow = overlayCoordinates[i][0];
        let currentCol = overlayCoordinates[i][1];
        for (let row=0; row<secondaryMatrix.length;row++) {
            for (let col=0; col<secondaryMatrix[row].length;col++) {
                if (row+currentRow<primaryMatrix.length&&col+currentCol<primaryMatrix.length) {
                    let secondaryMatrixCell = secondaryMatrix[row][col];
                    let primaryMatrixCell = primaryMatrix[row + currentRow][col + currentCol];
                    if (secondaryMatrixCell - primaryMatrixCell === 0) {
                        primaryMatrix[row + currentRow][col + currentCol] = 0;
                    } else {
                        primaryMatrix[row + currentRow][col + currentCol] = 1;
                    }
                }
            }
        }
    }
    console.log(primaryMatrix.map(row=>row.join(" ")).join("\n"));
}
expedition([[1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]],
    [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [0, 2]
);
expedition([[1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 1, 0]],
    [[0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1]],
    [[0, 0],
        [2, 1],
        [1, 0]],
    [2, 0]
);
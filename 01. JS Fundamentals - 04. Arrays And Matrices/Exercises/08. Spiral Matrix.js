function spiralMatrix (row,col) {
    let matrix = [];
    let start = 1;
    for (let i=0; i<row;i++) {
        matrix[i] = [];
        for (let j=0; j<col;j++) {
            matrix[i][j]=start++;
        }
    }
    console.log(matrix.map(row=>row.join(" ")).join("\n"));
}
spiralMatrix(5, 5);
spiralMatrix(3, 3);
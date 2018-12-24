function magicMatrix (matrix) {
    let sum = Number.NEGATIVE_INFINITY;
    for (let row=0; row<=matrix.length-1; row++) {
        let rowSum = 0;
        let colSum = 0;
        for (let col=0; col<=matrix[row].length-1; col++) {
            if (matrix[col]===undefined||matrix[row]===undefined) {
                return console.log(false);
            }
            rowSum+=Number(matrix[row][col]);
            colSum+=Number(matrix[col][row]);
        }
        if (rowSum===colSum&&sum===Number.NEGATIVE_INFINITY) {
            sum = rowSum;
        }
        if (rowSum!==sum||colSum!==sum) {
            return console.log(false);
        }
    }
    console.log(true);
}
magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);
magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);
magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);
magicMatrix([[1, 0, 0,],
    [0, 0, 1, 0],
    [0, 1, 0]]
);
magicMatrix([[1.5,1.5],[1.5,1.51]]
);
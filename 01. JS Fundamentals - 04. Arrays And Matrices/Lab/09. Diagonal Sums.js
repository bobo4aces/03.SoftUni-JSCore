function diagonalSum (matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainDiagonalSum+=matrix[row][row];
        secondaryDiagonalSum+=matrix[row][matrix.length-1-row];
    }
    console.log(mainDiagonalSum + " " + secondaryDiagonalSum);
}
diagonalSum([[20, 40],
    [10, 60]]
);
diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);
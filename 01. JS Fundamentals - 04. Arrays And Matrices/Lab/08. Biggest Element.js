function findBiggestElement (matrix) {
    let biggestElement = Number.NEGATIVE_INFINITY;
    matrix.forEach(r => r.forEach(c => biggestElement = Math.max(biggestElement,c)));
    console.log(biggestElement);
}
findBiggestElement([[20, 50, 10],
    [8, 33, 145]]
);
findBiggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]

);
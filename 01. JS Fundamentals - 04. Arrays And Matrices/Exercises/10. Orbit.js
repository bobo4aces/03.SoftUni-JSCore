function orbit ([width, height, x, y]) {
    let matrix = [];
    for (let row=0; row<width; row++) {
        matrix[row] = [];
        for (let col=0; col<height; col++) {
            if (row===x&&col===y) {
                matrix[row][col] = 1;
            } else {
                matrix[row][col] = 0;
            }
        }
    }
    for (let row=0; row<width; row++) {
        for (let col=0; col<height; col++) {
            if (row===x&&col===y) {
                matrix[row][col] = 1;
            } else {
                matrix[row][col] = width-row;
            }
        }
    }
    console.log(matrix.map(row=>row.join(" ")).join("\n"));
}
orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
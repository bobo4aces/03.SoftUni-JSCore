function bunnyKill (matrix) {
    let bombs = matrix.pop();
    let bunnies = [];
    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row].toString().split(" ").map(Number);
        bunnies.push(currentRow);
    }
    bombs=bombs.toString().split(" ");
    let bombBunnies=[];
    for (let bomb of bombs) {
        bombBunnies.push(bomb.split(",").map(Number));
    }
    for (let bombBunny of bombBunnies) {
        for (let row = bombBunny[0] - 1; row <= bombBunny[0] + 1; row++) {
            for (let col = bombBunny[1] - 1; col <= bombBunny[1] + 1; col++) {
                if (row<0||col<0||row>=bunnies.length||col>=bunnies[row].length) {
                    continue;
                }
                let bomb = bunnies[bombBunny[0]][bombBunny[1]];
                if (bomb<=0) {
                    continue;
                }
                if (bombBunny[0]!==row||bombBunny[1]!==col) {
                    bunnies[row][col]-=bomb;
                }
            }
        }
    }
    let damage = 0;
    let killedUnits = 0;
    for (let row = 0; row<bunnies.length; row++) {
        for (let col = 0; col<bunnies[row].length; col++) {
            if (bunnies[row][col]>0) {
                damage+=bunnies[row][col];
                killedUnits++;
            }
        }
    }
    console.log(damage);
    console.log(killedUnits);
}
bunnyKill([
    ["10 10 10"],
    ["10 10 10"],
    ["10 10 10"],
    ["0,0"]
]);
bunnyKill([
    ["5 10 15 20"],
    ["10 10 10 10"],
    ["10 15 10 10"],
    ["10 10 10 10"],
    ["2,2 0,1"]

]);
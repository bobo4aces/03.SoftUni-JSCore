function magicGrid (input) {
    let encryptedMessage = input.shift();
    let magicNumber = Number(input.shift());
    let matrix = [];
    for (let line of input) {
        let row = line.split(" ").map(e=>Number(e));
        matrix.push(row);
    }
    let key=0;
    let isFound = false;
    for (let row = 0; row<matrix.length;row++) {
        for (let col = 0; col<matrix[row].length;col++) {
            for (let row1 = 0; row1<matrix.length;row1++) {
                for (let col1 = 0; col1<matrix[row1].length;col1++) {
                    if (row===row1&&col===col1) {
                        continue;
                    }
                    if (matrix[row][col]+matrix[row1][col1]===magicNumber&&isFound===false) {
                        key+=row+col+row1+col1;
                        isFound=true;
                    }
                }
            }
        }
    }
    let decryptedMessage = "";
    for (let i=0; i<encryptedMessage.length;i++) {
        if (i%2===0) {
            decryptedMessage+=String.fromCharCode(encryptedMessage.charCodeAt(i)+key);
        } else {
            decryptedMessage+=String.fromCharCode(encryptedMessage.charCodeAt(i)-key);
        }
    }
    console.log(decryptedMessage);
}
magicGrid([
    "QqdvSpg",
    "400",
    "100 200 120",
    "120 300 310",
    "150 290 370"
]);
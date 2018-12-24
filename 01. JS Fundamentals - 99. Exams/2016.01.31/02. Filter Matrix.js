function filterMatrix (input) {
    let sequenceLength = Number(input.pop());
    let sequence = input.join(" ").split(" ");

    let counter = 1;
    for (let i=0; i<sequence.length; i++) {
        if (sequence[i]===sequence[i+1]) {
            counter++;
            if (counter===sequenceLength) {
                for (let j=i+1; j>i+1-sequenceLength; j-- ) {
                    sequence[j]=false;
                }
                counter=1;
            }
        } else {
            counter=1;
        }

    }
    let result = [];
    let index = 0;
    for (let i=0; i<input.length;i++) {
        let currentRow = input[i].split(' ');
        let outputRow = [];
        for (let j=0; j < currentRow.length; j++) {
            if (sequence[index++]!==false) {
                outputRow.push(currentRow[j]);
            }
        }
        result.push(outputRow);
    }
    while (result.length>0) {
        let row = result.shift();
        if (row.length>0) {
            console.log(row.join(' '));
        } else {
            console.log("(empty)");
        }
    }
}
filterMatrix([
    '3 3 3 2 5 9 9 9 9 1 2',
    '1 1 1 1 1 2 5 8 1 1 7',
    '7 7 1 2 3 5 7 4 4 1 2',
    '2'
]);
filterMatrix([
    '1 2 3 3',
    '3 5 7 8',
    '3 2 2 1',
    '3'
]);
filterMatrix([
    '2 1 1 1',
    '1 1 1',
    '3 7 3 3 1',
    '2'
]);
filterMatrix([
    '1 2 3 3 2 1',
    '5 2 2 1 1 0',
    '3 3 1 3 3',
    '2'
]);
function jansNotation (array) {
    let numbers = [];
    let operands = [];
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            numbers.push(array[i]);
        } else {
            result=calculations(numbers.pop(),numbers.pop(),array[i]);
            numbers.push(result);
        }
    }
    if (numbers.length>1) {
        console.log("Error: too many operands!");
        return;
    }
    if (isNaN(result)) {
        console.log("Error: not enough operands!");
        return;
    }
    console.log(result);
    function calculations(num2, num1, operator) {
        let result = 0;
        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "/") {
            result = num1 / num2;
        } else if (operator === "*") {
            result = num1 * num2;
        }
        return result;
    }
}
jansNotation([3,
    4,
    '+']
);
jansNotation([5,
    3,
    4,
    '*',
    '-']
);
jansNotation([7,
    33,
    8,
    '-']
);
jansNotation([31,
    2,
    '+',
    11,
    '/']
);
jansNotation([15,
    '/']
);
jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
);
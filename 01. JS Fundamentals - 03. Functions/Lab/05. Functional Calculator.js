function functionalCalculator (firstNumber, secondNumber, operator) {
    let add = function(a,b) {return a+b;};
    let subtract = function(a,b) {return a-b;};
    let multiply = function(a,b) {return a*b;};
    let divide = function(a,b) {return a/b;};
    switch (operator) {
        case "+":
            return console.log(add(Number(firstNumber),Number(secondNumber)));
        case "-":
            return console.log(subtract(Number(firstNumber),Number(secondNumber)));
        case "*":
            return console.log(multiply(Number(firstNumber),Number(secondNumber)));
        case "/":
            return console.log(divide(Number(firstNumber),Number(secondNumber)));
    }
}
functionalCalculator(2, 4, '+');
functionalCalculator(3, 3, '/');
functionalCalculator(18, -1, '*');
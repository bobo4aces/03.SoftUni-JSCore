function modifyAverage(number) {
    number = Number(number);
    let numberAsText = number.toString();
    while (averageSumOfDigits(number)<5.1) {
        numberAsText = number.toString()+9;
        number = Number(numberAsText);
    }
    console.log(Number(numberAsText));
    function averageSumOfDigits (number) {
        let numberAsText = number.toString();
        let sum = 0;
        let counter = 0;
        for (let i=0; i<numberAsText.length; i++) {
            sum+=Number(numberAsText[i]);
            counter++;
        }
        return sum/counter;
    }
}
modifyAverage(101);
modifyAverage(5835);
modifyAverage(0);
modifyAverage(5);
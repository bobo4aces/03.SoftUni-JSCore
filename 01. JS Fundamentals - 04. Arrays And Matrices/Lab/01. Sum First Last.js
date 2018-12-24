function sumFirstAndLastNumber (array) {
    array = array.map(Number);
    console.log(array[0]+array[array.length-1]);
}
sumFirstAndLastNumber(['20', '30', '40']);
sumFirstAndLastNumber(['5', '10']);
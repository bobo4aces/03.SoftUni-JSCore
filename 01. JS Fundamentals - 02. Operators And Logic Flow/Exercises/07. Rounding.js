function roundNumbers (array) {
    let number = array[0];
    let precision = array[1];
    if (precision >15) {
        precision = 15;
    }
    let divider = 1;
    for (let i=0; i <precision; i++) {
        number *=10;
        divider *=10;
    }
    let roundedNumber = Math.round(number)/divider;
    console.log(roundedNumber)
}
roundNumbers([3.1415926535897932384626433832795, 2]);
roundNumbers([10.5, 3]);
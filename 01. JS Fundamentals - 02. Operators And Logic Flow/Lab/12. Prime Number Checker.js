function isPrimeNumber (number) {
    let prime = true;
    if (number <=1) {
        prime = false;
    }
    for (let i=2; i<=Math.sqrt(Number(number)); i++) {
        if (Number(number) % i === 0) {
            prime = false;
            break;
        }
    }
    console.log(prime);
}
isPrimeNumber(7);
isPrimeNumber(8);
isPrimeNumber(81);
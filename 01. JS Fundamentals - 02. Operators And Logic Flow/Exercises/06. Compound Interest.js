function compoundInterest (array) {
    let p = array[0];
    let interestRate = array[1];
    let compoundingPeriod = array[2];
    let t = array[3];
    let i = interestRate / 100;
    let n = 12 / compoundingPeriod;
    let compoundingInterest = p*Math.pow((1+(i/n)),n*t);
    console.log(compoundingInterest);
}
compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);
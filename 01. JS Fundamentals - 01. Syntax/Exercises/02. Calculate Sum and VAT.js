function calculateSumAndVat(array) {
    let sum = 0;
    for (let num of array) {
        sum += Number(num);
    }
    let vat = sum * 0.2;
    let total = sum + vat;
    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + total);
}
calculateSumAndVat([1.20, 2.60, 3.50]);
calculateSumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);
function matchMultiplication (str) {
    let pattern = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;
    str=str.replace(pattern,(match,num1,num2) => Number(num1)*Number(num2));
    console.log(str);
}
matchMultiplication("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).");
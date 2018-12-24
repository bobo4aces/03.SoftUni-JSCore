function arithmephile (array) {
    let sum = Number.NEGATIVE_INFINITY;
    let s=0;
    for (let i=0; i<array.length; i++) {
        let number = Number(array[i]);
        if (1<=number && number < 10) {
            s = number;
            let currentIndex = i;
            let currentSum = 1;
            while (s > 0 && currentIndex < array.length) {
                currentSum *= Number(array[currentIndex+1]);
                currentIndex++;
                s--;
            }
            if (currentSum >= sum) {
                sum = currentSum;
            }
        }
    }
    console.log(sum);
}
arithmephile([
    "10",
    "20",
    "2",
    "30",
    "44",
    "3",
    "56",
    "20",
    "24"
]);
arithmephile([
    "100",
    "200",
    "2",
    "3",
    "2",
    "3",
    "2",
    "1",
    "1"
]);
arithmephile(["-1"]);
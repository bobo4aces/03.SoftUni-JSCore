function sumIncomeOfTowns (arr) {
    let townsWithIncomes = {};
    for (let i=0; i < arr.length; i+=2) {
        let currentTown = arr[i];
        let currentIncome = Number(arr[i+1]);
        if (townsWithIncomes[currentTown]===undefined) {
            townsWithIncomes[currentTown]=currentIncome;
        } else {
            townsWithIncomes[currentTown]+=currentIncome;
        }
    }
    console.log(JSON.stringify(townsWithIncomes));
}
sumIncomeOfTowns([
    "Sofia",
    "20",
    "Varna",
    "3",
    "Sofia",
    "5",
    "Varna",
    "4"
]);
sumIncomeOfTowns([
    "Sofia",
    "20",
    "Varna",
    "3",
    "sofia",
    "5",
    "varna",
    "4"
]);
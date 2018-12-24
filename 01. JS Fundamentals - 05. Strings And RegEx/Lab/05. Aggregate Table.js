function aggregateTable(array) {
    let towns = [];
    let totalIncome = 0;
    for (let i = 0; i < array.length; i++) {
        let townData = array[i].split("|");
        towns.push(townData[1].trim());
        totalIncome+=Number(townData[2].trim());
    }
    console.log(towns.join(", "));
    console.log(totalIncome);
}
aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);
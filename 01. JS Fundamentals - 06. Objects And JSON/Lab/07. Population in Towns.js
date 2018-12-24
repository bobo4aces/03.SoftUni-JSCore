function countPopulationInTowns (array) {
    let townAndPopulation = new Map();
    for (let i=0; i<array.length; i++) {
        let [town, population] = array[i].split(/\s<->\s/g);
        if (townAndPopulation.has(town)) {
            townAndPopulation.set(town,townAndPopulation.get(town)+Number(population));
        } else {
            townAndPopulation.set(town,Number(population));
        }
    }
    for (let [town, sum] of townAndPopulation) {
        console.log(`${town} : ${sum}`);
    }
}
countPopulationInTowns([
"Sofia <-> 1200000",
"Montana <-> 20000",
"New York <-> 10000000",
"Washington <-> 2345000",
"Las Vegas <-> 1000000"
]);
countPopulationInTowns([
"Istanbul <-> 100000",
"Honk Kong <-> 2100004",
"Jerusalem <-> 2352344",
"Mexico City <-> 23401925",
"Istanbul <-> 1000"
]);
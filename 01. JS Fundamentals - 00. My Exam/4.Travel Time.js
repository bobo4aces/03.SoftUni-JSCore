function travelTime (arr) {
    let countries = new Map();
    for (let input of arr) {
        let [country,town,cost] = input.split(">").map(e=>e.trim()).filter(w=>w!=="");
        cost=Number(cost);
        if (town[0]!==town[0].toUpperCase()) {
            let firstChar = town[0];
            town=town.replace(firstChar,firstChar.toUpperCase());
        }
        if (!countries.has(country)) {
            countries.set(country,new Map());
        }
        if (!countries.get(country).has(town)) {
            countries.get(country).set(town,cost);
        } else {
            if (countries.get(country).get(town)>cost) {
                countries.get(country).set(town,cost);
            }
        }
    }
    let sortedKeys = [...countries.entries()].sort((a,b) => {
        let firstCountryName = a[0];
        let secondCountryName = b[0];
        return firstCountryName.localeCompare(secondCountryName);
    });
    for (let [country, townMap] of sortedKeys) {
        let sortedTowns = [...townMap.entries()].sort((a,b) => {
            let firstTownCosts = a[1];
            let secondTownCosts = b[1];
            return firstTownCosts-secondTownCosts;
        });
        let output="";
        output+=country+" ->";
        for (let [town,cost] of sortedTowns) {
            output+=` ${town} -> ${cost}`
        }
        console.log(output);
    }

}
travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
);
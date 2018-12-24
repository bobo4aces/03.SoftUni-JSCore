function vladkoNotebook(array) {
    let opponents = new Map();
    for (let element of array) {
        let info = element.split("\|");
        let colour = info[0];
        let name = "";
        if (info[1]==="name") {
            name = info[2];
        }
        let age = 0;
        if (info[1]==="age") {
            age = info[2]
        }
        let opponent = "";
        let win = 0;
        let lose = 0;
        if (info[1]==="win") {
            opponent = info[2];
            win=1;
        } else if (info[1]==="loss") {
            opponent = info[2];
            lose=1;
        }

        if (!opponents.has(colour)) {
            opponents.set(colour,{age: 0, name: "", opponents: [], wins: 0, loses: 0, rank: 0});
        }
        if (opponents.get(colour).age===0&&age!==0) {
            opponents.get(colour).age=age;
        }
        if (opponents.get(colour).name===""&&name!=="") {
            opponents.get(colour).name=name;
        }
        if (win===1) {
            opponents.get(colour).wins+=1;
        }
        if (lose===1) {
            opponents.get(colour).loses+=1;
        }
        if (opponent!=="") {
            opponents.get(colour).opponents.push(opponent);
        }
    }
    let ranks = new Map();
    for (let colour of opponents.keys()) {
        let currentName = opponents.get(colour).name;
        if (currentName==="") {
            continue;
        }
        let currentWins = opponents.get(colour).wins;
        let currentLoses = opponents.get(colour).loses;
        let rank = (currentWins+1)/(currentLoses+1);
        ranks.set(currentName,rank.toFixed(2));
        opponents.get(colour).opponents.sort();
    }
    let result = [];
    let sortedColours = Array.from(opponents.keys()).sort();
    for (let colour of sortedColours) {
        delete opponents.get(colour).wins;
        delete opponents.get(colour).loses;
        let currentName = opponents.get(colour).name;
        let currentAge = opponents.get(colour).age;
        opponents.get(colour).rank = ranks.get(currentName);
        if (currentName===""||currentAge===0) {
            opponents.delete(colour);
        } else {
            result.push(`"${colour}":${JSON.stringify(opponents.get(colour))}`);
        }
    }
    console.log("{"+result.join(",")+"}");
}
vladkoNotebook([
    "purple|age|99",
    "red|age|44",
    "blue|win|pesho",
    "blue|win|mariya",
    "purple|loss|Kiko",
    "purple|loss|Kiko",
    "purple|loss|Kiko",
    "purple|loss|Yana",
    "purple|loss|Yana",
    "purple|loss|Manov",
    "purple|loss|Manov",
    "red|name|gosho",
    "blue|win|Vladko",
    "purple|loss|Yana",
    "purple|name|VladoKaramfilov",
    "blue|age|21",
    "blue|loss|Pesho",
    "green|age|99",
    "green|loss|Kiko",
    "green|loss|Kiko",
    "green|loss|Kiko",
    "green|loss|Yana",
    "green|loss|Yana",
    "green|loss|Manov",
    "green|loss|Manov",
    "green|loss|Yana",
    "green|name|VladoKaramfilov",
]);
function gameOfEpicness (kingdomsArray, fightsMatrix) {
    let kingdoms = new Map();
    for (let i=0; i<kingdomsArray.length; i++) {
        if (!kingdoms.has(kingdomsArray[i].kingdom)) {
            kingdoms.set(kingdomsArray[i].kingdom,new Map());
        }
        if (!kingdoms.get(kingdomsArray[i].kingdom).has(kingdomsArray[i].general)) {
            kingdoms.get(kingdomsArray[i].kingdom).set(kingdomsArray[i].general,0);
        }
        let currentArmy = Number(kingdoms.get(kingdomsArray[i].kingdom).get(kingdomsArray[i].general));
        kingdoms.get(kingdomsArray[i].kingdom).set(kingdomsArray[i].general,currentArmy+kingdomsArray[i].army);
    }
    let battles = new Map();
    for (let i=0; i<fightsMatrix.length; i++) {
        if (fightsMatrix[i].length!==4) {
            continue;
        }
        let [attackingKingdom,attackingGeneral,defendingKingdom,defendingGeneral] = fightsMatrix[i];
        if (!kingdoms.has(attackingKingdom)||!kingdoms.has(defendingKingdom)) {
            continue;
        }
        if (!kingdoms.get(attackingKingdom).has(attackingGeneral)||!kingdoms.get(defendingKingdom).has(defendingGeneral)) {
            continue;
        }
        let attackingArmy = kingdoms.get(attackingKingdom).get(attackingGeneral);
        let defendingArmy = kingdoms.get(defendingKingdom).get(defendingGeneral);
        if (attackingKingdom!==defendingKingdom) {
            if (!battles.has(attackingKingdom)) {
                battles.set(attackingKingdom, new Map());
            }

            if (!battles.get(attackingKingdom).has(attackingGeneral)) {
                battles.get(attackingKingdom).set(attackingGeneral, {wins: 0, loses: 0});
            }
            if (!battles.has(defendingKingdom)) {
                battles.set(defendingKingdom, new Map());
            }
            if (!battles.get(defendingKingdom).has(defendingGeneral)) {
                battles.get(defendingKingdom).set(defendingGeneral, {wins: 0, loses: 0});
            }
            if (attackingArmy > defendingArmy) {
                battles.get(attackingKingdom).get(attackingGeneral).wins++;
                kingdoms.get(attackingKingdom).set(attackingGeneral,Math.floor(attackingArmy+(attackingArmy*0.10)));
                battles.get(defendingKingdom).get(defendingGeneral).loses++;
                kingdoms.get(defendingKingdom).set(defendingGeneral,Math.floor(defendingArmy-(defendingArmy*0.10)));
            } else if (defendingArmy > attackingArmy) {
                battles.get(defendingKingdom).get(defendingGeneral).wins++;
                kingdoms.get(defendingKingdom).set(defendingGeneral, Math.floor(defendingArmy + (defendingArmy * 0.10)));
                battles.get(attackingKingdom).get(attackingGeneral).loses++;
                kingdoms.get(attackingKingdom).set(attackingGeneral, Math.floor(attackingArmy - (attackingArmy * 0.10)));
            }
        }
    }
    let sortedBattles = [...battles.entries()].sort(function (firstEntry, secondEntry) {
        let firstEntryWins = [...firstEntry[1]][0][1].wins;
        let secondEntryWins = [...secondEntry[1]][0][1].wins;
        
        let firstEntryLoses = [...firstEntry[1]][0][1].loses;
        let secondEntryLoses = [...secondEntry[1]][0][1].loses;

        let firstEntryName = firstEntry[0];
        let secondEntryName = secondEntry[0];
        let difference = secondEntryWins-firstEntryWins;
        if (difference===0) {
            difference = firstEntryLoses-secondEntryLoses;
            if (difference===0) {
                difference = firstEntryName.localeCompare(secondEntryName);
            }
        }
        return difference;
    });

    let winningKingdom = [...sortedBattles][0];
    console.log(`Winner: ${winningKingdom[0]}`);

    let sortedGenerals = [...winningKingdom[1]].sort(function(firstEntry, secondEntry) {
        let firstEntryWins = firstEntry[1].wins;
        let firstEntryLoses = firstEntry[1].loses;
        let secondEntryWins = secondEntry[1].wins;
        let secondEntryLoses = secondEntry[1].loses;
        let firstEntryArmy = kingdoms.get(winningKingdom[0]).get(firstEntry[0]);
        let secondEntryArmy = kingdoms.get(winningKingdom[0]).get(secondEntry[0]);
        return secondEntryArmy-firstEntryArmy;
    });
    for (let [general, winsloses] of sortedGenerals) {
        console.log(`/\\general: ${general}`);
        console.log(`---army: ${kingdoms.get(winningKingdom[0]).get(general)}`);
        console.log(`---wins: ${winsloses.wins}`);
        console.log(`---losses: ${winsloses.loses}`);

    }
}
//17:10-
gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);
//gameOfEpicness([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
//        { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
//        { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
//    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]
//);
//gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
//        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
//        { kingdom: "Stonegate", general: "Doran", army: 70000 },
//        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
//        { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
//    [ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
//        ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
//);
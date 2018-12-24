function airPollution (sofiaMap, forcesArray) {
    let sofiaMapMatrix = [];
    for (let i=0; i<sofiaMap.length; i++) {
        sofiaMapMatrix.push(sofiaMap[i].split(" ").map(Number));
    }
    for (let forceData of forcesArray) {
        let [force, particlePollution] = forceData.split(" ");
        particlePollution=Number(particlePollution);
        if (force === "breeze") {
            for (let i=0; i<5; i++) {
                sofiaMapMatrix[particlePollution][i]-=15;
                if (sofiaMapMatrix[particlePollution][i]<0) {
                    sofiaMapMatrix[particlePollution][i]=0;
                }
            }
        } else if (force === "gale") {
            for (let i=0; i<5; i++) {
                sofiaMapMatrix[i][particlePollution]-=20;
                if (sofiaMapMatrix[i][particlePollution]<0) {
                    sofiaMapMatrix[i][particlePollution]=0;
                }
            }
        } else if (force === "smog") {
            for (let row=0; row<sofiaMapMatrix.length; row++) {
                for (let col=0; col<sofiaMapMatrix[row].length; col++) {
                    sofiaMapMatrix[row][col]+=particlePollution;
                }
            }
        }
    }
    let pollutedAreas = [];
    for (let row=0; row<sofiaMapMatrix.length; row++) {
        for (let col=0; col<sofiaMapMatrix[row].length; col++) {
            if (sofiaMapMatrix[row][col]>=50) {
                pollutedAreas.push(`[${row}-${col}]`)
            }
        }
    }
    if (pollutedAreas.length>=1) {
        console.log(`Polluted areas: ${pollutedAreas.join(", ")}`);
    } else {
        console.log("No polluted areas");
    }
}
//09:00 - 09:55
airPollution([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);
airPollution([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]
);
airPollution([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
);
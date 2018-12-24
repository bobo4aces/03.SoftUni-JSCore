function galacticElections (ballotObjectsArray) {
    let ballotObjects = new Map();
    for (let ballotObject of ballotObjectsArray) {
        if (!ballotObjects.has(ballotObject["system"])) {
            ballotObjects.set(ballotObject["system"], new Map());
        }
        let currentVotes = ballotObjects.get(ballotObject["system"]).get(ballotObject["candidate"]);
        if (currentVotes===undefined) {
            ballotObjects.get(ballotObject["system"]).set(ballotObject["candidate"],ballotObject["votes"]);
        } else {
            ballotObjects.get(ballotObject["system"]).set(ballotObject["candidate"],ballotObject["votes"]+currentVotes);
        }
    }
    let results = new Map();
    [...ballotObjects]
        .map(([system, candidate])=>[system, [...candidate].sort((a,b)=>b[1]-a[1]).reduce((a,b)=>[a[0],a[1]+b[1]])])
        .map(([system, [candidate, votes]])=>[candidate, system, votes])
        .forEach(([candidate, system, votes], i, arr)=>results.has(candidate) ? results.get(candidate).set(system, votes) : results.set(candidate,new Map([[system, votes]])));

    let ranking = [...results]
        .map(([candidate, system])=>[candidate, [...system].map(([system, votes])=>votes).reduce((a,b)=>a+b)])
        .sort(([candidate1, votes1],[candidate2, votes2])=>votes2-votes1);

    let total = ranking
        .map(([candidate, votes])=>votes).reduce((a,b)=>a+b);

    if (ranking[0][1] > total/2) {
        console.log(`${ranking[0][0]} wins with ${ranking[0][1]} votes`);
        if (ranking.length>1) {
            let runnerUp = ranking[1][0];
            console.log(`Runner up: ${runnerUp}`);
            [...results.get(runnerUp)].sort(([system1, votes1],[system2, votes2])=>votes2-votes1).forEach(system=>console.log(`${system[0]}: ${system[1]}`));
        } else {
            console.log(`${ranking[0][0]} wins unopposed!`);
        }
    } else {
        console.log(`Runoff between ${ranking[0][0]} with ${Math.floor(ranking[0][1]/total*100)}% and ${ranking[1][0]} with ${Math.floor(ranking[1][1]/total*100)}%`);
    }
}
galacticElections([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]
);
console.log("1---------------------------");
galacticElections([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
    { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
    { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
    { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
    { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
    { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]
);
console.log("2---------------------------");
galacticElections([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
    { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
    { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ]
);
console.log("3---------------------------");
function rollandGarros(arr) {
    let players = new Map();
    for (let line of arr) {
        let [player1,player2,setsData]=line.split(/vs.|:/g).map(e=>e.trim()).map(e=>e.replace(/\s+/g," ")).filter(w=>w!=="");
        let sets = setsData.split(" ");
        if (!players.has(player1)) {
            players.set(player1,{name:player1, matchesWon:0, matchesLost:0, setsWon:0,
                setsLost:0, gamesWon:0, gamesLost:0})
        }
        if (!players.has(player2)) {
            players.set(player2,{name:player1, matchesWon:0, matchesLost:0, setsWon:0,
                setsLost:0, gamesWon:0, gamesLost:0})
        }
        let player1SetsWon=0;
        let player2SetsWon=0;
        let player1GamesWon=0;
        let player2GamesWon=0;
        for (let set of sets) {
            let points = set.split("-");
            if (Number(points[0])>Number(points[1])) {
                players.get(player1).gamesWon+=Number(points[0]);
                players.get(player1).gamesLost+=Number(points[1]);
                players.get(player2).gamesWon+=Number(points[1]);
                players.get(player2).gamesLost+=Number(points[0]);
                player1SetsWon++;
                players.get(player1).setsWon++;
                players.get(player2).setsLost++;
            } else {
                players.get(player1).gamesWon+=Number(points[0]);
                players.get(player1).gamesLost+=Number(points[1]);
                players.get(player2).gamesWon+=Number(points[1]);
                players.get(player2).gamesLost+=Number(points[0]);
                player2SetsWon++;
                players.get(player2).setsWon++;
                players.get(player1).setsLost++;
            }
        }
        if (player1SetsWon>player2SetsWon) {
            players.get(player1).matchesWon++;
            players.get(player2).matchesLost++;
        } else {
            players.get(player2).matchesWon++;
            players.get(player1).matchesLost++;
        }
    }
    let sorted=[...players].sort((a,b)=>{
        let diff = b[1].matchesWon-a[1].matchesWon;
        if (diff===0) {
            diff = b[1].setsWon-a[1].setsWon;
            if (diff===0) {
                diff = b[1].gamesWon-a[1].gamesWon;
                if (diff===0) {
                    return a[1].name.localeCompare(b[1].name);
                }
                return diff;
            }
            return diff;
        }
        return diff;
    });
    let sortedObj=[];
    for (let key of sorted) {
        key[1].name=key[0];
        sortedObj.push(key[1]);
    }
    console.log(JSON.stringify(sortedObj));
}
rollandGarros([
"Novak Djokovic vs. Roger Federer : 6-3 6-3",
"Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3",
"Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7",
"Andy Murray vs. David     Ferrer : 6-4 7-6",
"Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7",
"Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2",
"Pete Sampras vs. Andre Agassi : 2-1",
"Boris Beckervs.Andre        Agassi:2-1"
]);
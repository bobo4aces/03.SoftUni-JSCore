function fleaRacing (arr) {
    let jumps = Number(arr.shift());
    let trackLength = Number(arr.shift());
    let race = [];
    let winner = "";
    for (let element of arr) {
        let [name, jumpDistance] = element.split(",").map(e=>e.trim()).filter(w=>w!=="");
        jumpDistance=Number(jumpDistance);
        race.push({name:name,jumpDistance:jumpDistance,totalDistance:jumpDistance*jumps,currentDistance:0});
    }
    for (let i=0;i<jumps; i++) {
        for (let flea of race) {
            if (winner==="") {
                flea.currentDistance+=flea.jumpDistance;
                if (flea.currentDistance>=trackLength&&flea.totalDistance>=trackLength) {
                    winner=flea.name;
                }
            }

        }
    }
    let furthestFlea = [];
    let maxDistance=0;
    for (let flea of race) {
        if (maxDistance<=flea.totalDistance) {
            maxDistance=flea.totalDistance;
            furthestFlea.push(flea.name);
        }
    }
    if (winner==="") {
        winner=furthestFlea.pop();
    }
    for (let entry of Object.entries(race)) {
        let currentPosition = entry[winner]
        if (entry[1].name===winner);
    }
    console.log(race);
    console.log(winner);
}
fleaRacing([
    "10",
    "19",
    "angel, 9",
    "Boris, 10",
    "Georgi, 3",
    "Dimitar, 7"
]);
fleaRacing([
    "3",
    "5",
    "cura, 1",
    "Pepi, 1",
    "UlTraFlea, 1",
    "BOIKO, 1"
]);
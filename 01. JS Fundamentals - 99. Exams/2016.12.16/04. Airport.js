function airportStatistic(airplaneTraffic) {
    let planesLeft = new Set();
    let airport = new Map();
    for (let airplanes of airplaneTraffic) {
        let [planeID, town, passengersCount, action] = airplanes.split(" ");
        passengersCount = Number(passengersCount);
        if (action==="land") {
            if (planesLeft.has(planeID)) {
                continue;
            } else {
                planesLeft.add(planeID);
            }
        } else if (action==="depart") {
            if (!planesLeft.has(planeID)) {
                continue;
            } else {
                planesLeft.delete(planeID);
            }
        }
        if (!airport.has(town)) {
            airport.set(town,{planes: [], arrivals: 0, departures: 0});
        }
        if (!airport.get(town).planes.includes(planeID)) {
            airport.get(town).planes.push(planeID);
        }
        if (action==="land") {
            airport.get(town).arrivals +=passengersCount;
        } else {
            airport.get(town).departures +=passengersCount;
        }
    }
    console.log("Planes left:");
    [...planesLeft].sort((p1,p2)=>p1.localeCompare(p2)).forEach(p=>console.log(`- ${p}`));
    [...airport].sort((t1,t2)=>{
        if (t1[1].arrivals<t2[1].arrivals) {
            return 1;
        }
        if (t1[1].arrivals>t2[1].arrivals) {
            return -1;
        }
        return t1[0].localeCompare(t2[0]);
    }).forEach(logData);

    function logData(town) {
        console.log(town[0]);
        console.log(`Arrivals: ${town[1].arrivals}`);
        console.log(`Departures: ${town[1].departures}`);
        console.log(`Planes:`);
        town[1].planes.sort((p1,p2)=>p1.localeCompare(p2)).forEach(p=>console.log(`-- ${p}`));
    }
}
//airportStatistic([ "Boeing474 Madrid 300 land", "AirForceOne WashingtonDC 178 land",
//    "Airbus London 265 depart", "ATR72 WashingtonDC 272 land", "ATR72 Madrid 135 depart"
//]);
//airportStatistic([ "Airbus Paris 356 land",
//    "Airbus London 321 land", "Airbus Paris 213 depart", "Airbus Ljubljana 250 land"
//]);
airportStatistic(["RTA72 London -10 land",
    "RTA#72 Brussels -110 depart",
    "RTA7!2 Warshaw 350 land",
    "RTA72 Riga -201 depart",
    "rta72 riga -13 land",
    "rta Riga -200 depart"])
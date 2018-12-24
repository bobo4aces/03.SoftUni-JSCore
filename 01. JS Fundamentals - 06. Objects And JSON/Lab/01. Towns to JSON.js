function townsToJson (array) {
    let towns = [];
    for (let town of array.slice(1)) {
        let [townName, latitude, longitude] = town.split(/\s*\|\s*/g).filter(e=>e!=="");
        let townObject = {Town: townName, Latitude: Number(latitude), Longitude: Number(longitude)};
        towns.push(townObject);
    }
    console.log(JSON.stringify(towns));
}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
townsToJson(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);
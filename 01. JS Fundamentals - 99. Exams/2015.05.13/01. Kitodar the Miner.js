function kitodarTheMiner (arr) {
    let silver = 0;
    let gold = 0;
    let diamonds = 0;
    for (let line of arr) {

        let [mineInfo, oreWithQuantity] = line.split(" - ").map(e=>e.trim()).filter(w=>w!=="");
        if (oreWithQuantity===undefined) {
            continue;
        }
        let [mine, mineName] = mineInfo.split(" ").map(e=>e.trim()).filter(w=>w!=="");
        if (mine!=="mine") {
            continue;
        }
        let [ore,quantity] = oreWithQuantity.split(": ").map(e=>e.trim()).filter(w=>w!=="");
        quantity=Number(quantity);
        if (Number.isNaN(quantity)) {
            continue;
        }
        if (ore==="silver") {
            silver+=+quantity;
        } else if (ore==="gold") {
            gold+=+quantity;
        } else if (ore==="diamonds") {
            diamonds+=+quantity;
        }
    }
    console.log(`*Silver: ${silver}`);
    console.log(`*Gold: ${gold}`);
    console.log(`*Diamonds: ${diamonds}`);
}
kitodarTheMiner([
"mine bobovDol - gold: 10 gold: 20",
"mine medenRudnik - silver: 22",
"mine chernoMore - shrimps : 24",
"gold: 50"
]);
kitodarTheMiner([
"mine bobovdol - gold: 10",
"mine - diamonds: 5",
"mine colas - wood: 10",
"mine myMine - silver:  14",
"mine silver:14 - silver: 14"
]);
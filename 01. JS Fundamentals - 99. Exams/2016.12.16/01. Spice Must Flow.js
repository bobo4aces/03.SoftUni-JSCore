function spiceMustFlow (startingYield) {
    let yields = Number(startingYield);
    let days = 0;
    let spice = 0;
    while (yields>99) {
        days++;
        spice+=yields;
        spice-=26;
        yields-=10;
    }
    if (spice>=26) {
        spice-=26;
    } else {
        spice=0;
    }
    console.log(days);
    console.log(spice);
}
spiceMustFlow(26);
spiceMustFlow(450);
spiceMustFlow(200);
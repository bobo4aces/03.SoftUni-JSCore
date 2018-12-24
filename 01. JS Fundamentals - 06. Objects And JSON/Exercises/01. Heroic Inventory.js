function heroicInventory (array) {
    let herosInfo = [];
    for (let i=0; i<array.length; i++) {
        let heroData = array[i].split(/\s\/\s/g);
        let heroName = heroData[0];
        let heroLevel = Number(heroData[1]);
        let heroItems = [];
        if (heroData.length > 2) {
            heroItems = heroData[2].split(", ");
        }
        let heroObject = {"name": heroName, "level": heroLevel, "items": heroItems};
        herosInfo.push(heroObject);
    }
    console.log(JSON.stringify(herosInfo));
}
heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);
heroicInventory([
    "Jake / 1000 / Gauss, HolidayGrenade"
]);
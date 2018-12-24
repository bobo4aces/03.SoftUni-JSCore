function cappyJuice (array) {
    let bottles = new Map();
    let juiceAndQuantity = new Map();
    for (let i=0; i<array.length; i++) {
        let [juiceName, juiceQuantity] = array[i].split(/\s=>\s/g);
        juiceQuantity = Number(juiceQuantity);
        if (!juiceAndQuantity.has(juiceName)) {
            juiceAndQuantity.set(juiceName,juiceQuantity);
        } else {
            juiceAndQuantity.set(juiceName,juiceAndQuantity.get(juiceName)+juiceQuantity);
        }
        let currentBottles = Math.floor(juiceAndQuantity.get(juiceName)/1000);
        if (currentBottles>=1) {
            bottles.set(juiceName,currentBottles);
        }
    }
    for (let juice of bottles) {
        console.log(`${juice[0]} => ${juice[1]}`);
    }
}
cappyJuice([
    "Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549"
]);
cappyJuice([
    "Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789"
]);
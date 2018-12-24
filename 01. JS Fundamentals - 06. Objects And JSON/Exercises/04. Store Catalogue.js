function storeCatalogue (array) {
    let catalogue = new Map();
    for (let i=0; i<array.length; i++) {
        let [productName, productPrice] = array[i].split(/\s:\s/g);
        let firstLetter = productName[0];
        if (!catalogue.has(firstLetter)) {
            catalogue.set(firstLetter,[]);
        }
        catalogue.get(firstLetter).push(`${productName}: ${productPrice}`);
    }
    let sortedKeys = Array.from(catalogue.keys()).sort();
    for (let letter of sortedKeys) {
        console.log(letter);
        for (let product of catalogue.get(letter).sort()) {
            console.log("  "+product);
        }
    }
}
storeCatalogue([
"Appricot : 20.4",
"Fridge : 1500",
"TV : 1499",
"Deodorant : 10",
"Boiler : 300",
"Apple : 1.25",
"Anti-Bug Spray : 15",
"T-Shirt : 10"
]);
storeCatalogue([
"Banana : 2",
"Rubic's Cube : 5",
"Raspberry P : 4999",
"Rolex : 100000",
"Rollon : 10",
"Rali Car : 2000000",
"Pesho : 0.000001",
"Barrel : 10"
]);
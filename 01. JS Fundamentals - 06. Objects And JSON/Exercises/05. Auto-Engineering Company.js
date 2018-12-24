function autoEngineeringCompany (cars) {
    let makeModelCount = new Map();
    for (let car of cars) {
        let [make, model, producedCars] = car.split(/\s\|\s/g);
        producedCars = Number(producedCars);
        if (!makeModelCount.has(make)) {
            makeModelCount.set(make,new Map());
        }
        let oldProducedCars = makeModelCount.get(make).get(model);
        if (oldProducedCars===undefined) {
            makeModelCount.get(make).set(model,producedCars);
        } else {
            makeModelCount.get(make).set(model,oldProducedCars+producedCars);
        }
    }
    for (let make of makeModelCount.keys()) {
        console.log(make);
        for (let [model, producedCars] of makeModelCount.get(make)) {
            console.log(`###${model} -> ${producedCars}`)
        }
    }
}
autoEngineeringCompany([
    "Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10"
]);
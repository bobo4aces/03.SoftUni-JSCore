function carFactory(obj) {
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };
    let newCar = {};
    newCar.model=obj.model;
    if (0<=obj.power&&obj.power<=105) {
        newCar.engine=smallEngine;
    } else if (105<obj.power&&obj.power<=160) {
        newCar.engine=normalEngine;
    } else {
        newCar.engine=monsterEngine;
    }
    newCar.carriage={type: obj.carriage,color: obj.color};
    let wheels = [];
    for (let i=0; i<4; i++) {
        if (obj.wheelsize%2===0) {
            wheels.push(obj.wheelsize-1);
        } else {
            wheels.push(obj.wheelsize);
        }
    }
    newCar.wheels = wheels;
    return newCar;
}
console.log(carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));
console.log(carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));
function radioCrystals (array) {
    let cut = thickness => thickness/4;
    let lap = thickness => thickness-thickness*0.20;
    let grind = thickness => thickness-20;
    let etch = thickness => thickness-2;
    let xRay = thickness => thickness+1;
    let transportingAndWashing = thickness => Math.floor(thickness);
    let targetThickness = array[0];
    for (let i=1; i<array.length; i++) {
        let currentCrystalThickness = array[i];
        console.log(`Processing chunk ${currentCrystalThickness} microns`);
        let counter = 0;
        while (cut(currentCrystalThickness)>=targetThickness-1) {
            currentCrystalThickness = cut(currentCrystalThickness);
            counter++;
        }
        if (counter>=1) {
            console.log(`Cut x${counter}`);
            currentCrystalThickness = transportingAndWashing(currentCrystalThickness);
            console.log(`Transporting and washing`);
        }

        counter = 0;
        while (lap(currentCrystalThickness)>=targetThickness-1) {
            currentCrystalThickness = lap(currentCrystalThickness);
            counter++;
        }
        if (counter>=1) {
            console.log(`Lap x${counter}`);
            currentCrystalThickness = transportingAndWashing(currentCrystalThickness);
            console.log(`Transporting and washing`);
        }

        counter = 0;
        while (grind(currentCrystalThickness)>=targetThickness-1) {
            currentCrystalThickness = grind(currentCrystalThickness);
            counter++;
        }
        if (counter>=1) {
            console.log(`Grind x${counter}`);
            currentCrystalThickness = transportingAndWashing(currentCrystalThickness);
            console.log(`Transporting and washing`);
        }

        counter = 0;
        while (etch(currentCrystalThickness)>=targetThickness-1) {
            currentCrystalThickness = etch(currentCrystalThickness);
            counter++;
        }
        if (counter>=1) {
            console.log(`Etch x${counter}`);
            currentCrystalThickness = transportingAndWashing(currentCrystalThickness);
            console.log(`Transporting and washing`);
        }
        if (currentCrystalThickness!==targetThickness) {
            currentCrystalThickness=xRay(currentCrystalThickness);
            console.log("X-ray x1");
        }
        console.log(`Finished crystal ${currentCrystalThickness} microns`);
    }
}
radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);
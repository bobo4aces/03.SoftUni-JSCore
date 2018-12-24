function convertImperialUnits (number) {
    let foot = Math.floor(number / 12);
    let inches = number % 12;
    console.log(`${foot}'-${inches}"`);
}
convertImperialUnits(36);
convertImperialUnits(55);
convertImperialUnits(11);
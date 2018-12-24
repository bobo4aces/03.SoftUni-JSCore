function medenkaWars (medenkaArray) {
    let vitkor = 0;
    let vitkorDamage = 0;
    let naskor = 0;
    let naskorDamage = 0;
    for (let line of medenkaArray) {
        let [count, colour, medenkas] = line.split(" ").map(e=>e.trim()).filter(w=>w!=="");
        count = Number(count);
        if (medenkas!=="medenkas") {
            continue;
        }
        if (colour==="white") {
            vitkor++;
            if (vitkor%2===0&&vitkor!==2) {
                vitkorDamage+=count*60*2.75;
            } else {
                vitkorDamage+=count*60;
            }

        } else if (colour==="dark") {
            naskor++;
            if (naskor%5===0) {
                naskorDamage+=count*60*4.5;
            } else {
                naskorDamage+=count*60;
            }

        }
    }
    if (vitkorDamage>=naskorDamage) {
        console.log(`Winner - Vitkor`);
        console.log(`Damage - ${vitkorDamage}`);
    } else {
        console.log(`Winner - Naskor`);
        console.log(`Damage - ${naskorDamage}`);
    }
}
medenkaWars([
    "5 white medenkas",
    "5 dark medenkas",
    "4 white medenkas"

]);
medenkaWars([
    "2 dark medenkas",
    "1 white medenkas",
    "2 dark medenkas",
    "2 dark medenkas",
    "15 white medenkas",
    "2 dark medenkas",
    "2 dark medenkas"
]);
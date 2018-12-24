function pyramidOfDjoser (base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli=0;
    let steps = 1;
    while (base>2) {
        stone+=((base-2)**2)*increment;
        if (steps%5!==0) {
            marble+=((base*4)-4)*increment;
        } else {
            lapisLazuli+=((base*4)-4)*increment;
        }
        if (base<=2) {
            gold = base*base*increment;
        }
        steps++;
        base-=2;
    }
    let gold = (base**2)*increment;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps*increment)}`);
}
pyramidOfDjoser(11,
    1
);
pyramidOfDjoser(11,
    0.75
);
pyramidOfDjoser(12,
    1
);
pyramidOfDjoser(23,
    0.5
);
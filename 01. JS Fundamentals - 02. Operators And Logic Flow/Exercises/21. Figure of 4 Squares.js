function printFigureOf4Squares (number) {
    let n = Number(number);
    let figure = "";
    for (let i=0; i<n; i++) {
        if (n%2 === 0 && i===n-2) {
            continue;
        }
        for (let j=0; j<n*2-1; j++) {
            if (j===0 || j===n-1 || j=== n*2-2) {
                if (i===0 || i===Math.ceil(n/2)-1 || i===n-1) {
                    figure+="+";
                } else {
                    figure+="|";
                }
            } else {
                if (i===0 || i===Math.ceil(n/2)-1 || i===n-1) {
                    figure+="-";
                } else {
                    figure+=" ";
                }
            }
        }
        figure+="\n";

    }
    console.log(figure);
}
printFigureOf4Squares(4);
printFigureOf4Squares(5);
printFigureOf4Squares(6);
printFigureOf4Squares(7);
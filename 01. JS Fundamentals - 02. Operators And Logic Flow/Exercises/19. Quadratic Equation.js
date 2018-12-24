function quadraticEquation (a1,b1,c1) {
    let a = Number(a1);
    let b = Number(b1);
    let c = Number(c1);
    let d = Math.pow(b,2) - 4 * a * c;
    let x1 = 0;
    let x2 = 0;
    if (d > 0) {
        x1 = (-b + Math.sqrt(d))/(2*a);
        x2 = (-b - Math.sqrt(d))/(2*a);
        console.log(Math.min(x1,x2));
        console.log(Math.max(x1,x2));
    } else if (d === 0) {
        x1 = -b/(2*a);
        console.log(x1);
    } else {
        console.log("No");
    }
}
quadraticEquation(
    6,
    11,
    -35
);
quadraticEquation(1,
    -12,
36

);
quadraticEquation(5,
2,
1
);
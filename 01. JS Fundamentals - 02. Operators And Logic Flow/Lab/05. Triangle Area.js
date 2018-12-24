function calculateTriangleArea(a, b, c) {
    let semiperimeter = (Number(a)+Number(b)+Number(c))/2;
    let area = Math.sqrt(semiperimeter * (semiperimeter-Number(a))*(semiperimeter-Number(b))*(semiperimeter-Number(c)));
    console.log(area);
}
calculateTriangleArea(2, 3.5, 4);
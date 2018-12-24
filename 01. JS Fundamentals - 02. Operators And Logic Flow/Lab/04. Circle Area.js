function calculateCircleArea (radius) {
    let area = Math.PI * radius * radius;
    console.log(area);
    area = Math.round(area*100)/100;
    console.log(area);
}
calculateCircleArea(5);
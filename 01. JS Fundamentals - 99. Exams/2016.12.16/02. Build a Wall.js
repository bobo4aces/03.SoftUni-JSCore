function buildAWall (array) {
    let initialHeightWall = array.map(Number);
    let wall = [];
    for (let i=0; i<initialHeightWall.length; i++) {
        wall[i]=[];
        while (initialHeightWall[i]<30){
            wall[i].push((initialHeightWall[i]++)+1);
        }
    }
    let concreteQuantity = 0;
    let concreteQuantityPerDay = [];
    for (let row=0; row<wall.length; row++) {
        for (let col=0; col<wall[row].length; col++) {
            if (concreteQuantityPerDay[col]!==undefined) {
                concreteQuantityPerDay[col]+=195;
                concreteQuantity+=195;
            } else {
                concreteQuantityPerDay[col]=195;
                concreteQuantity+=195;
            }
        }
    }
    let totalPesos = 1900*concreteQuantity;
    console.log(concreteQuantityPerDay.join(", "));
    console.log(`${totalPesos} pesos`);
}
buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);
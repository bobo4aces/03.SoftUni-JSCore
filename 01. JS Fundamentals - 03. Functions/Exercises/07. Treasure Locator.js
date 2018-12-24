function treasureLocator (array) {
    let tokelauIsland = getIslandCoordinates(8,0,9,0,8,1,9,1);
    let tuvaluIsland = getIslandCoordinates(1,1,3,1,1,3,3,3);
    let samoaIsland = getIslandCoordinates(5,3,7,3,5,6,7,6);
    let tongaIsland = getIslandCoordinates(0,6,2,6,0,8,2,8);
    let cookIsland = getIslandCoordinates(4,7,9,7,4,8,9,8);
    for (let i=0; i<array.length; i+=2) {
        let point = getPoint(array[i],array[i+1]);
        if (isInside(point,tokelauIsland)) {
            console.log("Tokelau");
        } else if (isInside(point,tuvaluIsland)) {
            console.log("Tuvalu");
        } else if (isInside(point,samoaIsland)) {
            console.log("Samoa");
        } else if (isInside(point,tongaIsland)) {
            console.log("Tonga");
        } else if (isInside(point,cookIsland)) {
            console.log("Cook");
        } else {
            console.log("On the bottom of the ocean");
        }
    }

    function getIslandCoordinates (x1,y1,x2,y2,x3,y3,x4,y4) {
        return {X1:x1,Y1:y1,X2:x2,Y2:y2,X3:x3,Y3:y3,X4:x4,Y4:y4};
    }
    function getPoint(x,y) {
        return {X:x, Y:y};
    }
    function isInside (point, island) {
        let isOnLeftUpperSide = point.X>=island.X1&&point.Y>=island.Y1;
        let isOnRightUpperSide = point.X<=island.X2&&point.Y>=island.Y2;
        let isOnLeftLowerSide = point.X>=island.X3&&point.Y<=island.Y3;
        let isOnRightLowerSide = point.X<=island.X4&&point.Y<=island.Y4;
        return isOnLeftUpperSide&&isOnRightUpperSide&&isOnLeftLowerSide&&isOnRightLowerSide;
    }
}
treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6, 4]);
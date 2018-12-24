function isInsideVolume (array) {
    for (let i=0; i<array.length; i+=3) {
        let x = array[i];
        let y = array[i+1];
        let z = array[i+2];
        if (inVolume(x,y,z)) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }
    function inVolume (x,y,z) {
        return (10<=x&&x<=50) && (20<=y&&y<=80) && (15<=z&&z<=50);
    }
}
isInsideVolume([8, 20, 22]);
isInsideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);
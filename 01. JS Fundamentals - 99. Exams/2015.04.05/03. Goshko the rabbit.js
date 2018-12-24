function goshkoTheRabbit(arr) {
    let directions = arr.shift().split(",").map(e=>e.trim()).filter(w=>w!=="");
    let garden = [];
    for (let element of arr) {
        garden.push(element.split(",").map(e=>e.trim()).filter(w=>w!==""));
    }
    let carrots = /{!}/g;
    let cabbage = /{\*}/g;
    let lettuce = /{&}/g;
    let turnip = /{#}/g;
    let output = {"&": 0,"*": 0,"#": 0,"!": 0,"wall hits": 0};
    let passedCells=[];
    let currentRow=0;
    let currentCol=0;
    for (let direction of directions) {
        let isWallHit = false;
        if (direction.toLowerCase()==="right") {
            if (currentCol+1<garden[currentRow].length) {
                currentCol=currentCol+1;
            } else {
                isWallHit=true;
                output["wall hits"]+=1;
            }
        }
        if (direction.toLowerCase()==="left") {
            if (currentCol-1>=0) {
                currentCol=currentCol-1;
            } else {
                isWallHit=true;
                output["wall hits"]+=1;
            }
        }
        if (direction.toLowerCase()==="up") {
            if (currentRow-1>=0) {
                currentRow=currentRow-1;
            } else {
                isWallHit=true;
                output["wall hits"]+=1;
            }
        }
        if (direction.toLowerCase()==="down") {
            if (currentRow+1<garden.length) {
                currentRow=currentRow+1;
            } else {
                isWallHit=true;
                output["wall hits"]+=1;
            }
        }
        if (isWallHit) {
            continue;
        }
        let match;
        while (match=carrots.exec(garden[currentRow][currentCol])) {
            output["!"]+=1;
        }
        while (match=cabbage.exec(garden[currentRow][currentCol])) {
            output["*"]+=1;
        }
        while (match=lettuce.exec(garden[currentRow][currentCol])) {
            output["&"]+=1;
        }
        while (match=turnip.exec(garden[currentRow][currentCol])) {
            output["#"]+=1;
        }
        passedCells.push(garden[currentRow][currentCol]
            .replace(/{!}/g,"@")
            .replace(/{\*}/g,"@")
            .replace(/{&}/g,"@")
            .replace(/{#}/g,"@"))
    }
    console.log(JSON.stringify(output));
    if (passedCells.length>0) {
        console.log(passedCells.join("|"));
    } else {
        console.log("no");
    }
}
goshkoTheRabbit([
"right, up, up, down",
"asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj",
"tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip",
"poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne"
]);
goshkoTheRabbit([
    "up, right, left, down",
    "as{!}xnk"
]);
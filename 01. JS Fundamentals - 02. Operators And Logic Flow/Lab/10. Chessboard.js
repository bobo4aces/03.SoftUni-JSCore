function printChessBoard(number) {
    let html = "<div class=\"chessboard\">\n";
    let colour = "";
    for (let i=0; i<Number(number); i++) {
        html+="\t<div>\n";
        if (i%2===0) {
            colour = "black";
        } else {
            colour = "white";
        }
        for (let j=0; j<Number(number); j++) {
            html+=`\t\t<span class="${colour}"></span>\n`;
            if (colour === "black") {
                colour = "white";
            } else {
                colour = "black";
            }
        }
        html+="\t</div>\n";
    }
    html+="</div>\n";
    console.log(html);
}
printChessBoard(3);
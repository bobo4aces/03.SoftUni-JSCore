function playingCards(face, suit) {
    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = {
        S: "\u2660",
        H: "\u2665",
        D: "\u2666",
        C: "\u2663"
    };
    if (faces.indexOf(face)<0) {
        throw new Error ("Invalid card face: " + face);
    }
    if (!suits.hasOwnProperty(suit)) {
        throw new Error ("Invalid card suit: " + suit);
    }
    let card = {
        face: face,
        suit: suits[suit],
        toString: ()=>{return face.valueOf()+suits[suit].valueOf()}
    };
    return card;
}
console.log('' + playingCards('A', 'S'));
console.log('' + playingCards('10', 'H'));
console.log('' + playingCards('1', 'C'));
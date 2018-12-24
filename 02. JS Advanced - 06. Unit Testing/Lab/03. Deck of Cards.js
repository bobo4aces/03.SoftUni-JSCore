function deckOfCards(arr) {
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
    let deck = [];
    for (let cardStr of arr) {
        let face = cardStr.substring(0, cardStr.length-1);
        let suit = cardStr.substr(cardStr.length-1, 1);
        try {
            deck.push(playingCards(face, suit));
        }
        catch (err) {
            console.log("Invalid card: " + cardStr);
            return;
        }
    }
    console.log(deck.join(' '));
}
console.log(deckOfCards(['AS', '10D', 'KH', '2C']));
console.log(deckOfCards(['5S', '3D', 'QD', '1C']));
function xmlMessenger (message) {
    let toPattern = /\sto="([A-Za-z0-9\s\.]+)"/;
    let fromPattern = /\sfrom="([A-Za-z0-9\s\.]+)"/;
    let anyMessagePattern = /^<message(\s[a-z]+="[A-Za-z0-9\s\.]+")+>([\w\s\W\d]+)<\/message>$/gm;
    if (!fromPattern.test(message)||!toPattern.test(message)) {
        console.log("Missing attributes");
        return;
    }
    let recipient = toPattern.exec(message)[1];
    let sender = fromPattern.exec(message)[1];
    let textMessage = [];
    let match;
    while (match=anyMessagePattern.exec(message)) {
        textMessage=match[2].split("\n");
    }
    if (textMessage.length===0) {
        console.log("Invalid message format");
        return;
    }
    let html = `<article>\n  <div>From: <span class="sender">${sender}</span></div>\n  <div>To: <span class="recipient">${recipient}</span></div>\n  <div>\n`;
    for (let line of textMessage) {
        html+=`   <p>${line}</p>\n`;
    }
    html+="  </div>\n</article>";
    console.log(html);
}
xmlMessenger("<message to=\"Bob\" from=\"Alice\" timestamp=\"1497254092\">Hey man, what's up?</message>");
console.log("1--------------------------");
xmlMessenger("<message from=\"John Doe\" to=\"Alice\">Not much, just chillin. How about you?</message>");
console.log("2--------------------------");
xmlMessenger("<message from=\"Alice\" timestamp=\"1497254112\">Same old, same old</message>");
console.log("3--------------------------");
xmlMessenger("<message to=\"Bob\" from=\"Alice\" timestamp=\"1497254114\">Same old, same old\n" +
    "Let's go out for a beer</message>\n");
console.log("4--------------------------");
xmlMessenger("<message to=\"Alice\" from=\"Charlie\"><img src=\"fox.jpg\"/></message><meta version=\"2\"/>");
console.log("5--------------------------");
xmlMessenger("<message from=\"Hillary\" to=\"Edward\" secret:true>VGhpcyBpcyBhIHRlc3Q</message>");
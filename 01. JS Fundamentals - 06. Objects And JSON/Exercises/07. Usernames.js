function printUsernames (array) {
    let usernames = new Set();
    for (let name of array) {
        usernames.add(name);
    }
    let sortedUsernames = Array.from(usernames.values()).sort((a,b) => sortByLength(a,b));
    for (let username of sortedUsernames) {
        console.log(username);
    }
    function sortByLength (a,b) {
        let aUsername = a.length;
        let bUsername = b.length;
        if (aUsername>bUsername) {
            return 1;
        } else if (aUsername<bUsername) {
            return -1;
        } else if (a>b) {
            return 1;
        } else if (a<b) {
            return -1;
        }
    }
}
printUsernames([
    "Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Aizen",
    "Billy",
    "Braston"
]);
printUsernames([
    "Denise",
    "Ignatius",
    "Iris",
    "Isacc",
    "Indie",
    "Dean",
    "Donatello",
    "Enfuego",
    "Benjamin",
    "Biser",
    "Bounty",
    "Renard",
    "Rot"
]);
function spyMaster (array) {
    let specialKey = array.shift();
    let messagePattern = "((?: |^)";
    for (let i=0; i<specialKey.length; i++) {
        messagePattern += "[" + specialKey[i].toLowerCase() + specialKey.toUpperCase() + "]";
    }
    messagePattern += "[ ]+)([!#$%A-Z]{8,})( |\\.|,|$)";
    let messageRegex = new RegExp(messagePattern,'g');
    for (let i=0; i<array.length; i++) {
        let line = array[i].replace(messageRegex,replacer);
        console.log(line);
    }
    function replacer (match, group1, group2, group3) {
        group2=group2
            .replace(/!/g,'1')
            .replace(/%/g,'2')
            .replace(/\#/g,'3')
            .replace(/\$/g,'4')
            .replace(/[A-Z]/g,x=>x.toLowerCase());
        return group1 + group2 + group3;
    }
}
spyMaster([
    "specialKey",
    "In this text the specialKey HELLOWORLD! is correct, but",
    "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
    "SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"
]);
spyMaster([
    "enCode",
    "Some messages are just not encoded what can you do?",
    "RE - ENCODE THEMNOW! - he said.",
    "Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."

])
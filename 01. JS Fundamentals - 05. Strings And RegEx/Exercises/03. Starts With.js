function isStartsWith (mainString, str) {
    let startIndex = mainString.indexOf(str);
    console.log(startIndex===0);
}
isStartsWith("How have you been?","how");
isStartsWith("The quick brown fox…","The quick brown fox…");
isStartsWith("Marketing Fundamentals, starting 19/10/2016","Marketing Fundamentals, sta");
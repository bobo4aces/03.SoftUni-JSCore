function isEndsWith (mainString, str) {
    let lastString = mainString.substr(mainString.length-str.length,str.length);
    console.log(lastString===str);
}
isEndsWith("This sentence ends with fun?","fun?");
isEndsWith("This is Houston, we have…","We have…");
isEndsWith("The new iPhone has no headphones jack.","o headphones jack.");
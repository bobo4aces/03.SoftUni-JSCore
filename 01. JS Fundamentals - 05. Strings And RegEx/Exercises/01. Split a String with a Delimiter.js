function splitStringWithDelimiter (str, delimiter) {
    let lines = str.split(delimiter);
    for (let line of lines) {
        console.log(line);
    }
}
splitStringWithDelimiter("One-Two-Three-Four-Five","-");
splitStringWithDelimiter("http://platform.softuni.bg",".");
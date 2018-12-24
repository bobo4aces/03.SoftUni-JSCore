function minkeDecode (arr) {
    let startPoint = Number(arr.shift());
    let endPoint = Number(arr.shift());
    let rightWord = arr.shift();
    let encryptedText = arr.shift();
    let countryPattern = /\b[A-Z][A-Za-z]+[A-Z]\b/g;
    let matches=[];
    let match;
    while(match=countryPattern.exec(encryptedText)) {
        matches.push(match);
    }
    let country = "";
    for (let match of matches) {
        if (startPoint>=0&&startPoint<match[0].length&&endPoint>=0&&endPoint<match[0].length) {

            country=match[0].replace(match[0].substring(startPoint,endPoint),rightWord);
            console.log(country)
            let lastChar = country.substr(country.length-1,1);
            country=country.substr(0,country.length-1)+lastChar.toLowerCase();
        }
    }
    let numbersPattern = /[0-9.]{3,}/g;
    let numbersMatches=[];
    let numbersMatch;
    while(numbersMatch=numbersPattern.exec(encryptedText)) {
        numbersMatches.push(numbersMatch);
    }
    let numbers=[];
    for (let number of numbersMatches) {
        numbers.push(Math.ceil(Number(number)));
    }
    let town = "";
    for (let i=0; i<numbers.length; i++) {
        if (i===0) {
            town+=String.fromCharCode(numbers[i]).toUpperCase();
        } else {
            town+=String.fromCharCode(numbers[i]); //?
        }
    }
    console.log(`${country} => ${town}`);
}
minkeDecode(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
minkeDecode(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);
minkeDecode([
    "5",
    "7",
    "riA",
    "BulgaziP 67 � sDf1d17ia aTe 1, 098 confin$4%#ed 117 likewise 114 103 it human 097 ity  Bulg35aria - VarnA railLery1a0s1 115 an unpacked as he"]);
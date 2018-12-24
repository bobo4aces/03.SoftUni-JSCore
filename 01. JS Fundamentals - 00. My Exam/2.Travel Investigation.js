function travelInvestigation (arr) {
    let companiesArray = arr.shift();
    let delimiter = arr.shift();
    let companies = companiesArray.split(delimiter).map(e=>e.toLowerCase().trim()).filter(w=>w!=="");
    let validSentences = [];
    let invalidSentences = [];
    for (let sentence of arr) {
        let isValid = true;
        for (let company of companies) {
            if (sentence.toLowerCase().indexOf(company)===-1) {
                isValid=false;
                break;
            }
        }
        if (isValid) {
            validSentences.push(sentence.toLowerCase());
        } else {
            invalidSentences.push(sentence.toLowerCase());
        }
    }
    if (validSentences.length>0) {
        console.log("ValidSentences");
        let counter=1;
        for (let sentence of validSentences) {
            console.log(`${counter}. ${sentence}`);
            counter++;
        }

        if (invalidSentences.length>0) {
            console.log(`${"=".repeat(30)}`);
        }

    }
    if (invalidSentences.length>0) {
        console.log("InvalidSentences");
        let counter=1;
        for (let sentence of invalidSentences) {
            console.log(`${counter}. ${sentence}`);
            counter++;
        }

    }
}
//travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
//    "@,",
//    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
//    "someone continues as no "]
//);
travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);
function surveyParser (xmlData) {
    let surveyPattern = /<svg>.+<\/svg>/gm;
    let pattern =
        /<svg><cat><text>[\w\s\W\S]+\[([\w\s\W\S]+)\]<\/text><\/cat>\s*<cat>((<g><val>([1-9]|10)<\/val>\d+<\/g>)+)<\/cat><\/svg>/;
    let isSurvey = surveyPattern.test(xmlData);
    if (isSurvey) {
        let isValidSurvey = pattern.test(xmlData);
        if (isValidSurvey) {
            let survey = pattern.exec(xmlData);
            let label = survey[1];
            let ratingData = survey[2].split(/<g>|<\/g>|<val>|<\/val>/).filter(d=>d!=="").map(Number);
            let ratings = 0;
            let votes=0;
            for (let i=0; i<ratingData.length; i+=2) {
                let ratingValue = ratingData[i];
                let voteCount = ratingData[i+1];
                if (1<=ratingValue&&ratingValue<=10&&0<=voteCount) {
                    ratings+=ratingValue*voteCount;
                    votes+=voteCount;
                }
            }
            let averageRating = Math.round(ratings/votes*100)/100;
            console.log(`${label}: ${averageRating}`);
        } else {
            console.log("Invalid format");
        }
    } else {
        console.log("No survey found");
    }
}
//09:55 - 10:19
//12:53 -
surveyParser("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>");
surveyParser("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>");
surveyParser("<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It's great, don't mess with it!</p><p>I'd like to have the option for delivery</p>");
surveyParser("<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>");
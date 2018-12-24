function queryMess(array) {
    let pattern = /([A-Za-z0-9\%\*\-\.\_]+)\+?=([A-Za-z0-9\+\%\*\-\.\_:\/]+)&?/g;
    let match;
    for (let element of array) {
        let matches = new Map();
        while (match = pattern.exec(element)) {
            if (!matches.has(match[1])) {
                matches.set(match[1], []);
            }
            let currentValue = match[2];
            while (currentValue.indexOf("+")>=0) {
                currentValue=currentValue.replace("+", " ");
            }
            while (currentValue.indexOf("%20")>=0) {
                currentValue=currentValue.replace("%20", " ");
            }
            while (currentValue.indexOf("  ")>=0) {
                currentValue=currentValue.replace("  ", " ");
            }
            matches.get(match[1]).push(currentValue.trim());
        }
        let result = "";
        for (let key of matches.keys()) {
            result+=`${key}=[${matches.get(key).join(", ")}]`;
        }
        if (result!=="") {
            console.log(result);
        }
    }

}
queryMess(["login=student&password=student"]);
queryMess([
    "field=value1&field=value2&field=value3",
    "http://example.com/over/there?name=ferret"
]);
queryMess([
    "foo=%20foo&value=+val&foo+=5+%20+203",
    "foo=poo%20&value=valley&dog=wow+",
    "url=https://softuni.bg/trainings/coursesinstances/details/1070",
    "https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php"
]);
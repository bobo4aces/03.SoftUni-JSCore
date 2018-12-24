function ajaxRequestValidator (array) {
    let hashPattern = array.pop();
    let methodPattern = /^Method:\s(GET|POST|PUT|DELETE)$/;
    let credentialsPattern = /^Credentials:\s(Basic|Bearer)\s([A-Za-z0-9]+)$/;
    let contentPattern = /^Content:\s([A-Za-z0-9\.]+)$/;
    for (let i=0; i<array.length-1; i+=3) {
        let methodLine = array[i];
        let credentialsLine = array[i+1];
        let contentLine = array[i + 2];
        let method = methodLine.split(" ")[1];
        let credentials = credentialsLine.split(" ");
        let authorizationType = credentials[1];
        let authentication = credentials[2];
        if (!methodPattern.test(methodLine)) {
            console.log("Response-Code:400");
            continue;
        }
        if (!credentialsPattern.test(credentialsLine)) {
            console.log("Response-Code:400");
            continue;
        }
        if (!contentPattern.test(contentLine)) {
            console.log("Response-Code:400");
            continue;
        }
        if (authorizationType === "Basic" && (method === "POST" || method === "PUT" || method === "DELETE")) {
            console.log(`Response–Method:${method}&Code:401`);
        } else {
            if (isValidToken(authentication, hashPattern)) {
                console.log(`Response–Method:${method}&Code:200&Header:${authentication}`);
            } else {
                console.log(`Response–Method:${method}&Code:403`);
            }
        }
    }
    function isValidToken (token, hashPattern) {
        let letterCount = new Map();
        for (let i=0; i<token.length; i++) {
            if (!letterCount.has(token[i])) {
                letterCount.set(token[i],0);
            }
            let currentCount = letterCount.get(token[i]);
            letterCount.set(token[i],currentCount+1);
        }
        for (let i=0; i<hashPattern.length; i+=2) {
            let count=Number(hashPattern[i]);
            let letter=hashPattern[i+1];
            if (letterCount.get(letter)===count) {
                return true;
            }
        }
        return false;
    }
}
ajaxRequestValidator([ 'Method: GET',
    'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd.1782452.278asd',
    'Method: POST',
    'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    '2q']
);
ajaxRequestValidator([ 'Method: PUT',
    'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd/1782452$278///**asd123',
    'Method: POST',
    'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    'Method: DELETE',
    'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
    'Content: This.is.a.sample.content',
    '2e5g']
);
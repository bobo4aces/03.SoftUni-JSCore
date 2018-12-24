function requestValidator(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    if (validMethods.indexOf(obj.method)<0) {
        throw new Error("Invalid request header: Invalid Method");
    }
    let uriPattern = /^[A-Za-z0-9.]+$/g;
    if (!uriPattern.test(obj.uri)||!obj.hasOwnProperty("uri")) {
        throw new Error("Invalid request header: Invalid URI");
    }
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if (validVersions.indexOf(obj.version)<0) {
        throw new Error("Invalid request header: Invalid Version");
    }
    let specialChars = [`<`, `>`, `\\`, `&`, `'`, `"`];
    let message = obj.message;
    for (let element of message) {
        if (specialChars.includes(element)) {
            throw new Error("Invalid request header: Invalid Message");
        }
    }
    return obj;
}
console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
//console.log(requestValidator({
//    method: 'OPTIONS',
//    uri: 'git.master',
//    version: 'HTTP/1.1',
//    message: '-recursive'
//}));
//console.log(requestValidator({
//    method: 'POST',
//    uri: 'home.bash',
//    message: 'rm -rf /*'
//
//}));
//console.log(requestValidator({
//    method: 'POST',
//    version: 'HTTP/2.0',
//    message: 'rm -rf /*'
//}));
//console.log(requestValidator({
//    method: 'GET',
//    uri: 'kkk jjjj',
//    version: 'HTTP/0.8',
//    message: ''
//}));
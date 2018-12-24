function emailValidation (str) {
    let pattern = /^[A-Za-z0-9]+\@[a-z]+\.[a-z]+$/g;
    if (pattern.test(str)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}
emailValidation("valid@email.bg");
emailValidation("invalid@emai1.bg");
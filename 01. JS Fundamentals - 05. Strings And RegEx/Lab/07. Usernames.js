function printUsernames (array) {
    let result = [];
    for (let email of array) {
        let [alias, domain] = email.split("@");
        let username = alias+".";
        domain.split(".").forEach(p => username+=p[0]);
        result.push(username);
    }
    console.log(result.join(", "));
}
printUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
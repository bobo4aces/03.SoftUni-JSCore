function softuniForum (input) {
    let bannedUsers=input.pop().split(" ");
    input=input.join("\n");
    let usersPattern = /#(\b[a-zA-Z][a-zA-Z0-9-_]+[[a-zA-Z0-9]\b)/g;
    let codePattern = /<code>[\s\S]+?<\/code>/g;
    input=input.replace(usersPattern,function(match) {
        let matches;
        let isInCode = false;
        while (matches=codePattern.exec(input)) {
            if (input.indexOf(match)>input.indexOf(matches)&&input.indexOf(match)<input.indexOf(matches)+matches.toString().length) {
                isInCode=true;
            }
        }
        if (!isInCode) {
            let isBanned = false;
            for (let user of bannedUsers) {
                if (user === match.replace("#", "")) {
                    isBanned = true;
                }
            }
            if (isBanned) {
                return "*".repeat(match.length - 1);
            } else {
                return `<a href="/users/profile/show/${match.replace("#", "")}">${match.replace("#", "")}</a>`;
            }
        } else {
            return match;
        }

    });
    console.log(input);
}
softuniForum([
`#RoYaL: I'm not sure what you mean,`,
`but I am confident that I've written`,
`everything correctly. Ask #iordan_93`,
`and #pesho if you don't believe me`,
`<code>`,
`#trying to print stuff`,
`print("yoo")`,
`</code>`,
`pesho gosho`,
]);
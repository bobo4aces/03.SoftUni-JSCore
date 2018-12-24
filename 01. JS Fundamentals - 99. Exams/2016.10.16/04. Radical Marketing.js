function radicalMarketing (array) {
    let persons = new Map();
    let subscribtions = new Map();
    for (let line of array) {
        let [person, subscriber] = line.split("-");
        if (subscriber===undefined) {
            if (!persons.has(subscriber)) {
                persons.set(person,new Set());
                subscribtions.set(person,new Set());
            }
        } else {
            if (person!==subscriber) {
                if (persons.has(person) && subscribtions.has(subscriber)) {
                    persons.get(subscriber).add(person);
                    subscribtions.get(person).add(subscriber);
                }
            }
        }
    }
    let sortedLog = new Map([...persons.entries()].sort(function (firstEntry, secondEntry) {
        let firstEntryName = firstEntry[0]
        let firstEntrySubscribers = firstEntry[1].size;

        let secondEntryName = secondEntry[0]
        let secondEntrySubscribers = secondEntry[1].size;

        let difference = secondEntrySubscribers-firstEntrySubscribers;
        if (difference===0) {
            let firstEntrySubscribtions = subscribtions.get(firstEntryName).size;
            let secondEntrySubscribtions = subscribtions.get(secondEntryName).size;

            difference = secondEntrySubscribtions - firstEntrySubscribtions;
        }
        return difference;
    }));
    let mostImportantPerson = [...sortedLog.entries()][0];
    console.log(mostImportantPerson[0]);
    let counter = 1;
    mostImportantPerson[1].forEach(function (e) {
        console.log(counter + ". " + e );
        counter++;
    })
}
radicalMarketing([
    "A",
    "B",
    "C",
    "D",
    "A-B",
    "B-A",
    "C-A",
    "D-A"
]);
radicalMarketing([
    "J",
    "G",
    "P",
    "R",
    "C",
    "J-G",
    "G-J",
    "P-R",
    "R-P",
    "C-J"
]);
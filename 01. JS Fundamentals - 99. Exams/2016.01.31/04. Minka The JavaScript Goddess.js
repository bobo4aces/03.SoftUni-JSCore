function minkaGoddess (array) {
    let tasks = {};
    let taskArray = [];
    for (let line of array) {
        let [name, type, taskNumber, score, linesOfCode] = line.split(/\s*&\s*/g);
        let currentTask=`Task ${taskNumber}`;
        if (!tasks.hasOwnProperty(currentTask)) {
            tasks[currentTask]= {tasks:[],average:0, lines:0, totalScore:0, scoreCount:0};
        }
        taskArray.push(currentTask);
        tasks[currentTask].tasks.push({name: name, type: type});
        tasks[currentTask].totalScore+=Number(score);
        tasks[currentTask].scoreCount++;
        tasks[currentTask].lines+=Number(linesOfCode);
    }

    for (let task of taskArray) {
        tasks[task].average=Number(Math.round(tasks[task].totalScore/tasks[task].scoreCount*100)/100);
        tasks[task].tasks=tasks[task].tasks.sort((firstEntry,secondEntry)=> {
            let firstEntryName = firstEntry.name;
            let secondEntryName = secondEntry.name;
            return firstEntryName.localeCompare(secondEntryName);
        })
    }
    for (let task in tasks) {
        delete tasks[task].totalScore;
        delete tasks[task].scoreCount;
    }
    let sortedTasks = Object.entries(tasks).sort((firstEntry, secondEntry)=> {

        let firstEntryAverage = firstEntry[1].average;
        let secondEntryAverage = secondEntry[1].average;
        let firstEntryLines = firstEntry[1].lines;
        let secondEntryLines = secondEntry[1].lines;
        let difference = secondEntryAverage-firstEntryAverage;
        if (difference===0) {
            return difference = firstEntryLines-secondEntryLines;
        }
        return difference;
    });

    let result = {};
    for (let task of sortedTasks) {
        result[task[0]]=task[1];
    }
    console.log(JSON.stringify(result));
}
minkaGoddess([
    "Array Matcher & strings & 4 & 100 & 38",
    "Magic Wand & draw & 3 & 100 & 15",
    "Dream Item & loops & 2 & 88 & 80",
    "Knight Path & bits & 5 & 100 & 65",
    "Basket Battle & conditionals & 2 & 100 & 120",
    "Torrent Pirate & calculations & 1 & 100 & 20",
    "Encrypted Matrix & nested loops & 4 & 90 & 52",
    "Game of bits & bits & 5 &  100 & 18",
    "Fit box in box & conditionals & 1 & 100 & 95",
    "Disk & draw & 3 & 90 & 15",
    "Poker Straight & nested loops & 4 & 40 & 57",
    "Friend Bits & bits & 5 & 100 & 81"
]);
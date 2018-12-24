class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = "";
        this.isOverdue = false;
    }
    set title (value) {
        if (typeof value === "string") {
            this._title = value;
        }
    }
    set deadline (value) {
        if (value.getTime() >= Date.now()) {
            if (value.getTime() < Date.now()) {
                throw new Error("deadline is set to a past date");
            }
            this._deadline = value;
        }
    }
    set status (value) {
        if (this.isOverdue) {
            this._status = "Overdue Task";
        }
        if (value==="") {
            this._status = "Open";
        } else {
            this._status = value;
        }
    }
    isOverdue() {
        return Date.now()>this._deadline||this._status!=="Complete";
    }
    static comparator(a, b) {
        return a-b;
    }
    toString() {
        let line = "";

        if (this._status==="Overdue Task"||this.isOverdue) {
            line = "(overdue)";
        } else if (this._status==="Complete") {
            line = "";
        } else {
            line = `(deadline: ${this._deadline})`;
        }
        let currentStatus = "";
        if (this._status === "Overdue Task"||this.isOverdue) {
            currentStatus = "\u26A0";
        } else if (this._status === "Open") {
            currentStatus = "\u2731";
        } else if (this._status === "In Progress") {
            currentStatus = "\u219D";
        } else if (this._status === "Complete") {
            currentStatus = "\u2714";
        }
        return `[${currentStatus}] ${this._title} ${line}`;
    }
}
let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

//// should throw an Error
//let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
//// should throw an Error
//task1.deadline = new Date(2005, '4', '20');

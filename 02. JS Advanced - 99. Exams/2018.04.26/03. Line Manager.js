class LineManager {
    constructor(arr) {
        this.stops = [];
        this.currentStop = 0;
        this.duration = 0;
        this.stopsDuration = [];
        for (let line of arr) {
            let name = line.name;
            let currentTime = line.timeToNext;
            if (name.length>0&&typeof name === "string"&&currentTime>=0&&typeof currentTime === "number") {
                this.stops.push(line.name);
                this.stopsDuration.push(line.timeToNext);
            } else {
                throw new Error("Should be a number");
            }
        }
    }
    get atDepot() {
        return this.currentStop===this.stops.length-1;
    }
    get nextStopName() {
        if (this.atDepot) {
            return "At depot.";
        }
        return this.currentStop+1;
    }
    get currentDelay() {
        let totalDuration = 0;
        for (let i=0; i<this.currentStop; i++) {
            totalDuration+=this.stopsDuration[i];
        }
        return this.duration-totalDuration;
    }
    arriveAtStop(minutes) {
        if (typeof minutes !== "number") {
            throw new Error ("Minutes must be number");
        }
        if (minutes<0) {
            throw new Error ("minutes cannot be negative");
        }
        if (this.atDepot) {
            throw new Error ("last stop reached");
        }
        this.duration+=minutes;
        this.currentStop = this.nextStopName;
        if (this.atDepot) {
            return false;
        }
        return true;
    }
    toString() {
        let output = `Line summary\n`;
        if (this.stops[this.nextStopName]===undefined) {
            output+="- Course completed\n";
        } else {
            output+=`- Next stop: ${this.stops[this.nextStopName]}\n`;
        }
        output+=`- Stops covered: ${this.currentStop}\n- Time on course: ${this.duration} minutes\n- Delay: ${this.currentDelay} minutes\n`;
        return output;
    }
}

// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

// Travel through all the stops until the bus is at depot
//while(man.atDepot === false) {
//    console.log(man.toString());
//    man.arriveAtStop(4);
//}
man.arriveAtStop(4);
console.log(man.toString());

 //Should throw an Error (minutes cannot be negative)
//man.arriveAtStop(-4);
 //Should throw an Error (last stop reached)
//man.arriveAtStop(4);

// Should throw an Error at initialization
//const wrong = new LineManager([
//    { name: 'Stop', timeToNext: { wrong: 'Should be a number'} }
//]);

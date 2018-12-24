class List {

    constructor() {
        this.arr = [];
        this.size = 0;
    }
    add (element) {
        if (typeof element === "number") {
            this.arr.push(element);
            this.size++;
            this.arr.sort((a,b)=>a-b);
        }
    }
    remove (index) {
        if (0<=index&&index<this.arr.length) {
            this.arr.splice(index,1);
            this.size--;
        }
    }
    get (index) {
        if (0<=index&&index<this.arr.length) {
            return this.arr[index];
        }
    }
}
var myList = new List();
myList.add(5);
console.log(myList.get(0));
myList.add(-3);
myList.add(-4);
console.log(myList);
myList.remove(0);
console.log(myList);
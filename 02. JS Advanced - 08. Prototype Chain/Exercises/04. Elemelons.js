function elemelons() {
    class Melon {
        constructor(weight, melonSort){
            if (new.target === Melon) {
                throw new TypeError ("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this.element = "";
        }
        get elementIndex () {
            return this.weight*this.melonSort.length;
        }
        toString() {
            switch (this.constructor.name) {
                case "Watermelon":this.element = "Water";break;
                case "Firemelon":this.element = "Fire";break;
                case "Earthmelon":this.element = "Earth";break;
                case "Airmelon":this.element = "Air";break;
            }
            let baseString = `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
            return baseString;
        }
    }
    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight,melonSort);
            this.elementIndex;
        }

    }
    class Firemelon extends Melon {
        constructor(weight, melonSort,elementIndex) {
            super(weight,melonSort);
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight,melonSort);
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight,melonSort);
        }
    }
    class Melolemonmelon extends Airmelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._items = ["Water", "Fire", "Earth", "Air"];
            this.morph();
        }
        morph() {
            let currentElement = this._items.shift();
            this._items.push(currentElement);
            this.element = currentElement;
        }
    }
    return {Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon};
}
let melons=elemelons();
//let test = new melons.Melon(100, "Test");
//Throws error

let watermelon = new melons.Melolemonmelon(150, "Melo");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100

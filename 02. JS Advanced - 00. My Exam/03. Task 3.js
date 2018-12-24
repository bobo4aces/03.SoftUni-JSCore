class BookCollection {
    constructor(shelfGenre,room,shelfCapacity) {
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelf = [];
        this.shelfCapacity = shelfCapacity;
    }
    get room() {
        return this._room;
    }

    set room(value) {
        if (typeof value === "string") {
            if (value==="livingRoom"||value==="bedRoom"||value==="closet") {
                this._room = value;
            } else {
                throw new Error(`Cannot have book shelf in ${value}`);
            }

        }

    }

    get shelfGenre() {
        return this._shelfGenre;
    }

    set shelfGenre(value) {
        if (typeof value === "string") {
            this._shelfGenre = value;
        }
    }

    get shelfCapacity() {
        return this._shelfCapacity;
    }

    set shelfCapacity(value) {
        if (typeof value === "number" && Number(value)>0) {
            this._shelfCapacity = value;
        }
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelfCapacity>this.shelf.length) {
            this.shelf.push({bookName,bookAuthor,genre});
        } else {
            this.shelf.shift();
            this.shelf.push({bookName,bookAuthor,genre});
        }
        this.shelf.sort((a,b)=>a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }
    throwAwayBook(bookName) {
        this.shelf=this.shelf.filter(book=>book.bookName!==bookName);
    }
    showBooks(genre) {
        let output = `Results for search "${genre}":`;
        for (let book of this.shelf) {
            if (book.genre === genre) {
                output+=`\n\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`;
            }
        }
        return output;
    }
    get shelfCondition(){
        let count = this.shelfCapacity-this.shelf.length;
        return count;
    }
    toString() {
        if (this.shelf.length===0) {
            return "It's an empty shelf";
        } else {
            let output = `"${this.shelfGenre}" shelf in ${this.room} contains:`;
            for (let book of this.shelf) {
                output+=`\n\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}`;
            }
            return output;
        }
    }
}
let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov")
    .addBook("1 Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("1 Introduction to Programming with Java", "Svetlin Nakov","a")
    .addBook("1 Programming for .NET Framework", "Svetlin Nakov")
    .addBook("1 Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());
//let garden = new BookCollection("Programming", "garden");
//console.log(garden.toString());
//let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
//bedRoom.addBook("John Adams", "David McCullough", "history");
//bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
//bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
//bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
//console.log("Shelf's capacity: " + bedRoom.shelfCondition);
//console.log(bedRoom.showBooks("history"));

class Repository {
    constructor(props) {
        this.props = props;
        this.id = 0;
        this.data = new Map();
    }
    add(entity) {
        for (let entry in this.props) {
            if (!entity.hasOwnProperty(entry)) {
                throw new Error(`Property ${entry} is missing from the entity!`);
            }
            if (typeof entity[entry] !== this.props[entry]) {
                throw new TypeError(`Property ${entry} is of incorrect type!`);
            }
        }
        this.data.set(this.id,entity);
        return this.id++;
    }
    get(id) {
        if (this.data.get(id)) {
            return this.data.get(id);
        }
        throw new Error(`Entity with id: ${id} does not exist!`);
    }
    update(id, newEntity) {
        this.get(id);
        for (let entry in this.props) {
            if (!newEntity.hasOwnProperty(entry)) {
                throw new Error(`Property ${entry} is missing from the entity!`);
            }
            if (typeof newEntity[entry] !== this.props[entry]) {
                throw new TypeError(`Property ${entry} is of incorrect type!`);
            }
        }
        this.data.set(id,newEntity);
    }
    del(id) {
        this.get(id);
        this.data.delete(id);
    }
    get count() {
        return this.data.size;
    }
}
// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
console.log(repository.add(entity)); // Returns 0
console.log(repository.add(entity)); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
//repository.add(anotherEntity); // should throw an Error
//anotherEntity = {
//    name: 'Nakov',
//    age: 26,
//    birthday: 1991
//};
//repository.add(anotherEntity); // should throw a TypeError
//repository.del(-1); // should throw Error for invalid id

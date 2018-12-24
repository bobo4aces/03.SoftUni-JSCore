let expect = require("chai").expect;
let Sumator = require("../02. Sumator Class");

describe("02. Sumator Class",function () {
    describe("Initialization",function () {
        it("Should return empty array", function () {
            let list = new Sumator();
            expect(list.data).to.be.eql([]);
        });
    });
    describe("add Function",function () {
        it("Should return correct data into array", function () {
            let list = new Sumator();
            list.add(1);
            expect(list.data).to.be.eql([1]);
        });
        it("Should return correct data into array", function () {
            let list = new Sumator();
            list.add("5.5");
            expect(list.data).to.be.eql(["5.5"]);
        });
        it("Should return correct data into array", function () {
            let list = new Sumator();
            list.add({1:1});
            list.add(1);
            expect(list.data).to.be.eql([{1:1},1]);
        });
        it("Should return correct data into array", function () {
            let list = new Sumator();
            list.add([1,2]);
            list.add(1);
            expect(list.data).to.be.eql([[1,2],1]);
        });
        it("Should return correct data into array", function () {
            let list = new Sumator();
            list.add(1);
            expect(list.data.length).to.be.equal(1);
        });
        it("Should return correct data into array", function () {
            let list = new Sumator();
            list.add(1);
            expect(list.data[0]).to.be.equal(1);
        });
        it("Should return correct data into array", function () {
            let list = new Sumator();
            list.add(1);
            list.add(2);
            list.add("three");
            list.add(4);
            expect(list.data).to.be.eql([1,2,"three",4]);
        });
        it("Should return correct data into array", function () {
            let list = new Sumator();
            list.add(1);
            list.add(2);
            list.add("three");
            list.add(4);
            expect(list.data.length).to.be.equal(4);
        });
        it("Should return correct data into array", function () {
            let list = new Sumator();
            list.add(1);
            list.add(2);
            list.add("three");
            list.add(4);
            expect(list.data[2]).to.be.equal("three");
        });
    });
    describe("sumNums Function",function () {
        it("Should return correct sum from array", function () {
            let list = new Sumator();
            list.add(1);
            expect(list.sumNums()).to.be.equal(1);
        });
        it("Should return correct sum from array", function () {
            let list = new Sumator();
            expect(list.sumNums()).to.be.equal(0);
        });
        it("Should return correct sum from array", function () {
            let list = new Sumator();
            list.add(1);
            list.add(2);
            list.add("three");
            list.add(4);
            expect(list.sumNums()).to.be.equal(7);
        });
        it("Should return correct sum from array", function () {
            let list = new Sumator();
            list.add(1);
            list.add(2);
            list.add("three");
            list.add(4);
            list.add("5.5");
            expect(list.sumNums()).to.be.equal(7);
        });
        it("Should return correct sum from array", function () {
            let list = new Sumator();
            list.add("three");
            expect(list.sumNums()).to.be.equal(0);
        });
    });
    describe("removeByFilter Function",function () {
        it("Should remove all of the items that match the criteria", function () {
            let list = new Sumator();
            list.add(1);
            list.removeByFilter(x => x % 2 === 0);
            expect(list.data).to.be.eql([1]);
        });
        it("Should remove all of the items that match the criteria", function () {
            let list = new Sumator();
            list.removeByFilter(x => x % 2 === 0);
            expect(list.data).to.be.eql([]);
        });
        it("Should remove all of the items that match the criteria", function () {
            let list = new Sumator();
            list.add(1);
            list.add(2);
            list.add("three");
            list.add(4);
            list.removeByFilter(x => x % 2 === 0);
            expect(list.data).to.be.eql([1,"three"]);
        });
        it("Should remove all of the items that match the criteria", function () {
            let list = new Sumator();
            list.add("three");
            list.removeByFilter(x => x % 2 === 0);
            expect(list.data).to.be.eql(["three"]);
        });
    });
    describe("toString Function",function () {
        it("Should return (empty)", function () {
            let list = new Sumator();
            expect(list.toString()).to.be.equal("(empty)");
        });
        it("Should return array", function () {
            let list = new Sumator();
            list.add(1);
            list.add(2);
            list.add("three");
            list.add(4);
            expect(list.toString()).to.be.equal("1, 2, three, 4");
        });
        it("Should remove all of the items that match the criteria", function () {
            let list = new Sumator();
            list.add("three");
            expect(list.toString()).to.be.eql("three");
        });
    });
});
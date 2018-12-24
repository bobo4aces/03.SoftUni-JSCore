let expect = require("chai").expect;
let Calculator = require("../02. Task 2");

describe("calc", function() {
    describe("empty array", function() {
        it("type", function() {
            let output = new Calculator();
            expect(output.expenses).to.be.eql([]);
        });
        it("type", function() {
            let output = new Calculator();
            expect(output.hasOwnProperty("expenses")).to.be.true;
        });
        it("length", function() {
            let output = new Calculator();
            expect(output.expenses.length).to.be.equal(0);
        });
    });
    describe("add", function() {
        it("add", function() {
            let output = new Calculator();
            output.add(10);
            expect(output.expenses).to.be.eql([10]);
        });
        it("add", function() {
            let output = new Calculator();
            output.add(10.5);
            expect(output.toString()).to.be.equal("10.5");
        });
        it("add", function() {
            let output = new Calculator();
            output.add(-10);
            expect(output.toString()).to.be.equal("-10");
        });
        it("add", function() {
            let output = new Calculator();
            output.add(10);
            expect(output.expenses.length).to.be.equal(1);
        });
        it("add", function() {
            let output = new Calculator();
            output.add(10);
            output.add("Pesho");
            output.add("5");
            expect(output.expenses).to.be.eql([10,"Pesho","5"]);
        });
        it("add", function() {
            let output = new Calculator();
            output.add(10);
            output.add("Pesho");
            output.add("5");
            expect(output.expenses.length).to.be.equal(3);
        });
        it("add", function() {
            let output = new Calculator();
            output.add({1:1});
            expect(output.expenses).to.be.eql([{1:1}]);
        });
    });
    describe("divideNums", function() {
        it("divideNums", function() {
            let output = new Calculator();
            output.add(10);
            output.divideNums();
            expect(output.expenses).to.be.eql([10]);
        });
        it("divideNums", function() {
            let output = new Calculator();
            output.add(10);
            output.add("Pesho");
            output.add("5");
            output.divideNums();
            expect(output.expenses.length).to.be.eql(1);
        });
        it("divideNums", function() {
            let output = new Calculator();
            output.add(10);
            output.add(0);
            expect(output.divideNums()).to.be.equal('Cannot divide by zero');
        });
        it("divideNums", function() {
            let output = new Calculator();
            let err = "";
            try {
                output.divideNums();
            } catch (e) {
                err = "Error";
            }
            expect(err).to.be.equal('Error');
        });
        it("divideNums", function() {
            let output = new Calculator();
            let err="";
            try {
                output.add("Pesho");
                output.add("5");
                output.divideNums()
            } catch(e) {
                err="Error";
            }
            expect(err).to.be.equal("Error");
        });
    });
    describe("toString", function() {
        it("toString", function() {
            let output = new Calculator();
            output.add(10);
            expect(output.toString()).to.be.equal("10");
        });
        it("toString", function() {
            let output = new Calculator();
            output.add(10);
            output.add("Pesho");
            output.add("5");
            expect(output.toString()).to.be.equal("10 -> Pesho -> 5");
        });
        it("toString", function() {
            let output = new Calculator();
            expect(output.toString()).to.be.equal('empty array');
        });
    });
    describe("orderBy", function() {
        it("orderBy", function() {
            let output = new Calculator();
            output.add(10);
            output.add(5);
            expect(output.orderBy()).to.be.equal("5, 10");
        });
        it("orderBy", function() {
            let output = new Calculator();
            output.add(10.5);
            output.add(5);
            expect(output.orderBy()).to.be.equal("5, 10.5");
        });
        it("orderBy", function() {
            let output = new Calculator();
            output.add(10);
            output.add(-5);
            expect(output.orderBy()).to.be.equal("-5, 10");
        });
        it("orderBy", function() {
            let output = new Calculator();
            output.add(10);
            output.add("Pesho");
            output.add("5");
            expect(output.orderBy()).to.be.equal("10, 5, Pesho");
        });
        it("orderBy", function() {
            let output = new Calculator();
            output.add("Pesho");
            output.add("5");
            expect(output.orderBy()).to.be.equal("5, Pesho");
        });
        it("orderBy", function() {
            let output = new Calculator();
            expect(output.orderBy()).to.be.equal('empty');
        });
    });
});

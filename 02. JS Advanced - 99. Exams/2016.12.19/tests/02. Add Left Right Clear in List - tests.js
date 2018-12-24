let expect = require("chai").expect;
let makeList = require("../02. Add Left Right Clear in List");

describe("TODO …", function () {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });
    it("toString", function () {
        expect(myList.toString()).to.be.equal("");
    });
    it("addRight", function () {
        myList.addRight(1);
        expect(myList.toString()).to.be.equal("1");
    });
    it("addRight", function () {
        myList.addRight(1);
        myList.addRight("two");
        expect(myList.toString()).to.be.equal("1, two");
    });
    it("addLeft", function () {
        myList.addRight(1);
        myList.addRight("two");
        myList.addLeft(0);
        expect(myList.toString()).to.be.equal("0, 1, two");
    });
    it("addLeft", function () {
        myList.addLeft(0);
        expect(myList.toString()).to.be.equal("0");
    });
    it("clear", function () {
        myList.addRight(1);
        myList.addRight("two");
        myList.addLeft(0);
        myList.clear();
        expect(myList.toString()).to.be.equal("");
    });
});
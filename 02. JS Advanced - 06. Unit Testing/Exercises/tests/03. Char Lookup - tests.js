let expect = require("chai").expect;
let lookupChar = require("../03. Char Lookup").lookupChar;

describe("Char Lookup - undefined tests", function () {
    it('should return undefined for [],1', function () {
        expect(lookupChar([],1)).to.be.undefined;
    });
    it('should return undefined for [1],1', function () {
        expect(lookupChar([1],1)).to.be.undefined;
    });
    it('should return undefined for {},1', function () {
        expect(lookupChar({},1)).to.be.undefined;
    });
    it('should return undefined for {1:1, 1:1},1', function () {
        expect(lookupChar({1:1, 1:1},1)).to.be.undefined;
    });
    it('should return undefined for null,1', function () {
        expect(lookupChar(null,1)).to.be.undefined;
    });
    it('should return undefined for undefined,1', function () {
        expect(lookupChar(undefined,1)).to.be.undefined;
    });
    it('should return undefined for "a",[]', function () {
        expect(lookupChar("a",[])).to.be.undefined;
    });
    it('should return undefined for "a",[1]', function () {
        expect(lookupChar("a",[1])).to.be.undefined;
    });
    it('should return undefined for "a",{}', function () {
        expect(lookupChar("a",{})).to.be.undefined;
    });
    it('should return undefined for "a",{1:1, 1:1}', function () {
        expect(lookupChar("a",{1:1, 1:1})).to.be.undefined;
    });
    it('should return undefined for "a",null', function () {
        expect(lookupChar("a",null)).to.be.undefined;
    });
    it('should return undefined for "a",undefined', function () {
        expect(lookupChar("a",undefined)).to.be.undefined;
    });
    it('should return undefined for "a",1.1', function () {
        expect(lookupChar("a",1.1)).to.be.undefined;
    });
    it('should return undefined for "a",-1.1', function () {
        expect(lookupChar("a",-1.1)).to.be.undefined;
    });
});
describe("Char Lookup - Incorrect Index tests", function () {
    it('should return "Incorrect index" for "a",1', function () {
        expect(lookupChar("a",1)).to.be.equal("Incorrect index");
    });
    it('should return "Incorrect index" for "a",2', function () {
        expect(lookupChar("a",2)).to.be.equal("Incorrect index");
    });
    it('should return "Incorrect index" for "a",-1', function () {
        expect(lookupChar("a",-1)).to.be.equal("Incorrect index");
    });
    it('should return "Incorrect Index" for "a ",2', function () {
        expect(lookupChar("a ",2)).to.be.equal("Incorrect index");
    });
});
describe("Char Lookup - Correct tests", function () {
    it('should return "a" for "a",0', function () {
        expect(lookupChar("a",0)).to.be.equal("a");
    });
    it('should return " " for "a a ",1', function () {
        expect(lookupChar("a a ",1)).to.be.equal(" ");
    });
});
let expect = require("chai").expect;
let isOddOrEven = require("../02. Even Or Odd").isOddOrEven;

describe("Even or Odd - undefined tests", function () {
    it('should return undefined for []', function () {
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('should return undefined for [1,1]', function () {
        expect(isOddOrEven([1,1])).to.be.undefined;
    });
    it('should return undefined for {}', function () {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('should return undefined for {1:1,1:1}', function () {
        expect(isOddOrEven({1:1,1:1})).to.be.undefined;
    });
    it('should return undefined for 1', function () {
        expect(isOddOrEven(1)).to.be.undefined;
    });
    it('should return undefined for null', function () {
        expect(isOddOrEven(null)).to.be.undefined;
    });
    it('should return undefined for undefined', function () {
        expect(isOddOrEven(undefined)).to.be.undefined;
    });
    it('should return undefined for empty value', function () {
        expect(isOddOrEven()).to.be.undefined;
    });
});
describe("Even or Odd - even tests", function () {
    it('should return "even" for "aaaa"', function () {
        expect(isOddOrEven("aaaa")).to.be.equal("even");
    });
    it('should return "even" for "aaaa aaaa aaaa"', function () {
        expect(isOddOrEven("aaaa aaaa aaaa")).to.be.equal("even");
    });
    it('should return "even" for "0000"', function () {
        expect(isOddOrEven("0000")).to.be.equal("even");
    });
    it('should return "even" for "    "', function () {
        expect(isOddOrEven("    ")).to.be.equal("even");
    });
    it('should return "even" for "!@#$"', function () {
        expect(isOddOrEven("!@#$")).to.be.equal("even");
    });
});
describe("Even or Odd - odd tests", function () {
    it('should return "odd" for "aaaaa"', function () {
        expect(isOddOrEven("aaaaa")).to.be.equal("odd");
    });
    it('should return "odd" for "aaaa aaaaa aaaa"', function () {
        expect(isOddOrEven("aaaa aaaaa aaaa")).to.be.equal("odd");
    });
    it('should return "odd" for "00000"', function () {
        expect(isOddOrEven("00000")).to.be.equal("odd");
    });
    it('should return "odd" for "     "', function () {
        expect(isOddOrEven("     ")).to.be.equal("odd");
    });
    it('should return "odd" for "!@#$$"', function () {
        expect(isOddOrEven("!@#$$")).to.be.equal("odd");
    });
});
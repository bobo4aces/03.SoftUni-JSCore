let expect = require("chai").expect;
let mathEnforcer = require("../04. Math Enforcer").mathEnforcer;

describe("Math Enforcer - undefined tests", function () {
    it('should return undefined for "a"', function () {
        expect(mathEnforcer.addFive("a")).to.be.undefined;
    });
    it('should return undefined for "a"', function () {
        expect(mathEnforcer.subtractTen("a")).to.be.undefined;
    });
    it('should return undefined for "a","a"', function () {
        expect(mathEnforcer.sum("a","a")).to.be.undefined;
    });
    it('should return undefined from addFive("7")', function () {
        expect(mathEnforcer.addFive("7")).to.be.undefined;
    });
    it('should return undefined from subtractTen([11])', function () {
        expect(mathEnforcer.subtractTen([11])).to.be.undefined;
    });
    it('should return undefined from sum(1, "2")', function () {
        expect(mathEnforcer.sum(1, "2")).to.be.undefined;
    });
    it('should return undefined from sum("1", 10)', function () {
        expect(mathEnforcer.sum({}, 10)).to.be.undefined;
    });
});
describe("Math Enforcer - correct tests", function () {
    it('should return 6 for 1', function () {
        expect(mathEnforcer.addFive(1)).to.be.equal(6);
    });
    it('should return 1 for 11', function () {
        expect(mathEnforcer.subtractTen(11)).to.be.equal(1);
    });
    it('should return 6 for 1,5', function () {
        expect(mathEnforcer.sum(1,5)).to.be.equal(6);
    });
    it('should return 6.1 for 1.1', function () {
        expect(mathEnforcer.addFive(1.1)).to.be.equal(6.1);
    });
    it('should return 1.1 for 11.10', function () {
        expect(mathEnforcer.subtractTen(11.10)).to.be.equal(1.0999999999999996);
    });
    it('should return 6.2 for 1.1,5.1', function () {
        expect(mathEnforcer.sum(1.1,5.1)).to.be.equal(6.199999999999999);
    });
    it('should return 3.9 for -1.1', function () {
        expect(mathEnforcer.addFive(-1.1)).to.be.equal(3.9);
    });
    it('should return -21.1 for -11.1', function () {
        expect(mathEnforcer.subtractTen(-11.1)).to.be.equal(-21.1);
    });
    it('should return -6.2 for -1.1,-5.1', function () {
        expect(mathEnforcer.sum(-1.1,-5.1)).to.be.equal(-6.199999999999999);
    });
});
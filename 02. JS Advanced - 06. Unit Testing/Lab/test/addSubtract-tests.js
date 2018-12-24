let expect = require("chai").expect;
let createCalculator = require("../07. Add Subtract").createCalculator;

describe('Add Subtract - add & get Functions', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    it('should return 3 after {add 1; add 2}', function () {
        calc.add(1);
        calc.add(2);
        let result = calc.get();
        expect(result).to.be.equal(3);
    });
    it('should return 1 after {add -1; add 2}', function () {
        calc.add(-1);
        calc.add(2);
        let result = calc.get();
        expect(result).to.be.equal(1);
    });
    it('should return 1.5 after {add -1; add 2.5}', function () {
        calc.add(-1);
        calc.add(2.5);
        let result = calc.get();
        expect(result).to.be.equal(1.5);
    });
    it('should return 2.5 after {add "0"; add "2.5"}', function () {
        calc.add("0");
        calc.add("2.5");
        let result = calc.get();
        expect(result).to.be.equal(2.5);
    });
    it('should return 0 after start', function () {
        let result = calc.get();
        expect(result).to.be.equal(0);
    });
    it('should return NaN after {add "s"; add "2.5"}', function () {
        calc.add("s");
        calc.add("2.5");
        let result = calc.get();
        expect(result).to.be.NaN;
    });
});
describe('Add Subtract - subtract & get Functions', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    it('should return -3 after {subtract 1; subtract 2}', function () {
        calc.subtract(1);
        calc.subtract(2);
        let result = calc.get();
        expect(result).to.be.equal(-3);
    });
    it('should return -1 after {subtract -1; subtract 2}', function () {
        calc.subtract(-1);
        calc.subtract(2);
        let result = calc.get();
        expect(result).to.be.equal(-1);
    });
    it('should return -1.5 after {subtract -1; subtract 2.5}', function () {
        calc.subtract(-1);
        calc.subtract(2.5);
        let result = calc.get();
        expect(result).to.be.equal(-1.5);
    });
    it('should return -2.5 after {subtract "0"; subtract "2.5"}', function () {
        calc.subtract("0");
        calc.subtract("2.5");
        let result = calc.get();
        expect(result).to.be.equal(-2.5);
    });
    it('should return NaN after {subtract "s"; subtract "2.5"}', function () {
        calc.subtract("s");
        calc.subtract("2.5");
        let result = calc.get();
        expect(result).to.be.NaN;
    });
});
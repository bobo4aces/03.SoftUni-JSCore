let expect = require("chai").expect;
let isSymmetric = require("../05. Check for Symmetry").isSymmetric;

describe("isSymmetric - True Tests", function () {
    it('should return true for [1, 2, 3, 2, 1]', function () {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });
    it('should return true for [1, -2, 3, -2, 1]', function () {
        expect(isSymmetric([1, -2, 3, -2, 1])).to.be.true;
    });
    it('should return true for [1.1, 2, 3, 2, 1.1]', function () {
        expect(isSymmetric([1.1, 2, 3, 2, 1.1])).to.be.true;
    });
    it('should return true for [1, {name: "Pesho", age: 13}, 3, {name: "Pesho", age: 13}, 1]', function () {
        expect(isSymmetric([1, {name: "Pesho", age: 13}, 3, {name: "Pesho", age: 13}, 1])).to.be.true;
    });
    it('should return true for ["a"]', function () {
        expect(isSymmetric(["a"])).to.be.true;
    });
});
describe("isSymmetric - False Tests", function () {
    it('should return true for [1, 3, 3, 2, 1]', function () {
        expect(isSymmetric([1, 3, 3, 2, 1])).to.be.false;
    });
    it('should return true for [1, -3, 3, -2, 1]', function () {
        expect(isSymmetric([1, -3, 3, -2, 1])).to.be.false;
    });
    it('should return true for [1.1, 2.1, 3, 2, 1.1]', function () {
        expect(isSymmetric([1.1, 2.1, 3, 2, 1.1])).to.be.false;
    });
    it('should return true for [1, {name: "Pesho"}, 3, {name: "Pesho", age: 13}, 1]', function () {
        expect(isSymmetric([1, {name: "Pesho"}, 3, {name: "Pesho", age: 13}, 1])).to.be.false;
    });
    it('should return true for "a"', function () {
        expect(isSymmetric("a")).to.be.false;
    });
});
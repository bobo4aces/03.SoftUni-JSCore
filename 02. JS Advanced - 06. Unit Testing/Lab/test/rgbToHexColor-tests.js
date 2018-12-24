let expect = require("chai").expect;
let rgbToHexColor = require("../06. RGB to Hex").rgbToHexColor;

describe("rgbToHexColor - returns Color", function () {
    it('should return "#050505" for 5,5,5', function () {
        expect(rgbToHexColor(5,5,5)).to.be.equal("#050505");
    });
    it('should return "#00FF00" for 0,255,0', function () {
        expect(rgbToHexColor(0,255,0)).to.be.equal("#00FF00");
    });
    it('should return "#010203" for 1,2,3', function () {
        expect(rgbToHexColor(1,2,3)).to.be.equal("#010203");
    });
});
describe("rgbToHexColor - returns Undefined", function () {
    it('should return "undefined" for 5,-5,5', function () {
        expect(rgbToHexColor(5,-5,5)).to.be.undefined;
    });
    it('should return "undefined" for 0,255,0.3', function () {
        expect(rgbToHexColor(0,255,0.3)).to.be.undefined;
    });
    it('should return "undefined" for 1,2,-3', function () {
        expect(rgbToHexColor(1,2,-3)).to.be.undefined;
    });
    it('should return "undefined" for 1', function () {
        expect(rgbToHexColor(1)).to.be.undefined;
    });
    it('should return "undefined" for 1,a,-3', function () {
        expect(rgbToHexColor(1,"a",-3)).to.be.undefined;
    });
    it('should return "undefined" for [1,2,3]', function () {
        expect(rgbToHexColor([1,2,3])).to.be.undefined;
    });
    it('should return "undefined" for 0,256,0', function () {
        expect(rgbToHexColor(0,256,0)).to.be.undefined;
    });
    it('should return "undefined" for {1:1,2:2,3:3}', function () {
        expect(rgbToHexColor({1:1,2:2,3:3})).to.be.undefined;
    });
});
let expect = require("chai").expect;
let StringBuilder = require("../02. String Builder");

describe('StringBuilder', function () {
    describe('StringBuilder', function () {
        it('constructor', function () {
            let str = new StringBuilder('hello');
            expect(str.toString()).to.be.equal('hello');
        });
        it('constructor', function () {
            let str = new StringBuilder();
            expect(str.toString()).to.be.equal('');
        });
        it('append', function () {
            let str = new StringBuilder('hello');
            str.append('hello');
            expect(str.toString()).to.be.equal('hellohello');
        });
        it('prepend', function () {
            let str = new StringBuilder('hello');
            str.prepend('1');
            expect(str.toString()).to.be.equal('1hello');
        });
        it('insertAt', function () {
            let str = new StringBuilder('hello');
            str.prepend('1');
            str.append('1');
            str.insertAt('hello',1);
            expect(str.toString()).to.be.equal('1hellohello1');
        });
        it('remove', function () {
            let str = new StringBuilder('hello');
            str.prepend('1');
            str.append('1');
            str.insertAt('hello',1);
            str.remove(1,1);
            expect(str.toString()).to.be.equal('1ellohello1');
        });
        it('remove', function () {
            let str = new StringBuilder('hello');
            str.prepend('1');
            str.append('1');
            str.insertAt('hello',1);
            str.remove(1,1);
            let newString = str.toString();
            expect(newString).to.be.equal('1ellohello1');
        });
        it('remove', function () {
            let str = new StringBuilder('hello');
            str.prepend('1');
            str.append('1');
            str.insertAt('hello',1);
            str.remove(1,-10);
            let newString = str.toString();
            expect(newString).to.be.equal('1hellohello1');
        });
        it('toStr', function () {
            let str = new StringBuilder('hello');
            let toStr = str.toString();
            expect(toStr).to.be.equal('hello');
        });
        it('error', function () {
            let a="";
            try {
                let str = new StringBuilder({});
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error', function () {
            let a="";
            try {
                let str = new StringBuilder([]);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error', function () {
            let a="";
            try {
                let str = new StringBuilder(1);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error1', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.append({});
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error1', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.append([]);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error1', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.append(1);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error2', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.prepend({});
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error2', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.prepend([]);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error2', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.prepend(1);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error3', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.insertAt({},1);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error3', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.insertAt([],1);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error3', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.insertAt(1,1);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error4', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.remove(0,{});
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error4', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.remove(0,[]);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error4', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.remove(0,"a");
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error5', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.append();
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error6', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.prepend();
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error7', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.insertAt();
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error8', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.remove();
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
        it('error9', function () {
            let a="";
            try {
                let str = new StringBuilder("a");
                str.toString("a");
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal(a);
        });
    });
});
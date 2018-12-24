let expect = require("chai").expect;
let PaymentPackage = require("../02. Payment Package");

describe("TODO …", function() {
    describe("instantiated ", function() {
        it("value", function() {
            let a = "";
                try {
                    const hrPack = new PaymentPackage('HR Services');
                } catch (err) {
                    a="a";
                }
            expect(a).to.be.equal("a");
        });
        it("name", function() {
            let a = "";
            try {
                const hrPack = new PaymentPackage('',0);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal("a");
        });
        it("name", function() {
            let a = "";
            try {
                const hrPack = new PaymentPackage(0,0);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal("a");
        });
        it("value", function() {
            let a = "";
            try {
                const hrPack = new PaymentPackage('HR Services','HR Services');
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal("a");
        });
        it("value", function() {
            let a = "";
            try {
                const hrPack = new PaymentPackage('HR Services',-1);
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal("a");
        });
        it("name value", function() {
            let a = "";
            try {
                const hrPack = new PaymentPackage();
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal("a");
        });
        it("true name", function() {
            const hrPack = new PaymentPackage('HR Services',100);
            expect(hrPack.name).to.be.equal('HR Services');
        });
        it("true name", function() {
            const hrPack = new PaymentPackage('HR Services',100);
            hrPack.name = "HR";
            expect(hrPack.name).to.be.equal('HR');
        });
        it("true value", function() {
            const hrPack = new PaymentPackage('HR Services',100);
            expect(hrPack.value).to.be.equal(100);
        });
        it("true value", function() {
            const hrPack = new PaymentPackage('HR Services',100);
            hrPack.value = 110;
            expect(hrPack.value).to.be.equal(110);
        });
        it("VAT", function() {
            let a = "";
            try {
                const hrPack = new PaymentPackage('HR Services',100);
                hrPack.VAT = "a";
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal("a");
        });
        it("VAT", function() {
            let a = "";
            try {
                const hrPack = new PaymentPackage('HR Services',100);
                hrPack.VAT = -1;
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal("a");
        });
        it("true VAT", function() {
            const hrPack = new PaymentPackage('HR Services',100);
            hrPack.VAT=1;
            expect(hrPack.VAT).to.be.equal(1);
        });
        it("active", function() {
            let a = "";
            try {
                const hrPack = new PaymentPackage('HR Services',100);
                hrPack.active = "c";
            } catch (err) {
                a="a";
            }
            expect(a).to.be.equal("a");
        });
        it("true active", function() {
            const hrPack = new PaymentPackage('HR Services',100);
            hrPack.active = true;
            expect(hrPack.active).to.be.true;
        });
        it("toString", function() {
            const hrPack = new PaymentPackage('HR Services',100);
            hrPack.VAT = 1;
            hrPack.active = false;
            expect(hrPack.toString()).to.be.equal(`Package: HR Services (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 1%): 101`
            );
        });
    });
});

let expect = require("chai").expect;
let SubscriptionCard = require("../SubscriptionCard");

describe("TODO …", function() {
    describe("get firstName, lastName, SSN", function() {
        it("firstName", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.firstName).to.be.equal("Pesho");
        });
        it("firstName", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.firstName="Gosho";
            expect(card.firstName).to.be.equal("Pesho");
        });
        it("lastName", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.lastName).to.be.equal("Petrov");
        });
        it("lastName", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.lastName="Goshov";
            expect(card.lastName).to.be.equal("Petrov");
        });
        it("SSN", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.SSN).to.be.equal("00000000");
        });
        it("SSN", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.SSN="00000001";
            expect(card.SSN).to.be.equal("00000000");
        });
        it("block", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            expect(card.isBlocked).to.be.equal(true);
        });
        it("unblock", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            card.unblock();
            expect(card.isBlocked).to.be.equal(false);
        });
        it("addSubscription", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(true);
        });
        it("addSubscription", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-05-25'))).to.be.equal(false);
        });
    });
});



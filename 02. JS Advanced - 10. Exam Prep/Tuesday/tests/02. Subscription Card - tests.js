let expect = require("chai").expect;
let SubscriptionCard = require("../02. Subscription Card");

describe("SubscriptionCard tests", function() {
    describe("Constructor tests", function() {
        it("Should be intialized correctly", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.firstName).to.be.equal("Pesho");
            expect(card.lastName).to.be.equal("Petrov");
            expect(card.SSN).to.be.equal("00000000");
        });
    });
    describe("isBlocked tests", function() {
        it("Should return false for new object", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.isBlocked).to.be.equal(false);
        });
        it("Should return true for blocked card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            expect(card.isBlocked).to.be.equal(true);
        });
        it("Should return false for unblocked card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            card.unblock();
            expect(card.isBlocked).to.be.equal(false);
        });
        it("Should return true for unblocked card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.unblock();
            card.block();
            expect(card.isBlocked).to.be.equal(true);
        });
    });
    describe("addSubscription tests", function() {
        it("Add correctly subscription", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card._subscriptions.length).to.be.equal(0);
            expect(card._subscriptions[0]).to.be.equal(undefined);
            expect(card._subscriptions).to.be.eql([]);
        });
        it("Add correctly subscription", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card._subscriptions.length).to.be.equal(1);
            expect(card._subscriptions[0].line).to.be.equal("120");
            expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'));
            expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'));
        });
        it("Add correctly subscription", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card._subscriptions.length).to.be.equal(1);
            expect(card._subscriptions[0].line).to.be.equal("120");
            expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'));
            expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'));
            expect(card._subscriptions[1].line).to.be.equal("*");
            expect(card._subscriptions[1].startDate).to.be.eql(new Date('2018-05-25'));
            expect(card._subscriptions[1].endDate).to.be.eql(new Date('2018-06-24'));
        });
    });
    describe("isValid tests", function() {
        it("isValid tests", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.isValid("120",new Date('2018-04-22'))).to.be.equal(false);
        });
        it("Blocked tests", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block();
            expect(card.isValid("120",new Date('2018-04-22'))).to.be.equal(false);
        });
    });
    describe("One day before tests", function() {
        it("One day before tests", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid("120",new Date('2018-04-21'))).to.be.equal(false);
        });
    });
    describe("One day after tests", function() {
        it("One day after tests", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid("120",new Date('2018-05-22'))).to.be.equal(false);
        });
    });
    describe("On start date after tests", function() {
        it("On start date after tests", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid("120",new Date('2018-04-22'))).to.be.equal(true);
        });
    });
    describe("On end date after tests", function() {
        it("Empty card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid("120",new Date('2018-05-21'))).to.be.equal(true);
        });
    });
    describe("For invalid line tests", function() {
        it("Empty card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid("121",new Date('2018-04-25'))).to.be.equal(false);
        });
    });
    describe("For invalid line tests", function() {
        it("Empty card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid("123123123",new Date('2018-04-22'))).to.be.equal(true);
        });
    });
    describe("For invalid line tests", function() {
        it("Empty card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid("123123123",new Date('2018-05-21'))).to.be.equal(true);
        });
    });
    describe("For invalid line tests", function() {
        it("Empty card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid("123123123",new Date('2018-04-21'))).to.be.equal(false);
        });
    });
    describe("For invalid line tests", function() {
        it("Empty card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid("123123123",new Date('2018-05-22'))).to.be.equal(false);
        });
    });
    describe("It should not change", function() {
        it("Empty card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.firstName = "Test";
            card.lastName = "Test";
            card.SSN = "Test";
            expect(card.firstName).to.be.equal('Pesho');
            expect(card.lastName).to.be.equal('Petrov');
            expect(card.SSN).to.be.equal('00000000');
        });
    });
});


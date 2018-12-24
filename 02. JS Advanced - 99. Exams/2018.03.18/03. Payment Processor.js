class PaymentProcessor {
    constructor() {
        this.types = ["service", "product", "other"];
        this.precision = 2;
        this.payments = [];
        if (arguments) {
            for (let arg of arguments) {
                this.setOptions(arg);
            }
        }
    }
    registerPayment (id, name, type, value) {
        if (id.length <= 0||typeof id !=="string"||this.payments.filter(e=>e.id === id).length>0) {
            throw new Error("invalid ID");
        }
        if (name.length <= 0||typeof name !=="string") {
            throw new Error("invalid name");
        }
        if (typeof value !=="number") {
            throw new Error("invalid value");
        }
        if (this.types.indexOf(type) < 0) {
            throw new Error("invalid type");
        }
        this.payments.push({id,name,type,value: value.toFixed(this.precision)});
    }
    deletePayment(id) {
        if (this.payments.filter(e=>e.id === id).length===0) {
            throw new Error("ID not found");
        }
        this.payments=this.payments.filter(e=>e.id !== id);
    }
    get(id) {
        if (this.payments.filter(e=>e.id === id).length===0) {
            throw new Error("ID not found");
        }
        let currentPayment = this.payments.filter(e=>e.id === id)[0];
        let output = `Details about payment ID: ${currentPayment.id}\n- Name: ${currentPayment.name}\n- Type: ${currentPayment.type}\n- Value: ${currentPayment.value}`;
        return output;
    }
    setOptions(options) {
        if (options.hasOwnProperty("types")) {
            this.types = options.types;
        }
        if (options.hasOwnProperty("precision")) {
            this.precision = options.precision;
        }
    }
    toString() {
        let balance = 0;
        for (let payment of this.payments) {
            balance+=Number(payment.value)*(this.precision*10)/(this.precision*10);
        }
        return `Summary:\n- Payments: ${this.payments.length}\n- Balance: ${balance}`;
    }
}
// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');
//
generalPayments.deletePayment('E028');
console.log(generalPayments.toString());
//
// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());

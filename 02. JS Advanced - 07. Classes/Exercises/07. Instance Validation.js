class CheckingAccount {
    constructor(clientId, email, firstName, lastName ) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(clientId) {
        if (/^\d{6}$/.test(clientId)) {
            this._firstName = clientId;
        } else {
            throw new TypeError("Client ID must be a 6-digit number");
        }
    }
    set email(email) {
        if (/^[A-Za-z0-9]+@[A-Za-z0-9.]+$/.test(email)) {
            this._email = email;
        } else {
            throw new TypeError("Invalid e-mail");
        }
    }
    set firstName(firstName) {
        if (/^[A-Za-z]{3,20}$/.test(firstName)) {
            this._firstName = firstName;
        } else if (firstName.length<3||firstName.length>20) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }  else {
            throw new TypeError("First name must contain only Latin characters");
        }
    }
    set lastName(lastName) {
        if (/^[A-Za-z]{3,20}$/.test(lastName)) {
            this._lastName = lastName;
        } else if (lastName.length<3||lastName.length>20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        } else {
            throw new TypeError("Last name must contain only Latin characters");
        }
    }
}
//console.log(new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov'));
//console.log(new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov'));
//console.log(new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov'));
console.log(new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov'));
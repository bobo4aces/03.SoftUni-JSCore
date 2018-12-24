function inheritingToString() {
    class Person {
        constructor(name,email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name,email,subject) {
            super(name,email);
            this.subject = subject;
        }
        toString() {
            let baseString = super.toString().slice(0,-1);
            return baseString+`, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name,email,course) {
            super(name,email);
            this.course = course;
        }
        toString() {
            let baseString = super.toString().slice(0,-1);
            return baseString+`, course: ${this.course})`;
        }
    }

    return {Person,Teacher,Student};
}
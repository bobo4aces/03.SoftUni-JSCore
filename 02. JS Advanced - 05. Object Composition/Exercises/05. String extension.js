(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (this.indexOf(str)!==0) {
            return str+this;
        }
        return this.valueOf();
    };
    String.prototype.ensureEnd = function (str) {
        if (this.indexOf(str)!==this.length-str.length) {
            return this+str;
        }
        return this.valueOf();
    };
    String.prototype.isEmpty = function () {
        if (this.valueOf() === "") {
            return true;
        }
        return false;
    };
    String.prototype.truncate = function (n) {
        if (n<4) {
            return ".".repeat(n);
        }
        if (this.length<=n) {
            return this.valueOf();
        }
        if (!this.includes(" ")) {
            return this.substring(0,n-3)+"...";
        }
        let tokens = this.split(' ');
        let result = tokens[0];
        for (let i = 1; i < tokens.length; i++) {
            if (result.length + tokens[i].length + 4 > n) {
                return result + '...'
            }
            result += ' ' + tokens[i]
        }
    };
    String.format = function () {
        let str = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            str=str.replace(`{${i-1}}`,arguments[i]);
        }
        return str;
    }
}());
let str = 'hello my string';
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(''.isEmpty());
str = 'the quick brown fox jumps over the lazy dog';
console.log(str = str.truncate(25));
console.log(str = String.format('The {0} {1} fox',
    'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
    'dog'));


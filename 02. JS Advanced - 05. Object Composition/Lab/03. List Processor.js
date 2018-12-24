function listProcessor(arr) {
    let processor = (function strProcessor() {
        let text = [];

        function add(str) {
            return text.push(str);
        }

        function remove(str) {
            return text=text.filter(w => w !== str);
        }

        function print() {
            return console.log(text.join(","));
        }

        return {add, remove, print};
    }());
    for (let element of arr) {
        let [command, str] = element.split(" ");
        processor[command](str);
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);
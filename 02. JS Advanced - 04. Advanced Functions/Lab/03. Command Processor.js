function commandProcessor(arr) {
    let closure = (function () {
        let text="";
        return {
            append: (value)=> text+=value,
            removeStart: (value)=>text=text.slice(Number(value)),
            removeEnd: (value)=>text=text.slice(0,text.length-Number(value)),
            print: ()=>console.log(text)
        }
    }());
    for (let element of arr) {
        let [command,value] = element.split(" ");
        closure[command](value);
    }
}
commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);
commandProcessor(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']
);

function argumentInfo() {
    let summary = {};
    for (let i=0; i<arguments.length; i++) {
        let type = typeof arguments[i];
        let value = arguments[i];
        console.log(`${type}: ${value}`);
        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }
    let sortedTypes = [];
    for (let currentType in summary) {
        sortedTypes.push([currentType,summary[currentType]]);
    }
    sortedTypes.sort((a,b)=>b[1]-a[1]).forEach(e=>console.log(e[0] + " = " + e[1]));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo({ name: 'bob'}, 3.333, 9.999);
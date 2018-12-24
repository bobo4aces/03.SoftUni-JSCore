function objectInheritance(arr) {
    let map = new Map();
    let commandExecutor = {
        create: function ([objName,inherits,objParentName]) {
            objParentName = objParentName ? map.get(objParentName) : null;
            let newObj = Object.create(objParentName);
            map.set(objName, newObj);
            return newObj;
        },
        set: function ([objName, key, value]) {
            let obj = map.get(objName);
            obj[key] = value;
        },
        print: function ([objName]) {
            let obj = map.get(objName);
            let objects = [];
            for (let key in obj) {
                objects.push(`${key}:${obj[key]}`)
            }
            console.log(objects.join(", "))
        }
    };
    for (let element of arr) {
        let commandParameters = element.split(" ");
        let action = commandParameters.shift();
        commandExecutor[action](commandParameters);
    }
}
objectInheritance(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);
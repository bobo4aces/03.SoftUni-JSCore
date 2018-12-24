function systemComponents (array) {
    let systems = new Map();
    for (let line of array) {
        let [system, component, subcomponent] = line.split(/\s\|\s/g);
        if (!systems.has(system)) {
            systems.set(system, new Map());
        }
        if (systems.get(system).get(component)===undefined) {
            systems.get(system).set(component,[]);
        }
        systems.get(system).get(component).push(subcomponent);
    }
    let sortedSystems = Array.from(systems.keys()).sort((a,b) => sortSystemsComparator(a,b,systems));
    for (let system of sortedSystems) {
        console.log(system);
        let sortedComponents = Array.from(systems.get(system).keys()).sort((a,b) => systems.get(system).get(b).length
            -systems.get(system).get(a).length);
        for (let component of sortedComponents) {
            console.log("|||"+component);
            for (let subcomponent of systems.get(system).get(component)) {
                console.log("||||||"+subcomponent);
            }
        }
    }

   function sortSystemsComparator (a,b,systems) {
       let aComponent = systems.get(a).size;
       let bComponent = systems.get(b).size;
       if (aComponent>bComponent) {
           return -1;
       }
       if (aComponent<bComponent) {
           return 1;
       }
       return a.toLowerCase().localeCompare(b.toLocaleLowerCase());
   }
}
systemComponents([
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"
]);
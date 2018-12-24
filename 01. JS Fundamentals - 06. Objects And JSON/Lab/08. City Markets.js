function cityMarket (array) {
    let townsWithProducts = new Map();
    for (let i=0; i<array.length; i++) {
        let [town, product, salesAndPrice] = array[i].split(/\s->\s/g);
        let [sales, price] = salesAndPrice.split(/\s:\s/g);
        if (!townsWithProducts.has(town)) {
            townsWithProducts.set(town,new Map());
        }
        let income = Number(sales)*Number(price);
        let oldIncome = townsWithProducts.get(town).get(product);
        if (oldIncome===undefined) {
            townsWithProducts.get(town).set(product,income);
        } else {
            townsWithProducts.get(town).get(product).set(income+oldIncome);
        }
    }
    for (let town of townsWithProducts.keys()) {
        console.log(`Town - ${town}`);
        for (let [product, income] of townsWithProducts.get(town)) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}
cityMarket([
"Sofia -> Laptops HP -> 200 : 2000",
"Sofia -> Raspberry -> 200000 : 1500",
"Sofia -> Audi Q7 -> 200 : 100000",
"Montana -> Portokals -> 200000 : 1",
"Montana -> Qgodas -> 20000 : 0.2",
"Montana -> Chereshas -> 1000 : 0.3"
]);
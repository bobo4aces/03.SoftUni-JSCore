function uncleScroogesBag (arr) {
    let total = 0;
    for (let element of arr) {
        let [type, amount] = element.split(" ").map(e=>e.trim()).filter(w=>w!=="");
        let length = amount.length;
        amount=Number(amount);
        if (type.toLowerCase()==="coin") {
            if (Number.isNaN(amount)) {
                continue;
            }
            if (!Number.isInteger(amount)) {
                continue;
            }
            if (amount<=0) {
                continue;
            }
            total+=amount;
        }
    }
    let gold = Math.floor(total/100);
    let silver = Math.floor((total-gold*100)/10);
    let bronze = total-(gold*100)-(silver*10);
    console.log(`gold : ${gold}`);
    console.log(`silver : ${silver}`);
    console.log(`bronze : ${bronze}`);
}
uncleScroogesBag(['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']);
uncleScroogesBag(['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1']);
uncleScroogesBag(['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1']);
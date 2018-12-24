function bitcoinMining (array) {
    let boughtBitcoins = 0;
    let firstDay = Number.NEGATIVE_INFINITY;
    let money = 0;
    for (let i=0; i<array.length; i++) {
        let currentGold = Number(array[i]);
        if ((i+1)%3 === 0) {
            currentGold-=currentGold*0.3;
        }
        money += currentGold*67.51;
        let currentBitcoins = 0;
        currentBitcoins = Math.floor(money/11949.16);
        if (currentBitcoins>=1) {
            money-=currentBitcoins*11949.16;
        }
        boughtBitcoins+=currentBitcoins;
        if (boughtBitcoins>=1&&firstDay===Number.NEGATIVE_INFINITY) {
            firstDay = i+1;
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (firstDay!==Number.NEGATIVE_INFINITY) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
//08:08-08:59
bitcoinMining(["100", "200", "300"]);
bitcoinMining(["50", "100"]);
bitcoinMining(["3124.15", "504.212", "2511.124"]);
function gladiatorExpenses(lostFights,helmetPrice,swordPrice,shieldPrice,armourPrice) {
    let totalSum=0;
    for (let i = 1; i <= Number(lostFights); i++) {
        if (i%2===0) {
            totalSum+=Number(helmetPrice);
        }
        if (i%3===0) {
            totalSum+=Number(swordPrice);
        }
        if (i%6===0) {
            totalSum+=Number(shieldPrice);
        }
        if (i%12===0) {
            totalSum+=Number(armourPrice);
        }
    }
    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}
gladiatorExpenses(
"7",
"2",
"3",
"4",
"5"

);
gladiatorExpenses(
"23",
"12.50",
"21.50",
"40",
"200"
);
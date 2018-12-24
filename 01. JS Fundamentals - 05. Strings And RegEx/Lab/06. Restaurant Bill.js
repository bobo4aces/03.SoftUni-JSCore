function printRestaurantBill (array) {
    let products = [];
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            products.push(array[i]);
        } else {
            totalSum+=Number(array[i]);
        }
    }
    console.log(`You purchased ${products.join(", ")} for a total sum of ${totalSum}`);
}
printRestaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
printRestaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);
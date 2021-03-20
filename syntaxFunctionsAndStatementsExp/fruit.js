function fruit(type, quantity, price) {
    let money = quantity / 1000 * price;
    console.log(`I need $${money.toFixed(2)} to buy ${(quantity/1000).toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);

console.log('----------');

fruit('apple', 1563, 2.35);
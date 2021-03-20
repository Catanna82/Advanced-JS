function storeCatalogue(data) {
    data.sort((a, b) => a.localeCompare(b));
    let result = {};
    for (const el of data) {
        const symbol = el[0];
        let product = el.split(' : ').join(': ');
        if (result[symbol] === undefined) {
            result[symbol] = [];
        }
        if (symbol.charCodeAt() >= 65 && symbol.charCodeAt() <= 90) {
            result[symbol].push(`  ${product}`);
        }
    }
    for (const el in result) {
        console.log(el);
        console.log(result[el].join('\n'));
    }
}

console.log(storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));
console.log(storeCatalogue([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
));


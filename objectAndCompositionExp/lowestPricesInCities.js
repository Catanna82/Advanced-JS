function lowestPrice(list) {
    let towns = {};
    for (let row of list) {
        let [town, product, price] = row.split(' | ');
        if (!towns[product]) {
            towns[product] = { town, price: Number(price) };
        } else {
            towns[product] = towns[product].price <= Number(price)
                ? towns[product]
                : { town, price: Number(price) }
        };
    }

    let result = [];
    for (const product in towns) {
        result.push(`${product} -> ${towns[product].price} (${towns[product].town})`)
    }
    return result.join('\n');
};

console.log(lowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]));

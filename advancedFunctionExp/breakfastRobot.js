function solution() {
    const recipe = {
        apple: [{
            name: 'carbohydrate',
            quantity: 1
        }, {
            name: 'flavour',
            quantity: 2
        }],
        lemonade: [{
            name: 'carbohydrate',
            quantity: 10
        }, {
            name: 'flavour',
            quantity: 20
        }],
        burger: [{
            name: 'carbohydrate',
            quantity: 5
        }, {
            name: 'fat',
            quantity: 7
        }, {
            name: 'flavour',
            quantity: 3
        }],
        eggs: [{
            name: 'protein',
            quantity: 5
        }, {
            name: 'fat',
            quantity: 1,
        }, {
            name: 'flavour',
            quantity: 1
        }
        ],
        turkey: [{
            name: 'protein',
            quantity: 10
        }, {
            name: 'carbohydrate',
            quantity: 10
        }, {
            name: 'fat',
            quantity: 10
        }, {
            name: 'flavour',
            quantity: 10
        }]
    }

    let stock = {
        carbohydrate: 0,
        protein: 0,
        fat: 0,
        flavour: 0
    }
    function haveMaterials(element, quantity) {
        for (const el of recipe[element]) {
            if (el.quantity * quantity >= stock[el.name]) {
                return `Error: not enough ${el.name} in stock`;
            }
        }
        return 'Success';
    }

    return function manager(param) {
        let [command, element, quantity] = param.split(' ');
        switch (command) {
            case 'restock':
                stock[element] += Number(quantity);
                return 'Success';
            case 'prepare':
                let isReady = haveMaterials(element, Number(quantity));
                if (isReady === 'Success') {
                    for (const el of recipe[element]) {
                        stock[el.name] -= el.quantity * Number(quantity);
                    }
                    return isReady;
                } else {
                    return isReady;
                }
            case 'report':
               return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    };
}

let manager = solution();
// manager("restock flavour 50");  // Success
// manager("prepare lemonade 4");  // Error: not enough carbohydrate in stock

['restock carbohydrate 10',
'restock flavour 10',
'prepare apple 1',
'restock fat 10',
'prepare burger 1',
'report'].map(v => console.log(manager(v)))


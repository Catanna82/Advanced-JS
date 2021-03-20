function juiceFlavor(input) {
    let result = [];
    let position = 0;

    for (const el of input) {
        let [juice, quantity] = el.split(' => ');
        let index = result.findIndex(v => v.juice === juice);
        let currentOrder;
        if (index !== -1) {
            result[index].quantity += Number(quantity);
            if(result[index].position === input.length && result[index].quantity >= 1000) {
                result[index].position = position;
                position++;
            }
        } else {
            if (Number(quantity) >= 1000) {
                currentOrder = position;
                position++;
            } else {
                currentOrder = input.length;
            }
            result.push({juice, quantity: Number(quantity), position: currentOrder});
        }
    }

    let print = result.filter((v) => v.quantity >= 1000).sort((a, b) => a.position - b.position).map((v) => {
       return `${v.juice} => ${parseInt(v.quantity / 1000)}`;
    })

    console.log(print.join('\n'));
}


// juiceFlavor(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']
// );

// console.log('-------------');

console.log(juiceFlavor(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789',
'Mango => 1200']
));

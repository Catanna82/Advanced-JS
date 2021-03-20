function cookingByNumbers(number, opr1, opr2, opr3, opr4, opr5) {
    let num = Number(number);
    switch (opr1) {
        case 'chop':
            num /= 2;
            console.log(num);
            break;
        case 'dice':
            num = Math.sqrt(num);
            console.log(num);
            break;
        case 'spice':
            num += 1;
            console.log(num);
            break;
        case 'bake':
            num *= 3;
            console.log(num);
            break;
        case 'fillet':
            num = num - (num * (20 / 100));
            console.log(num);
            break;
    }
    switch (opr2) {
        case 'chop':
            num /= 2;
            console.log(num);
            break;
        case 'dice':
            num = Math.sqrt(num);
            console.log(num);
            break;
        case 'spice':
            num += 1;
            console.log(num);
            break;
        case 'bake':
            num *= 3;
            console.log(num);
            break;
        case 'fillet':
            num = num - (num * (20 / 100));
            console.log(num);
            break;
    }
    switch (opr3) {
        case 'chop':
            num /= 2;
            console.log(num);
            break;
        case 'dice':
            num = Math.sqrt(num);
            console.log(num);
            break;
        case 'spice':
            num += 1;
            console.log(num);
            break;
        case 'bake':
            num *= 3;
            console.log(num);
            break;
        case 'fillet':
            num = num - (num * (20 / 100));
            console.log(num);
            break;
    }
    switch (opr4) {
        case 'chop':
            num /= 2;
            console.log(num);
            break;
        case 'dice':
            num = Math.sqrt(num);
            console.log(num);
            break;
        case 'spice':
            num += 1;
            console.log(num);
            break;
        case 'bake':
            num *= 3;
            console.log(num);
            break;
        case 'fillet':
            num = num - (num * (20 / 100));
            console.log(num);
            break;
    }
    switch (opr5) {
        case 'chop':
            num /= 2;
            console.log(num);
            break;
        case 'dice':
            num = Math.sqrt(num);
            console.log(num);
            break;
        case 'spice':
            num += 1;
            console.log(num);
            break;
        case 'bake':
            num *= 3;
            console.log(num);
            break;
        case 'fillet':
            num = num - (num * (20 / 100));
            console.log(num);
            break;
    }
}

    cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');

    console.log('--------');

    cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
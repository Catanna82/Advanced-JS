function cookingByNumbers(num, ...opr) {
    num = Number(num);
    const cooking = {
        num,
        opr,
        chop(num) {
            num /= 2;
            console.log(num);
        },
        dice(num) {
            num = Math.sqrt(num);
            console.log(num);
        },
        spice(num) {
            num += 1;
            console.log(num);
        },
        bake(num) {
            num *= 3;
            console.log(num);
        },
        fillet(num){
            num = num - (num * (20 / 100));
            console.log(num);
        }
    };
    let result;
    for (const oprs of opr) {
        cooking.oprs();
    }
    return cooking;
}

console.log(cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop'));

console.log('--------');

console.log(cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));
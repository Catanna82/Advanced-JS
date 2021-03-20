function aggregate(params) {
    let sum = 0;
    let inverse = 0;
    let concat = '';
    for (const el of params) {
        let num = Number(el);
        sum += num;
        inverse += 1 / num;
        concat += num;
    }

    console.log(sum);
    console.log(inverse);
    console.log(concat);
}

aggregate([1, 2, 3]);

console.log('---------');

aggregate([2, 4, 8, 16]);
function processOdd(params) {
    let filtred = params
        .filter((x, i) => i % 2 !== 0)
        .map(x => x *= 2).reverse();
    return filtred;
}

// console.log(processOdd([10, 15, 20, 25]));

console.log('------');

console.log(processOdd([3, 0, 10, 4, 7, 3]));
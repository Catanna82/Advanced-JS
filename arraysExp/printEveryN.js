function printElement(elements, number) {
    let result = [];
    for (let i = 0; i < elements.length; i ++) {
        if (i % number === 0) {
            result.push(elements[i]);
        }
    }
    return result;
}

console.log(printElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2));
console.log(printElement(['dsa',
'asd', 
'test', 
'tset'], 
2));
console.log(printElement(['1', 
'2',
'3', 
'4', 
'5'], 
6
));

console.log('-----------');

const solve = (arr, step) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % step === 0) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(solve(['5',
'20',
'31',
'4',
'20'],
2));
console.log('-----------');

const solution = (arr, step) => arr.filter((_, i) => i % step === 0);

console.log(solution(['5',
'20',
'31',
'4',
'20'],
2));
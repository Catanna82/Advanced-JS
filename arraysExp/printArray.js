function printArray(arr, sep) {
    return arr.join(sep);
}

console.log(printArray(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
));
console.log(printArray(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
));
console.log('------------------------');
const solve = (array, delimiter) => {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        result += i === array.length - 1 ? array[i] : array[i] + delimiter

    }
    return result;
}

console.log(solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
));
console.log(solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
));

console.log('------------------------');

const solve2 = (arr, delimiter) => arr.join(delimiter);

console.log(solve2(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
));
console.log(solve2(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
));

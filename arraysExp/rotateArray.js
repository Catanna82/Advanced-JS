function rotateArray(arr, index) {
    for (let i = 0; i < index; i++) {
        const element = arr.pop();
        arr.unshift(element);
    }
    return arr.join(' ');
}


console.log(rotateArray(['1',
    '2',
    '3',
    '4'],
    2
));

console.log('----');

console.log(rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
));
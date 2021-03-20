function addAndRemove(array) {
    let result = [];
    let number = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'add') {
            result.push(number);
        } else if (array[i] === 'remove') {
            result.pop()
        }
        number++
    }

    return result.length !== 0 ? result.join('\n') : 'Empty';
}

console.log(addAndRemove(['add',
    'add',
    'add',
    'add']
));
console.log('---------------');

console.log(addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']
));

console.log('---------------');

console.log(addAndRemove(['remove',
    'remove',
    'remove']
));


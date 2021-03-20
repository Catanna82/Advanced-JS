function sortingNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    let result = [];
    while(numbers.length) {
        result.push(numbers.shift());
        result.push(numbers.pop());
    }
    return result.filter(num => num !== 'undefined');
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
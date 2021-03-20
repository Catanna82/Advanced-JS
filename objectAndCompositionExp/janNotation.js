function janNotation(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i])) {
            result.push(Number(array[i]));
        }
        else {
            DoMath(result, array[i]);
        }
    }
    if (result.length >= 2) {
        console.log('Error: too many operands!')
    }
    else if (result.length !== 0) {
        console.log(result.toString());
    }
    function DoMath(numbers, operator) {
        if (numbers.length < 2) {
            console.log('Error: not enough operands!');
            // return;
        }
        if (operator === '+') {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] + numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        }
        else if (operator === '-') {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] - numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        }
        else if (operator === '*') {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] * numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        }
        else if (operator === '/') {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] / numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        }
    }
};

janNotation([
    3,
    4,
    '+'
]);
janNotation([
    5,
    3,
    4,
    '*',
    '-'
]);
janNotation([
    7,
    33,
    8,
    '-'
]);
janNotation([
    15,
    '/'
]);
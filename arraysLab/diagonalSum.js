function diagonalSum(matrix) {
    let sum = 0;
    let secSum = 0;
    let elIndex = 0;
    matrix.forEach((row) => {
        sum += row[elIndex];
        secSum += row[row.length - 1 - elIndex];
        elIndex++;
    });
console.log(sum + ' ' + secSum);
}

diagonalSum([[20, 40],
[10, 60]]);

console.log('-------');

diagonalSum([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);
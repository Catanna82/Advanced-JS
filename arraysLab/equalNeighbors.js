function equalNeighbors(matrix) {
    let result = 0;
    matrix.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el === row[j + 1]) {
                result++;
            }
            if (matrix[i + 1] && el === matrix[i + 1][j]) {
                result++
            }
        });
    });
    return result;
}

console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));
console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));
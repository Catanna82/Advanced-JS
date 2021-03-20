function magicMatrix(params) {
    let rowSums = [];
    let colSum = [];
    for (let i = 0; i < params.length; i++) {
        let row = params[i];
        let sum = row.reduce((result, curr) => (result + curr), 0);
        rowSums.push(sum);
    }
    //транспониране на матрица
    for (let i = 0; i < params.length; i++) {
        let newRow = [];
        for (let j = 0; j < params.length; j++) {
            newRow.push(params[j][i]);
        }
        let sum = newRow.reduce((result, curr) => (result + curr), 0);
        colSum.push(sum);
    }
    return rowSums.concat(colSum).every((el, i, arr) => el === arr[0]);
};

console.log(magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));

console.log(magicMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
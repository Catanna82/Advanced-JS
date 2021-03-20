function lastKNumbers(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let currentEl = result
            .slice(startIndex, startIndex + k)
            .reduce((a, b) => a + b, 0);
        result.push(currentEl);
    }

    return result;
    // let result = [1];
    // for (let i = 1; i < n; i++) {
    //     let lastK = result.slice(-k)
    //     let sum = 0;
    //     for (let num of lastK) {
    //         sum += num;
    //     }
    //     result.push(sum);
    // }
    // return result;

}

console.log(lastKNumbers(6, 3));
console.log(lastKNumbers(8, 2));
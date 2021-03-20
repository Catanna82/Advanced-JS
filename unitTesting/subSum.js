function sum(arr, startIndex, endIndex) {
    if (Array.isArray(arr) === false) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }
    return arr.slice(startIndex, endIndex + 1).reduce((a, c) => a + Number(c), 0);
}
// function test(actual, expected) {
//     if (actual === expected){
//         console.log('Pass');
//     } else {
//         console.log('Test failed');
//     }
// }

console.log(sum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sum([10, 'twenty', 30, 40], 0, 2));
console.log(sum([], 1, 2));
console.log(sum('text', 0, 2));

console.log(sum([10, 20, 30, 40, 50, 60], 3, 300) == 150);
console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(2) == 3.3);
console.log(sum(Number.isNaN([10, 'twenty', 30, 40], 0, 2)));
console.log(sum([], 1, 2) == 0);
console.log(Number.isNaN(sum('text', 0, 2)));


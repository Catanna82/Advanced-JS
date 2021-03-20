function sortArray(arr, type) {
    const map = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }
    return arr.sort(map[type]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
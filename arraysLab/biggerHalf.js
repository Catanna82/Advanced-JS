function biggerHalf(params) {
    let sorted = params.sort((a, b) => a - b);
    let half;
    if (sorted.length % 2 === 0) {
        half = sorted.slice(sorted.length / 2);
    } else {
        half = sorted.slice(Math.floor(sorted.length / 2));
    }

    return half;
}

// console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));


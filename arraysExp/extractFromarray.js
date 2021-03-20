function extractFromArray(arr) {
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     let el = arr[i];
    //     if (el >= result[result.length - 1] || result.length === 0) {
    //         result.push(el)
    //     }
    // }
    // return result;

    return arr.reduce((result, currentValue) => {
        if (currentValue >= result[result.length - 1] || result.length === 0) {
            result.push(currentValue);
        }
        return result;
    }, []);
}

console.log(extractFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
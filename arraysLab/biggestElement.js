function biggest(params) {
    let arr = conc(params);
    arr = arr.split(', ').sort((a, b) => b - a);
    let biggest = arr.shift()
    function conc(el) {
        let array = '';
        for (let i = 0; i < el.length; i++) {
            let element = el[i].join(', ');
            array = array + ', ' + element;
        }
        return array;
    }
    return biggest;

    // let biggest = Number.MIN_SAFE_INTEGER;
    // params.forEach(row => {
    //     // let currentMax = Number.MIN_SAFE_INTEGER;
    //     // row.forEach(num => {
    //     //     if (currentMax < num) {
    //     //         currentMax = num
    //     //     }
    //     // });
    //     // if (biggest < currentMax) {
    //     //     biggest = currentMax;
    //     // }
    // });
    // return biggest;

    // let biggest = params
    // .map(row => Math.max(...row))
    // .reduce((a, x) => Math.max(a, x), Number.MIN_SAFE_INTEGER);
    // return biggest;

    // let biggest = params.map(row => Math.max(...row));
    // return Math.max(...biggest);


}

console.log(biggest([[20, 50, 10], [8, 33, 145]]));
console.log(biggest([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));
console.log(biggest([[3, 5, 17, 12, 91, 5], [-1, 7, 4, 33, 6, 22], [1, 8, 99, 3, 10, 43]]));
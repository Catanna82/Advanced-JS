function sumFirstLast(params) {
    console.log(Number(params[0]) + Number(params[params.length - 1]));
}

sumFirstLast(['20', '30', '40']);

console.log('-----');

sumFirstLast(['5', '10']);
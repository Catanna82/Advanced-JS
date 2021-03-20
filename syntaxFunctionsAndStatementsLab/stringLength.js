function strLength(arg1, arg2, arg3) {
    let sum = arg1.length + arg2.length + arg3.length;
    let rounded = sum / 3;
    console.log(sum);
    console.log(Math.floor(rounded));

}

strLength('chocolate', 'ice cream', 'cake');

console.log('-------------');

strLength('pasta', '5', '22.3');
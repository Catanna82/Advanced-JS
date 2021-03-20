function wordUppercase(data) {
    let regex = /[A-Za-z]+/g;
    let words = data.match(regex);
    let result = [];
    for (let el of words) {
        result.push(el.toUpperCase());
    }
    console.log(result.join(', '));

//     let words = data
//         .split(/[' .,!?-]/g)
//         .filter(x => x !== '')
//         .map(x => x.toUpperCase())
//         .join(', ');

//         console.log(words);
}

wordUppercase('Hi, how are you?');

console.log('-----------');

wordUppercase('hello');
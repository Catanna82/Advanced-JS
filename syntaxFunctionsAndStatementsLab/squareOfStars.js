function square(size = 5) {
    for (let i = 0; i < size; i++) {
        console.log('* '.repeat(size));
    }
}



square(1);

console.log('-----');

square(2);

console.log('-----');

square(5);

console.log('-----');

square();
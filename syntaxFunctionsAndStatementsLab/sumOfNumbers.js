function sumOfNumbers(num1, num2) {
    let startNumber = Number(num1);
    let endNumber = Number(num2);
    let sum = 0;

    for (let i = startNumber; i <= endNumber; i++) {
        const element = i;
        sum += i
    }

    console.log(sum);

}

sumOfNumbers('1', '5' );

console.log('-------');

sumOfNumbers('-8', '20');
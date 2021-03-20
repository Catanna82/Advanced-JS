function sameNumbers(numbers) {
    let index = numbers.toString().length;
    let number = numbers.toString();
    let sum = 0;
    let isSame;
    const element = number[0];
    for (let i = 0; i < index; i++) {
        let nextEl = number[i];
        sum += Number(nextEl);
        if (element === nextEl) {
            isSame = true;
        } else {
            isSame = false
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);

console.log('------');

sameNumbers(1234);
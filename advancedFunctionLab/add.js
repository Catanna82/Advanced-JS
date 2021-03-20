function solution(a) {
    const num = a;
    return function add5(x) {
        const sum = num + x;
        return sum;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

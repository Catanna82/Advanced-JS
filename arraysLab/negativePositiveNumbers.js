function negativePositive(params) {
    let sorted = [];
    for (const el of params) {
        if (el < 0){
            sorted.unshift(el);
        } else {
            sorted.push(el);
        }
    }
    for (const el of sorted) {
        console.log(el);
    }
}

negativePositive([7, -2, 8, 9]);



negativePositive([3, -2, 0, -1]);
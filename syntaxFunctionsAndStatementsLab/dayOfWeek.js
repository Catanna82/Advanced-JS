function dayOfWeek(params) {
    let week = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 7
    }

    let result = week[params];
    if (result !== undefined) {
        console.log(result);
    } else {
        console.log('error');
    }

}

dayOfWeek('Monday');

console.log('--------');

dayOfWeek('Friday');

console.log('----------');

dayOfWeek('Invalid');

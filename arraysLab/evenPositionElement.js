function evenPosition(data) {
    let filtred = data.filter((x, i) => i % 2 === 0);
    return filtred.join(' ');
}

console.log(evenPosition(['20', '30', '40', '50', '60']));
// console.log(evenPosition(['5', '10']));
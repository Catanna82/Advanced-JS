function circleArea(params) {
    let type = typeof(params);
    let area;
    if (type === 'number') {
        area = Math.PI * (params ** 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circleArea(5);

console.log('-------');

circleArea('name');
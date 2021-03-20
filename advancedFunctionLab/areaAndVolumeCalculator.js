const solve = (area, vol, dataJSON) => JSON.parse(dataJSON).map(figure => ({
    area: area.call(figure),
    volume: vol.call(figure)
}));
// function solve(area, vol, obj) {
//     const a = JSON.parse(obj);

//     function calculate(obj) {
//         const areaObj = Math.abs(area.call(obj));
//         const volObj = Math.abs(vol.call(obj));
//         return {area: areaObj, volume: volObj}
//     }
//     return a.map(calculate);
// }
const example1 = `[
            {"x":"1","y":"2","z":"10"},
            {"x":"7","y":"7","z":"10"},
            {"x":"5","y":"2","z":"10"}
        ]`;

const example2 = `[
            {"x":"10","y":"-22","z":"10"},
            {"x":"47","y":"7","z":"-5"},
            {"x":"55","y":"8","z":"0"},
            {"x":"100","y":"100","z":"100"},
            {"x":"55","y":"80","z":"250"}
        ]`;

console.log(solve(area, vol, example1));
console.log(solve(area, vol, example2));

// function area() {
//     return this.x * this.y;
// };

// function vol() {
//     return this.x * this.y * this.z;
// };
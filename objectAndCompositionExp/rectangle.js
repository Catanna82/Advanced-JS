function rectangle(width, height, color) {
    function capitalize(params) {
        return params[0].toUpperCase() + params.slice(1);
    };
    let rect = {
        width: Number(width),
        height: Number(height),
        color: capitalize(color),
        calcArea() {
            return this.width * this.height;
        }
    }
    return rect;
};

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

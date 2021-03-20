class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set diameter(value) {
        if (typeof value != 'number') {
            throw new Error('Diameter must be a number!');
        }
        return this.radius = value / 2;
    }
    get diameter() {
        return this.radius * 2;
    }
    get area() {
        return Math.PI * (this.radius ** 2);
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);


// class Circle {
//     constructor(r) {
//         this.getR = () => {
//             return r;
//         };
//         this.setR = (value) => {
//             r = value;
//         };
//         this.getDiameter() = () => {
//             return r * 2;
//         };
//         this.setDiameter = (value) => {
//             return this.setR(value / 2)
//         };
//     }

//     get area() {
//         return Math.PI * (this.radius ** 2);
//     }
// }
function result() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error;
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            if (!(battery instanceof Battery)) {
                throw new TypeError();
            }
            this._battery = battery;
        }
        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError();
            }
            this._battery = value;
        }
        get battery() {
            return this._battery;
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            if (!(keyboard instanceof Keyboard)) {
                throw new TypeError();
            }
            this._keyboard = keyboard;
            if (!(monitor instanceof Monitor)) {
                throw new TypeError();
            }
            this._monitor = monitor;
        }
        set keyboard(value){
            if (!(value instanceof Keyboard)) {
                throw new TypeError();
            }
            this._keyboard = value;
        }
        get keyboard(){
            return this._keyboard;
        }
        set monitor(value){
            if (!(value instanceof Monitor)) {
                throw new TypeError();
            }
            this._monitor = value;
        }
        get monitor(){
            return this._monitor;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}


// let classes = result();
// let Computer = classes.Computer;
// let Laptop = classes.Laptop;
// let Desktop = classes.Desktop;

// expect(Object.getPrototypeOf(Desktop)).to.equal(Computer,"Incorrect inheritance.");
// expect(Object.getPrototypeOf(Laptop)).to.equal(Computer,"Incorrect inheritance.");

let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech', 70);
let monitor = new Monitor('Benq', 28, 18);
let desktop = new Desktop("JAR Computers", 3.3, 8, 1, keyboard, 'monitor');
// let computer = new Computer("JAR Computers", 3.3, 8, 1);
console.log(desktop.keyboard);
console.log(desktop.monitor);
// expect(desktop.manufacturer).to.equal("JAR Computers", 'Expected manufacturer did not match.');
// expect(desktop.processorSpeed).to.be.closeTo(3.3, 0.01, 'Expected processor speed did not match.');
// expect(desktop.ram).to.equal(8, 'Expected RAM did not match.');
// expect(desktop.hardDiskSpace).to.equal(1, 'Expected hard disk space did not match.');
// expect(desktop.keyboard).to.equal(keyboard, 'Expected keyboard did not match.');
// expect(desktop.monitor).to.equal(monitor, 'Expected monitor did not match.');


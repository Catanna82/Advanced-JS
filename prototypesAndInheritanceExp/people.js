function solve() {
    const TASKS = {
        JUNIOR: [' is working on a simple task.'],
        SENIOR: [
            ' is working on a complicated task.',
            ' is taking time off work.',
            ' is supervising junior workers.'
        ],
        MANAGER: [
            ' scheduled a meeting.',
            ' is preparing a quarterly report.'
        ]
    };
    class Employee {
        constructor(name, age, tasks) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = tasks;
            this._index = 0;
        }
        work() {
            if (this._index === this.tasks.length) {
                this._index = 0;
            }
            console.log(this.name + this.tasks[this._index]);
            this._index++;
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.JUNIOR);
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.SENIOR);
        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.MANAGER);
            this.dividend = 0;
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }
    return {
        Junior,
        Senior,
        Manager
    };
}

let result = solve();

expect(result.hasOwnProperty('Employee')).to.equal(true, "Solution didn't contain Employee constructor");
expect(result.hasOwnProperty('Junior')).to.equal(true, "Solution didn't contain Junior constructor");
expect(result.hasOwnProperty('Senior')).to.equal(true, "Solution didn't contain Senior constructor");
expect(result.hasOwnProperty('Manager')).to.equal(true, "Solution didn't contain Manager constructor");

var guy1parent = Object.getPrototypeOf(result.Junior.prototype);
var guy2parent = Object.getPrototypeOf(result.Senior.prototype);
var guy3parent = Object.getPrototypeOf(result.Manager.prototype);

expect(guy1parent === Object.prototype).to.equal(false, "Prototype chain was broken from Junior.");
expect(guy2parent === Object.prototype).to.equal(false, "Prototype chain was broken from Senior.");
expect(guy3parent === Object.prototype).to.equal(false, "Prototype chain was broken from Manager.");

expect(guy1parent === guy2parent).to.equal(true, "Junior and Senior aren't related (parent class not the same).");
expect(guy2parent === guy3parent).to.equal(true, "Senior and Manager aren't related (parent class not the same).");
expect(guy1parent === guy3parent).to.equal(true, "Junior and Manager aren't related (parent class not the same).");
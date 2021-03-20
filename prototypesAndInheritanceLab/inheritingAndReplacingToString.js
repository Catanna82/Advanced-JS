function result() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
            this.baseStr = super.toString();
        }
        toString() {
            return this.baseStr.slice(0, -1) + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email)
            this.course = course;
            this.baseStr = super.toString();
        }
        toString() {
            return this.baseStr.slice(0, -1) + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Person("Pesho",'Pesho@pesh.com');
console.log(p.toString());
let s = new Student('Jan', 'asde@abv.bg', 1)
console.log(s.toString());
// expect(p.toString()).to.equal('Person (name: Pesho, email: Pesho@pesh.com)');


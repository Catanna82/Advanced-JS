// class Person {
//     constructor(firstName, lastName) {
//         firstName = firstName;
//         lastName = lastName;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(value) {
//         const tockens = value.split(' ');
//         this.firstName = tockens[0];
//         this.lastName = tockens[1];
//     }
// }

// let person = new Person("Peter", "Ivanov");
// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        enumerable: true,
        get: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        set: function(value) {
            const tockens = value.split(' ');
            this.firstName = tockens[0];
            this.lastName = tockens[1];
        }
    })
};

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
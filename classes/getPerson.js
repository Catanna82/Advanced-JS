function solve() {
    class Person {
        constructor(firstName, lastName, age, email) {
            firstName && (this.firstName = firstName);
            lastName && (this.lastName = lastName);
            age && (this.age = age);
            email && (this.email = email);
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    ]
}


console.log(solve());
// First Name	Last Name	Age	Email
// Anna	Simpson	22	anna@yahoo.com
// SoftUni			
// Stephan	Johnson	25	
// Gabriel	Peterson	24	g.p@gmail.com

// let getPersons = result;
// let persons = getPersons('Anna', 'Simpson', 22, 'anna@yahoo.com');

// expect(Array.isArray(persons)).to.be.equal(true,
//     "getPersons() should return array");
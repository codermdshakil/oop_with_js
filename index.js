// Basic object using Curly Braket
const person = {};

// person.name = "Shakil Ahmed";
// person.email = "ahmedshakil0512@gmail.com";
// person.age = 24;

// Class 
class Person {
    constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    }
}

// make object using Person class
const p1 = new Person("Shakil Ahmed", "ahmedshakil0512@gmail.com", 20);
const p2 = new Person("Noyon Ahmed", "noyonrahman@gmail.com", 22);
const p3 = new Person("Nadim Hassan", "nadimhassan@gmail.com", 21);

console.log(p1);
console.log(p2);
console.log(p3);


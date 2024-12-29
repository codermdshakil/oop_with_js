// Basic object using Curly Braket
const person = {};

// person.name = "Shakil Ahmed";
// person.email = "ahmedshakil0512@gmail.com";
// person.age = 24;

// Class
class Person {

    // constructor
    constructor(name, email, age) {
        
        // attributes
        this.name = name;
        this.email = email;
        this.age = age;
    }

    // methods
    fun(){
        console.log("Hello Fun fun fun...")
    }

    changeName(newName){
        this.name = newName
    }

    sendEmail(msg){
        console.log("TO : ", this.email);
        console.log("Sending email");
        console.log("Message: ", msg);
        
    }

    print(){
        console.log(this);
    }

}

// make object using Person class
const p1 = new Person("Shakil Ahmed", "ahmedshakil0512@gmail.com", 20);
const p2 = new Person("Noyon Ahmed", "noyonrahman@gmail.com", 22);
const p3 = new Person("Nadim Hassan", "nadimhassan@gmail.com", 21);

// console.log(p1);
// console.log(p1.fun());
// console.log(p2);
// console.log(p3);
// p1.sendEmail("Hello vai valo asen?")

p1.changeName("Md. Shakil Ahmed");
p2.changeName("Md. Noyon Rahman");
p1.print();
p2.print();


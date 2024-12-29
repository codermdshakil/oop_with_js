class Person {

    constructor(name, email, age) {
        this._name = name;
        this._email = email; 
    }


    print(){
        console.log(this);
    }

    // overriding
    // when somewhere occurs string concatination then toString() function called
    toString(){
        return `Name : ${this._name}, Email: ${this._email}`
    }
}

const p1 = new Person("Shakil", "shakil@gmail.com")
const p2 = new Person("Noyon", "noyon@gmail.com")

 // when somewhere occurs string concatination then toString() function called
console.log(p1 + ' ');


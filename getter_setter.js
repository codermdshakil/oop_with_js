class Person {

    constructor(name, email, age) {
        this._name = name;
        this._email = email; 
    }

    // getter 
    get name(){
        return this._name
    }

    // setter
    set name(newName){
        this._name = newName
    }

    print(){
        console.log(this);
    }

}

const p1 = new Person("Shakil", "shakil@gmail.com")
const p2 = new Person("Noyon", "noyon@gmail.com")

p1.name = "Md. Shakil Ahmed"
console.log(p1.name);


// getter - use to get private properties value
// setter - use to set private properties value


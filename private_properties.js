class Person {

    constructor(name, email, age) {
        this._name = name;
        this._email = email; 
    }

    getName(){
        return this._name
    }

    setName(newName){
        this._name = newName
    }

    getEmail(){
        return this._email
    }

    setEmail(newEmail){
        this._email = newEmail
    }

}

const p1 = new Person("Shakil", "shakil@gmail.com")
const p2 = new Person("Noyon", "noyon@gmail.com")

// console.log(p1.getName());
p1.setName("Md. Shakil Ahmed")
// console.log(p1.getName());
// console.log(p2.getEmail());

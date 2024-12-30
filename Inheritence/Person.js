class Person {

    constructor(name, email,age){
        this._name = name
        this._email = email
        this._age = age
    }

    get name(){
        return this._name
    }

    set name(value){
        this._name = value
    }

    get email(){
        return this._email
    }

    set email(value){
        this._email = value
    }

    get age(){
        return this._age
    }

    set age(value){
        this._age = value
    }

    print(){
        console.log(this + " ");
    }

    toString(){
        return `Name : ${this.name}, Email: ${this.email}, Age: ${this.age}`
    }

    static isValid(){
        return age >= 18
    }

    static equal(p1,p2){

        if(p1.name != p2.name) return false
        if(p2.email != p2.email) return false

        return true
    }
}

module.exports = Person;

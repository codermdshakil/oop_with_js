const Person = require("./Person")

class Student extends Person {
    constructor(name, email, age, subjects, fee){
        super(name, email,age)
        this._subjects = subjects
        this._fee = fee
    }

    get subjects(){
        return this._subjects
    }

    set subjects(value){
        this._subjects = value
    }

    get fee(){
        return this._fee
    }

    set fee(value){
        this._fee = value
    }

    // method overriding - polymorphsm
    print(){

        super.print()
        console.log(`Subjects : ${this._subjects}, Fee : ${this._fee} `);
    }
}

module.exports = Student;




const Person = require('./Person')

const _subject = Symbol('Subject')
const _salary = Symbol('Salary')

class Teacher extends Person {
    constructor(name, email, age,subject, salary){
        super(name,email,age)
        this[_subject] = subject
        this[_salary] = salary
    }

    get subject(){
        return this[_subject]
    }

    set subject(value){
        this[_subject] = value
    }

    get salary(){
        return this[_salary]
    }

    set salary(value){
        this[_salary] = value
    }

    // method overriding - polymorphsm
    print(){

        super.print()
        console.log(`Subject : ${this[_subject]}, Salary : ${this[_salary]} `);
    }
}

module.exports = Teacher;




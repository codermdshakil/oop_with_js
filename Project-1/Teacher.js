
class Teacher {
    constructor(subject, salary){
        this._subject = subject
        this._salary = salary
    }

    get subject(){
        return this._subject
    }

    set subject(value){
        this._subject = value
    }

    get salary(){
        return this._salary
    }

    set salary(value){
        this._salary = value
    }
}

module.exports = Teacher;




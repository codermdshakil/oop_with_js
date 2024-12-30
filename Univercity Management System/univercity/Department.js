
const _id = Symbol('id')
const _name = Symbol('name')
const _subjects = Symbol('subject')
const _dean = Symbol('dean')
const _teachers = Symbol('teacher')

class Department {
    constructor({id, name, subjects, dean, teacher}) {
        this[_id] = id;
        this[_name] = name || '';
        this[_subjects] = subjects || [];
        this[_dean] = dean || null;
        this[_teachers] = teachers || [];
    }

    get id(){
        return this[_id]
    }

    get name(){
        return this[_name]
    }

    set name(value){
        this[_name] = value
    }

    get subjects(){
        return this[_subjects]
    }
    set subjects(value){
        this[_subjects] = value
    }

    get dean(){
        return this[_dean]
    }

    set dean(value){
        this[_dean] = value
    }

    get teachers(){
        return this[_teachers]
    }

    set teachers(value){
        this[_teachers] = value
    }

    toString(){
        return `
        Id : ${this[_id]},
        Name : ${this[_name]},
        Subject : ${this[_subject]},
        Dean : ${this[_dean]},
        Teacher : ${this[_teacher]},
        `
    }

}

module.exports = Department

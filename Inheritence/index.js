
const Person = require('./Person')
const Student = require('./Student')
const Teacher = require('./Teacher')


const p = new Person("Shakil Ahmed", "ahmedshakil0512@gmail.com",20)
const t = new Teacher("Jhankar Mahbub","jhankar1@gmail.com",36,"OOP",450000)
const s = new Student("Noyon Rahman","noyon@gmail.com",22 ,['Computer Science101', 'Math', 'English'],1000)


s.print();
t.print();



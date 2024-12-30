
const {Guardian, Student, Teacher} = require('./person')
const {Contact, Address} = require('./contact')
const {Department, Subject} = require('./univercity')

// create a Guardian
/**
 * Guardian ID 1
*/
const guardian = new Guardian(1,"Mr. Khaled", "Engineer",75000)
guardian.blood = "O+"
guardian.contact = new Contact({id:1, email:"khaled@test.com", phone:1231243, address:"Dhaka"})
guardian.contact.address = new Address({id:1, roadNo: '6B', city:"Dhaka City", region: "Dhaka",country:"Bangladesh", postalCode:1200})

/**
 * Student ID 1
*/
const student = new Student(1, "Rafiq", "ST001", guardian, 2000)
student.blood = "A+"
student.contact = new Contact({
    id:1, 
    email:"rafiq@gmail.com", 
    phone:5678912,
    alternativePhone:guardian.contact.phone,
    address:guardian.contact.address
})
// console.log(student.contact + " ");

/**
 * Department ID 1
*/

const department = new Department({
    id: 1,
    name: "SWE",
})

student.department = department

department.subjects = [
    new Subject(1, "Computer Fundamentals", 4),
    new Subject(2, "Introducing to Software engineering", 3),
    new Subject(3, "Software testing", 3)
]
const credits = student.department.subjects.reduce((a, b) => {
    a+= b.credit;
    return a;
},0)

// console.log("Total Credits = ",credits);


/**
 * Teacher
*/

const dean = new Teacher(1, "Mr. Biplop", department.subjects[0],"EMP1001")


dean.blood = "AB+"
dean.department = department
dean.salary = 100000
dean.contact = new Contact({
    id:3,
    email:"biplio@test.com",
    phone:'014234215',
    address: new Address({
        id:2,
        roadNo:'4043 AB',
        city:"Dhaka City",
        region: "Dhaka",
        country:"Bangladesh",
        postalCode: 1207
    })
})

department.dean = dean


const teacher1 = new Teacher(2, "Mr. Afjal", department.subjects[1],"EMP1002")

teacher1.department = department
teacher1.blood = "AB-"
teacher1.salary = 40000
teacher1.contact = new Contact({
    id:4,
    email:"afjal@test.com",
    phone:'01723412',
    address: new Address({
        id:2,
        roadNo:'4043 KB',
        city:"Dhaka City",
        region: "Dhaka",
        country:"Bangladesh",
        postalCode: 1206
    })
})



const teacher2 = new Teacher(3, "Mr. HM Nayem", department.subjects[2],"EMP1003")

teacher2.department = department
teacher2.blood = "AB-"
teacher2.salary = 40000
teacher2.contact = new Contact({
    id:4,
    email:"nayemhm@test.com",
    phone:'01623412',
    address: new Address({
        id:3,
        roadNo:'101 D',
        city:"Dhaka City",
        region: "Dhaka",
        country:"Bangladesh",
        postalCode: 1216
    })
})



department.addTeacher(dean)
department.addTeacher(teacher1)
department.addTeacher(teacher2)

// console.log(student.department);
student.department.teachers.forEach((teacher, index) => {
    console.log(`${index+1}, ${teacher.name} (${teacher.subject.name})`);
});

console.log(dean.department);



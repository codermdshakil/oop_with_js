
const {Guardian, Student} = require('./person')
const {Contact, Address} = require('./contact')

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
console.log(student.contact + " ");


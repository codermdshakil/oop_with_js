
const {Guardian} = require('./person')
const {Contact, Address} = require('./contact')

// create a Guardian
/**
 * Guardian ID 1
*/
const guardian = new Guardian(1,"Mr. Khaled", "Engineer",75000)
guardian.blood = "O+"
guardian.contact = new Contact({id:1, email:"khaled@test.com", phone:1231243, address:"Dhaka"})


guardian.contact.address = new Address({id:1, roadNo: '6B', city:"Dhaka City", region: "Dhaka",country:"Bangladesh", postalCode:1200})

// console.log(guardian.toString());
// console.log(guardian.contact.toString());
// console.log(guardian.contact+ '');
// console.log(guardian.contact.address.country);
// console.log(guardian.contact.phone);
// console.log(guardian.blood);

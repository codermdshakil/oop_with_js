
// Static methods we need when we need Class Properties or Methods without making any Object

class Person{

    // static properties  using static keyword
    static className = "PERSON"
    static PI = 3.1416

    constructor(name, email,age){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    // static method using static keyword
    static isValid(age){
        return age >= 18
    }

    static isEqual(p1,p2){

        if(p1.name != p2.name) return false
        if(p1.email != p2.email) return false
        
        return true
    }

    print(){
        console.log(this);
    }

    

}



// Static method, Properties access
// console.log(Person.PI);
// console.log(Person.className)

const testUser= {
    name : "Test",
    email : "test@gmail.com",
    age : 20
}
// TestUser is passed using is Age
// console.log(Person.isValid(testUser.age))


// if testUser age is greater or equal to 18 then we can create a object

// const p5 = null

if(Person.isValid(testUser.age)){
    p5 = new Person(testUser.name, testUser.email, testUser.age);
}
// console.log(p5);

const p1 = new Person("Shakil Ahmed", "ahmedshakil0512@gmail.com")
const p2 = new Person("Noyon Ahmed", "ahmedshakil0512@gmail.com")

// Object can't be same but we can make object same using these object's properties
// console.log(Person.isEqual(p1,p2)) // False


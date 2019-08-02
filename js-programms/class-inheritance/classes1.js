/**
 * 1.  Creates a function named User, that becomes the result of the class declaration. 
       The function code is taken from the constructor method (assumed empty if we don’t write such method)
 * 2.   Stores class methods, such as sayHi, in User.prototype.
 */

class  User{
    
    constructor(name,age,city,address){
        this.name=name
        this.age=age
        this.city=city
        this.address=address
    }
    displayName(){
        console.log(`Name of the user is:${this.name}`)
        console.log(`Age of the user is: ${this.age}`)
        console.log(`City of the user is:${this.city}`)
        console.log(`Address of the user is:${this.address}`)
        
    }
}

let user=new User('Harsh Chaurasiya',20,'Maihar','katiya kala')

user.displayName()







class User{

    constructor(name,age=18){
        this.name=name 
        this.age=age
    }

    get getName(){
        return this.name
    }
    get getAge(){
        return this.age
    }
    
    set uName(name){
        this.name=name
    }
    set uAge(age){
        this.age=age
    }
}

let user=new User('Harsh Chaurasiya')

console.log(user.getName)
console.log(user.getAge)
//set the value using setters
user.uName='harsh'
user.uAge=20
//display the using getters
console.log(user.getName)
console.log(user.getAge)

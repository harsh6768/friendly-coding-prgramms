
let user={
    firstName:'Harsh',
    lastName:'Chaurasiya',
    age:20,
    address:'Maihar'
}

//value should be same as the key of the user object 

let {firstName,lastName,age,address}=user 

console.log(firstName,lastName,age,address)


//We can store the value into the another variable 
let reactangle={
    length:200,
    breadth:100
}

let {length:l,breadth:b}=reactangle
console.log(l,b)

//way to assign the default value
let person={
    
    fName:'harsh',
    lName:'chaurasiya',
}

let {fName:f='Anonymous',lName:l1='Anonymous',age1=18}=person

console.log(f,l1,age1)

//to use the same key without using let
let a,b1 
({ a, b1 } = { a: 10, b1: 20 });
console.log(a,b1)





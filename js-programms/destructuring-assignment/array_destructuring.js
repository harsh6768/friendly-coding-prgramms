
let arr=['harsh','chaurasiya',20]

let [fName,lName,age]=arr 

let [a, b, c] = "abc".split('')

//let [a,b,c]='abc'

let [one, two, three]=new Set([1, 2, 3])


console.log(`Name of the user is: ${fName} ${lName}`)
console.log(`Age of the user is: ${age}`)
console.log(a)


//We can skip the any data
let [a1,,c1]=arr
console.log(c1)

//rest values using '...'
let arr1=[1,2,3,4,5,6,7,8]
let [v1,v2,v3,...rest]=arr1
console.log(rest.length)

//default values 
let [firstName='Anonymous',lastName='Anonymous']=['harsh']
console.log(firstName)
console.log(lastName)
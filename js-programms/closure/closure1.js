let name = "John";

function sayHi() {
  console.log("Hi, " + name)
}

name = "Pete";
sayHi() 

function makeWorker() {
    let name1 = "Pete"
  
    return function() {
      console.log(name1)
    };
  }
  
let name1 = "John"
  
  // create a function
let work = makeWorker()
  
  // call it
work()

let addValue=function* (x,y){ 
  
    yield (x+y) 
  
}
let sum=addValue(4,5)
console.log(sum)
console.log(sum.next())


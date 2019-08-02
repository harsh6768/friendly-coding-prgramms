function* generator1(num){
  
    let arr=[]
    let a=0,b=1,c=0
    yield a
    yield b
    let index=2
    while(c<num){
     c=a+b
     yield c
     a=b
     b=c
     index++
    }
  }
function* generator2(arr){
    let ar=arr
    let index=0
    
    while(index<arr.length){
       if(arr[index]%2===0){
         arr[index]=0
       }
       index++
    }
    console.log(ar)
    yield ar
}
  
function function3(num){
      //spead operator 
    let arr=[...generator1(num)]
    let ar1=[]

    for(let index=0;index<arr.length-1;index++)
     ar1.push(arr[index])
  
    console.log(ar1)
    let a=[...generator2(ar1)]
    
    console.log(a)
    
    return a
}

let value=function3(100)
console.log(value)
 
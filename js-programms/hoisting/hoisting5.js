function parent() {
    
    var hoisted = "I'm a variable";
    
    function hoisted(){ 
        return "I'm a function";
    } 
    return hoisted();  //because hoisted valiable ,It's not a function 

}
console.log(parent());

class Animal{

   constructor(name){
       this.name=name
       this.speed=0
   }

   run(speed){
       this.speed+=speed
       console.log(`Speed of the ${this.name} is ${this.speed}`)
    }
   stop(){
       this.speed=0
       console.log(`${this.name} is stopped!!!`)
   }
   
}
//Inheriting the Animal class
class Rabit extends Animal{
   
 constructor(name,earLength){
     super(name)  //call the parent constructor to set the value
     this.earLength=earLength
 }
  hide(){
       console.log(`${this.name} hides!!!`)    
   }
   //Method overloading 
   stop(){   //If rabbit stopped then we need to hide the rabbit
       //calling the parent method using super keyword
       super.stop()
       
       this.hide()

   }
}

//creating object
let rabbit=new Rabit('White Rabbit',10)

rabbit.run(50)
rabbit.stop()


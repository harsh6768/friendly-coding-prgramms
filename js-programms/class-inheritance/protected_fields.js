//if any class inherits the CoffeMachine then that class can access the protected class
class CoffeeMachine {
    //protected fields 
    constructor(_waterAmount=0){
        this._waterAmount=_waterAmount
    }
    
    setWaterAmount(value) {
      if (value < 0) throw new Error("Negative water");
      this._waterAmount = value;
    }
  
    getWaterAmount() {
      return this._waterAmount;
    }
  }
  
 let machine=new CoffeeMachine()
  machine.setWaterAmount(10)
  console.log(machine.getWaterAmount())
// 'use strict'
class CoffeeMachine {
    #waterAmount = 0;
    
    setWaterAmount(value) {
      if (value < 0) throw new Error("Negative water");
      this.#waterAmount = value
    }
  
    getWaterAmount() {
      return this.#waterAmount;
    }

  }
  
let machine=new CoffeeMachine()
machine.setWaterAmount(10)
console.log(machine.getWaterAmount())
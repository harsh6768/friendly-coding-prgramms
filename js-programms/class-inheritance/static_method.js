class Animal{

    constructor(name,speed){
        this.name=name
        this.speed=speed
    }

    run(speed=0){
        this.speed+=speed
        console.log(`${this.name} is running with speed of ${this.speed}`)
    }

    stop(){
        this.speed=0 
        console.log(`Rabbit Stopped`)
    }

    //static method 
    static compare(animal,otherAnimal){
        return animal.speed-otherAnimal.speed
    }
}

class Rabbit extends Animal{
    
    constructor(name,speed){
        super(name,speed)
    }

    hide(){
      console.log(`${this.name} is Spped due to speed of the rabbit!!!`)
    }

}

let rabbits=[
    new Rabbit('White Rabit',10),
    new Rabbit('Block Rabbit',5),
    new Rabbit('Block Rabbit',20),
]


//to sort the rabbit by their speed
rabbits.sort(Rabbit.compare)

rabbits[0].run()

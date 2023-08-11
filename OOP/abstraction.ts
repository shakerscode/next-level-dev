//interface

interface IVehicle {
   startEngine(): void;
   stopeEngine(): void;
   moveEngine(): void;
}

class Vehicle implements IVehicle{ 
    startEngine(): void {
        console.log("I'm staring engine");
        
    }
    stopeEngine(): void {
        console.log("I stopped engine");
        
    }
    moveEngine(): void {
        console.log("I moved engine");
        
    }
}

//abstract class

abstract class Vehicle2{
    abstract startEngine(): void 
    abstract stopeEngine(): void  
    abstract moveEngine():  void;
}

class Car extends Vehicle {
    startEngine(): void {
        console.log("engine started");
        
    }
    stopeEngine(): void {
        console.log("engine stopped");
        
    }
    moveEngine(): void {
        console.log("Engine moved");
        
    }
}
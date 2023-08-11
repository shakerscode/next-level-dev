 class Person { 
    takeNap():void{
        console.log("Slipping eight hours per day"); 
    }
 }


 class Student extends Person {
    takeNap():void{
        console.log("Slipping ten hours per day"); 
    }
 }
 class Developer extends Person {
    takeNap():void{
        console.log("Slipping five hours per day"); 
    }
 }
 
 function getName(params:Person) {
    params.takeNap()
 }

 const person = new Person()
 const person2 = new Student()
 const person3 = new Developer()

 getName(person)
 getName(person2)
 getName(person3)
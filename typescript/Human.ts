
class Human{
    name: string // public
    age: number

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    displayMyDetails(): void{
        console.log(`name : ${this.name} - age: ${this.age}`)
    }
}


class EmployeeHuman extends Human{
    
   constructor(name:string, age:number){
     super(name, age)
    }

    override displayMyDetails(): void{
        super.displayMyDetails()
        console.log(`child name : ${this.name} - age: ${this.age}`)
    }
}




let h1= new EmployeeHuman("Vaibhav", 24);
h1.displayMyDetails();



// let h1 = new Human("Vaibhav", 24);
// h1.displayMyDetails()
//console.log(h1.name);
// private, public and protected


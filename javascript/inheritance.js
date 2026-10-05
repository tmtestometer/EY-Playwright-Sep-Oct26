

class Animal{
    async sound(){
        console.log("Animal sound")
    }
}

class Dog extends Animal{
     async sound(){
        console.log("Dog sound")
    }
}

let h1 = new Dog();
h1.sound();


export class Human{
    static country = "India";
    constructor(name, age){
        this.name = name
        this.age = age
    }
    speak(content){
//        console.log(`${this.name} [${this.age}] - ${content}`)
        console.log(this.name + " [" +this.age+ "] - " + content);
    }
}


//h1 = new Human("Vaibhav", 30)

// let h1 =new Human();
// h1.name = "Vaibhav"
// h1.age = 34;

// let h2 =new Human();
// h2.name = "Pooja"
// h2.age = 30

// h1.speak("hello");
// h2.speak("Hey ! how r u ")
// console.log(Human.country)



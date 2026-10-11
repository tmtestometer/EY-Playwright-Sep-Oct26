
// abstract class Payment{
//     abstract pay(amount:number): void;

//     displayPayment(): void{
//         console.log("processing payments")
//     }
// }

// abstarct part = obejct not possoble

interface Payment1{
    pay(amount:number): void;
}

class UPIPayment implements Payment1{
    pay(amount:number):void{
        console.log("Paying "+amount+" using upi")
    }
    xyz():void{
        console.log("I am xyz")
    }
}

let h2:Payment1= new UPIPayment();
// h2.xyz();
h2.pay(1000);




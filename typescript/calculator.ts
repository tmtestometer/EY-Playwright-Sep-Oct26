

interface Calculator{
    add(a : number, b:number) : number;
}

interface ScienticCalculator extends Calculator{

}  

interface Payment{
    transactionId: number, 
    currency : string
}

interface PaymentAction{
    performSwiftPayment(payment: Payment): boolean;
}


class USPayment implements PaymentAction{
    performSwiftPayment(payment: Payment): boolean {
        // code to process switch in US region
        return true
    }
}

class UKPayment implements PaymentAction{
    performSwiftPayment(payment: Payment): boolean {
        // code to process switch in UK region
        return true
    }
}

class AsiaPayment implements PaymentAction{
    performSwiftPayment(payment: Payment): boolean {
        // code to process switch in Asia region
        return true
    }
}


let payment1 :Payment= {
    transactionId: 1768678684, 
    currency : "USD"
}
let pay = new UKPayment();
pay.performSwiftPayment(payment1);











class NormalCalculator implements Calculator{
    add(a: number, b: number) : number{
        return a + b;
    }
}

const cal1 : ScienticCalculator = {
   add(a: number, b: number) : number{
        return a + b;
    }
}

const normalCalculator: Calculator = {
    add(a: number, b: number) : number{
        return a + b;
    }
}


console.log(normalCalculator.add(10, 20));
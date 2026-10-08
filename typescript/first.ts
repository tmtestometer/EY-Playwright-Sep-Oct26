// let name1: string = "Vaibhav"
// console.log(name1);
// let age : number = 45;
// let check1 :  boolean = true;


// let name4 = "vaibhav";
// //name4 = 34;

// let name5: any = 45;
// name5 = "vaibhav"
// name5 = true

// let name6: number|string = 45;
// name6 = 10
// name6 = "vaibhav"
// //name6 = true


// let name7: "Vaibhav"|"Pooja"
// name7 = "Vaibhav"
// name7 = "Pooja"

// let status: "Success" | "Failure" | "Pending";


// let numbers: any[] = [10,20,30, "string"]

// let numbers1: Array<any> = [10,20,30, "string"]


// // Tuple

// // collection constant
// let emp : [number, string, number] = [101, "Vaibhav", 10000]

// console.log(emp[0])



// //unknown (perform typechecking and then perfomr that operation) and any (dont perform type check before any oprtation)

// let a : any = "vaibhav";
// a = 10;
// a = true;
// console.log(a.toUpperCase()); // error

// let b : unknown = "vaibhav";
// b = 10;
// b = true;
// if (typeof b === "string"){
//     console.log(b.toUpperCase()); // error
// }

// interface - json template

interface Employee {
    id : number; // mandatory
    readonly name : string;  // readonly but mandatory
    salary ?: number;   // optional 
}






const emp1 : Employee = {
    id: 101,
    name : "Vaibhav"    
}

emp1.salary= 13000;
//emp1.name = "Pooja"
//emp1.id = 103
//emp1.name = "Pooja";
//emp1.id = 102;
console.log(emp1);

function add(a:number, b:number) : number{
    let c = a + b
    return c;
}



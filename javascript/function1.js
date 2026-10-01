
// What is function 
// service 
// input 
// function logic body
// output 

//import { starPrinter, hashPrinter, percentPrinter } from "./printer.js";

// Technical terms 
// add = function name
// a, b = parameters
//{} - function body
// return type 

// let a = 10;

// function add(a, b){
//     let c = a + b;
//     return c;
// };

// let d = 10;
// let h = function jk(content){
//     console.log(jk);
// };

// let starPrinter = function printWithStar(content){
//     console.log("********************")
//     console.log(content)
//     console.log("********************")
// }

// add(d, h);


// Compile time polymorphism 
// add(int a, int b)
// add(string a, int b)
// add(int a, int b, int c)

// let vaibhav = sum;

// let d = vaibhav(10,30);
// console.log(d);

let starPrinter = (content) => {
    console.log("********************")
    console.log(content)
    console.log("********************")
}

let hashPrinter =  (content) => {
    console.log("#####################")
    console.log(content)
    console.log("####################")
}

let percentPrinter = (content) => {
    console.log("%%%%%%%%%%%%%%%%%%%%")
    console.log(content)
    console.log("%%%%%%%%%%%%%%%%%%%%")
}


function printMyName(content, vaibhav ){
    vaibhav(content)
}


printMyName("Vaibhav", starPrinter)
printMyName("Pooja", hashPrinter)
printMyName("Ruhi", starPrinter)
printMyName("Ruhi", percentPrinter)







// function are variable in javascript 



// subs, multiply 

// add(int a, int b)
// add(int a, long b)
// add(long a, int b)
// add(long a, long b)
// add(10,30)






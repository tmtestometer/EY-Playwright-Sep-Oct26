// Hoisting in js

// IG = not hoisted
// var = hoisted  
// let and const - hoist but TDZ (Temporal Dead zone)
// function - hoisted 

console.log(a);
var a = 10;

// {
//     {
//         let a = 10;
//         {

//         }
//     }
//     {
//         let a = 20;
//     }
// }



// Returning a function






function multipliar(multipliarNumber){
    
    let r = (num) => {
        let c = num * multipliarNumber;
        return c;
    }

    return r;
}


let double = multipliar(2);
console.log(double(45))


let triple = multipliar(3);
console.log(triple(50))


let tentimes = multipliar(10);
console.log(tentimes(65))


// function doubleMyValue(num){
//     let c = num * 2;
//     return c;
// }

// function tripleMyValue(num){
//     let c = num * 3;
//     return c;
// }


// let r = doubleMyValue(10);
// console.log(r);


// let g = tripleMyValue(10);
// console.log(g);


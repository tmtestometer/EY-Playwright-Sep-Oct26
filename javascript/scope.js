"use strict"

// strict js = var, let and const


//let a = 10;
{
    a = 20
    {
        console.log(a); // 20
        a = 30;
    }
}
 console.log(a); // 30
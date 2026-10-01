


// settimeout
// exeute your function after timeout period



 


// p1.then(() => {
//     console.log("Then called")
// }).catch(() =>{
//     console.log("catch called")
// })



// Promise 
// fulfilled - then
// rejected - catch
// pending 



function fill(element, text){
    let p1 = new Promise( (a, b) =>{
       setTimeout( ()=>{
            console.log("fill => " + element + "  -> " + text)
             a();
        } , 2000)
    })
        return p1;
}

function click(element){
     let p1 = new Promise( (resolve, reject) =>{
      setTimeout( ()=>{
        console.log("click => " + element )
        resolve();
    } , 5000)
    })
        return p1;
    
}

// promise way
click("login link").then(() => {
    return fill("username" , "user1");
}).then(()=>{
    return fill("password", "pass1")
}).then(() => {
    return click("login button")
}).then(() =>{
    console.log("Exeuction completed");
}).catch(() =>{

})


// asycn await 
async function testcase(){
    try{
        await click("login link");
        await fill("username" , "user1");
        await fill("password", "pass1");
        await click("login button");
    }catch(e){

    }
}










// click on login link
//enter username 
// enter password
// click login button








//printMyName();
// setTimeout( printMyName, 5000)
// setTimeout( printOtherName, 2000)

// total = 5 sec
// javascript triggers your functions
// javascript wotn wait to finish theri execution

// web designing lanaguge
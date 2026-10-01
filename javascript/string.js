
let str = "$ 12.4";
let parts = str.replace("$","").trim();
console.log(parts);
let amount = parseFloat(parts);
console.log(amount);



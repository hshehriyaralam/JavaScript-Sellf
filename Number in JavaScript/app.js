// Numbers in JS
// let score = 400;
// console.log(score);

//khud se Data Type define bh kar sakte hain Ye number 
let balance = new Number(7000568);
console.log(balance);

// To fixed => kisi number ko special decimal places tak round and format krne ke lye use krte hain  and ye always ek string return krta hai;
let fixedValue = new Number(400.12385);
console.log(fixedValue.toFixed(3)); // 400.124


// To Precision => kisi number ko specific number significant digits tak round and format karne ke lye use krta hai
let Precision = new Number(1234.56237)
console.log(Precision.toPrecision(5));


// Diffrence 
// toFixed(digits) => Number ko specified number of decimal places tak round krta hai ..Example : 123.456 toFixed(2) => 123.46
// toPrecision (significantDigits) => Numbers ko specified number of significant digits tak round karta hai .....Example : 123.456 toPrecision(4) => 123.5 


// tolocaleString  => value commas main braek kr dete hain, By Default US standard ko shpw krte hai inke ham apni country ke accourding bh kar sakte hai
let tenThousand = 1000000000;
console.log(tenThousand.toLocaleString('en-IN'));


// ********************** Summary 1 *******************
/* 
1)  Number define krne Time Data Type Define Kar sakte hain "new Number(400)"
2)  toFixed Number ko ek decimal point tak round kr dega 
3) toPrecision Number ke Integar kp round of karega 
4) tolacaleString Number Values ko Commas main define karega 
*/
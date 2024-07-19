// Numbers in JS
let score = 400;
console.log(score);

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


// tolocaleString  => value commas main braek kr dete hain, By Default US standard ko show krte hai inke ham apni country ke accourding bh kar sakte hai
let tenThousand = 1000000000;
console.log(tenThousand.toLocaleString('en-IN'));



// ********************** Summary 1 *******************
/* 
1)  Number define krne Time Data Type Define Kar sakte hain "new Number(400)"
2)  toFixed Number ko ek decimal point tak round kr dega 
3) toPrecision Number ke Integar kp round of karega 
4) tolacaleString Number Values ko Commas main define karega 
*/

// +++++++++++++++++++++++ Maths +++++++++++++++++++++++
// Math Libraray JS main By default ati hai
console.log(Math);


// -ve Negative Sign ko Positive krne ke lye use hOga But JO POsitive hai Wo Positive hi rahega
console.log(Math.abs(-10));
console.log(Math.abs(10));


// Decimal ko cancell kr ke round of deta hai
console.log(Math.round(8.4));
console.log(Math.round(9.9));


//Round Of upper value and lower value choose krne ke lye 
console.log(Math.ceil(8.2));// 0 se value bari hogi top value hi choose  hOga
console.log(Math.floor(8.9)); // Lowest value hi consume karega

// Find krna hai sab se lowest value 
console.log(Math.min(9,5, 5, 8, 9,1, 0));

// Find krna hai sab se Highest value
console.log(Math.max(9,10,50,0,89));


// Math.random() ki value hamesha 0 and 1 ke beech main, 0 bh ho sakti 1 bh ho sakti hai
console.log(Math.random());

// agar ham 10 se multiply kra dein to, isme ham range define kr rahe hain
console.log(Math.random()*10);

// value 0 nh ani chaia 
console.log(Math.random()*10 + 1);

// Best Practice hai ye Under Bracket
console.log((Math.random()*10) + 1 );



// agar ek hi value chaia to
console.log(Math.floor(Math.random()*10 + 1));

// Same Concept But Generatice Formula 
let min = 10;
let max = 50;
console.log(Math.floor(Math.random() * (max -  min + 1)) + min );




/* ***************** Summary ******************

1) Negative Value ko Positive KRne ke lye Math.abs() 
2) Decimal ko Cancell krne ke bd Sirf Integar Deta hai Math.round()
3) Decimal main Lowest value Consume karega Math.floor()
4) Decimal main Highest value Consume karega Math.ciel()
5) array main Huge value find karega Math.max()
6) array main lowest value find karega Math.min()
7) KOi Bh Random Value Generate karega 
8) But har baar value latest hoGi 
9) value provide karega 0 to 1 
10) isme Range BH Find Kr sakte hain

*/

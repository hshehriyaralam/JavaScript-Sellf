// Control flow

// IF Statement 
let Loggedin = true
if (Loggedin){
    console.log("Welcome");
}else{
    console.log("Chla JA");
}



// Comparison 
// <, >, <=, >=, ==, ===, !=, !==,


// Conditions Short Hand Notations
const range = 1000;
if (range >= 500){
    console.log("Range Perfect");
}
if (range >= 500) console.log("Short Hand Notations ");
// short hand not allowed multiple lines 
// Multiple line using , 
if (range >= 700) console.log("Multiple line allow using"), console.log("Comma ,");
// But InMature code not a best practice 



// Multiple Condition Check
const totalMarks = 800;
if( totalMarks >= 700){
    console.log("A-One");
}else if (totalMarks >= 500){
    console.log("A-Grade");
}else{
    console.log("Fail, Kyun nh ho rahi parhai");
}


// End Statement &&
// OR statement ||
const userPrice = 800;
const userCity = "karachi";
const userGendar = "female" 
if(userGendar === "male" || userGendar === "female"){
    console.log("Eligible");
}else{
    console.log("Not Eligible");
};


// switch => case 
const month = "Jan";
switch (month){
    case"Jan":
    console.log("Your month January");
    break;
    case"Mar":
    console.log("Your month March");
    break;
    case"April":
    console.log("Your month April");
    break;
    default: 
    console.log("Default case behaviour");
    break;

}


// Truethy values
// flasy values

const userEmail = "hshehriyarAlam@gmail.com"; //|  True
// const userEmail = ""; | false  
// const userEmail = []; //| true

if (userEmail) {
    console.log("Got User Email");
}else{
    console.log("Don't have user Email");
}


// Falsy values
// false, 0, -0, BigInt 0n, "", null, Undefined, NaN, 

// trutyh Values
// "0", 'false', " ", [], {}, function(){}  empty functions


// check Empty Array
if (userEmail.length === 0){
    console.log("Array is Empty");
}

// Check Empty Object
const obj4 = {};
// True method
if(Object.keys(obj4).length === 0){
    console.log("Object Convert to Array & Object lenght is 0");
}
// if(obj4.length === 0){
//     console.log("Onject  lenght is 0");
// } Not Run , False method

// Tricky keys , Just Gernal Knowledge
// false == 0; || True
// false == '' || True
// 0 == '' || True

// Logical Operators => && || Operators
//Nulish Coalescing Operators (??) : Null , Undefined

let val1;
// val1 = 5 ?? 10; || Output 5 Ayega 
// val1 = null ?? 10; || Null and undefined ko ignore kr ke values assign kr dega 
// val1 = undefined ?? 10; || same hare
// val1 = undefined ?? 10; 
val1 = undefined ?? 30 ?? 20; //  || Null and unedefine ke immediately jo value hogi wo assign kr dega





console.log(val1);



// Ternory Opertaors in Conditions
// Condition ? true : false => Syntax 
const IceSodaPrize = 120
IceSodaPrize > 100 ? console.log("Prize Under Budget") : console.log("Chal be Bikhari ");




/* ************************ Summary **********************
01) If Statment is Called Conditions 
02) Coparison methods =>  >=, <=, ==, ===, !==, !=== 
03) Conditions Shortcut Assign is Called "Conditions Short Hand Notaion" 
04) Syntax => If (condition) logic , like => if (range ===100)console.log("range Perfect")
05) Short Hand Notation are allowed only one line
06) But using declare comma can write multiple line of code 
07)  For Example : If (condition) logic , like => if (range ===100)console.log("range Perfect"),  console.log("Commas Allowed")
08) But Immature Code not a best Practice
09) Multiple Conditions Check => else if 
10) Logical OPerators Are Two 1) End Operator 2) OR Operators
11)  End Operator Symbol &&
12)  OR Operator Symbol ||
13) End Opeator Both Values must be true otherwise code run else value
14)  OR Operator One value of two is true if code run BUt both value false same behaviuor as a End Operator
15) Switch Similar IF Statement But Syntax is different 
16) Switch statmenr followed case method Like case1, case2 
17) Switch statement must be compulsory "break" keyword
18) Truthy and falsy values exsist in Java Script
19) Truthy Values give is : "0", 'false', " ", [], {}, function(){}  empty functions
20) Falsy values given is : false, 0, -0, BigInt 0n, "", null, Undefined, NaN, 
21) Checking Empty Array [] => if ( arrayName.lenght === 0){conditions}
22) Checking Empty Object {} => if (Object.Keys(objName){Conditions}
23) Tricky Question : false == 0; || True
24) Tricky Question : false == '' || True
25) Tricky Question : 0 == '' || True
26) Logical OPerators (&&, ||) child :  Nulish Coalescing Operators (??)
27) Nulish operators ignored null and undefined value 
28) print immediate null and undefined next value
29) Ternory Operaors in COnditions( Condition ? true : false => Syntax )
30) for Example : IceSodaPrize > 100 ? console.log("Prize Under Budget") : console.log("Chal be Bikhari ");
*/






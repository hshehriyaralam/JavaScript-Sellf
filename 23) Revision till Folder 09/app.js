// +++++++++++++++++++[Let, Var and Const]; +++++++++++++++++++++++++++++++
let userName = "SHahmeer";
a// declaration & Initialization

 let lastName ;
//  just 

 "Shahmeer"
 // just Initializarion 

 let firsName = "Shehriyar Alam";
 firsName = "Hafiz Shehriyar Alam"
 // Re-initialization

// three Keywords in JAva Script
//1) var :  ES5 Version
//2) Let : ES6 version
//3) const : ES6 version

//  *)  var allowed to re-declaration & Re-initialization
var  stdSMIT = "Ubaid";
var stdSMIT = "Wasiq";

var stdAI = "Aliyan";
stdSMIT = "Khubaib";
// var Global and Function Scope

// *) let allowed to only Re-initalization not a declaration
let stdSWCC = "Asif";
stdSWCC = "Ahmad";

let stdPecific = "Izhan";
// let stdPecific = "Shahnawaz"; || Error
// let block {} Scope

// *) const aren't allowed to Re-Declaration and Re-initilization
const StdDehli = "Arshad";
// StdDehli = "Umar"; \\ console Error
// console.log(StdDehli);


const stdFormen = "Abdul Rehman";
// const stdFormen = "Ahtasham" \\Error
// const Block {} Scope 


stdCity = "Karachi";
console.log(stdCity);

// variable can declare without keyword But is not Good practice

/*
******************************** Summary **************************
// +++++++++++++++++++[Let, Var and Const]; +++++++++++++++++++++++++++++++
01) var keyword ES5 version of Java SCript
02) Let and const ES6 version of Java Script
03) var Global and Function Scope
04) let & const Block Scope
05) var allowed Re-declaration and Re-initilaztion
06) let allowed only Re-initialization
07) const aren't allowed Re-declaraion and Re-initalization
08) We can declare variable without keyword But isn't good Practice
*/

// +++++++++++++++++++++++++++++++++ [Data Types] +++++++++++++++++++++++++

// JS Engine hide in Browser 
// Code Readability should be high

// Data Types 
// *) Numbers
let ageCalculate = 20;
ageCalculate = Number(30)
// Numbers Data Types use to 2 to power 53 
// ek range hai memory ki jitna Memery Address main milta hai

// *) If we declare Huge value must be use BigInt Data Types 
// Jb bohat zyada bari value aaa jaye number  main to BigInt Data Types Use Karenge 

let stdAgeCalculate = BigInt(3464634);
console.log(typeof BigInt);
// BigInt Data Types Functions

// *) String
// String Data Type assign with Double "" and Single Qoutation ''

let ICCRules = "One Over 6 Ball";
ICCRules = String("two Batsman in Pavelian");


 // *) Bolean 
 // Boolean Data Types can assign True and false value

 let userPUBGisActive = "true";
 userPUBGisActive = Boolean("false");
 

// *) null
// nul stand Alone value
let FreeFirePoints = null;
console.log(typeof FreeFirePoints);
// null Data Type is Object

// *) Undefined
let PUBGPoints = undefined
console.log(typeof PUBGPoints);
// Data Types is Undefined

// *) Symbol
// Symbol use always unique values
let SirQasinm = Symbol("Khizr");
console.log(SirQasinm);
// Data Types is Symbol

// Object 
// Comming Soon
//All Data Types
// Numbers, BigInt, String, Symbol, Boolean, null, Undefined, Objects

/*
******************************** Summary **************************
// +++++++++++++++++++++++++++++++++ [Data Types] +++++++++++++++++++++++++
01) JS Engine hide in Browser 
02) Code Readability should be high
03) Numbers Data Types use to 2 to power 53 
04) If we declare Huge value must be use BigInt
05) BigInt Data Types is function
06) String assign using "" & ''
07) Boolean Data Types can assign True and false value
08) null stand alone value 
09) null Data Types is Objects
10) undefined type of undefined
11) Symbol use always unique values
12) Symbol data types is symbol
13) All Data Types => String, Number, Boolean, BigInt, null, Undefined, Symbol

*/
// +++++++++++++++++++++++++++++++ [Data Type Conversion] +++++++++++++++++++++++++++++++++

// *) String Convert to Number
let gameScore = "33";
console.log(typeof gameScore);
console.log(typeof (gameScore));

let convert = Number(gameScore)
console.log(convert);
console.log(typeof convert);

 // *) Number Convert to String
 let gameScore2 = 33;
 let convertNumber = String(gameScore2);
//  let convertNumber = gameScore2.toString()
 console.log(typeof convertNumber);

 // *) String to Number
 let gamescore3 = "33";
 let gameScore4 = Number(gamescore3)
 console.log(gameScore4);
 console.log(typeof gameScore4);

 let gamescore5 = "33abc";
 let gameScore6 = Number(gamescore5)
 console.log(gamescore5);
 console.log(typeof gamescore5);
 // Number main convert krne ke bd Data Type Number Bhale value NaN ho

 // *) Convert Number to Boolean
 // 1 => true
 // 0 => false
 // "" => false,
 // "Sherry" => true

let Number1 = 1;
let convedtBoolean1 = Boolean(Number1);
console.log(convedtBoolean1);
console.log(typeof convedtBoolean1);

let Number0 = 0
let convertBoolean2 = Boolean(Number0);
console.log(convertBoolean2);
console.log(typeof convertBoolean2);

let emptyString = "";
let convartBoolean3 = Boolean(emptyString);
console.log(convartBoolean3);
console.log(typeof convartBoolean3);

/*
******************************** Summary **************************
+++++++++++++++++++++++++++++++ [Data Type Conversion] ++++++++++++++++++++++++++++++
01) String Convert to Number => Number(string value)
02) Number Convert to String => stringvalue.toNumber()
03) All  Data Types Convert into any Data Type Syntax is same
04) If False value string Convert to into Number and any Data Type. Data Type Convert Easily but Value is NaN
05) Convert Number to Boolean in JS Some method are given 
06) 1 Convert to Boolean => true
07) 0 Conver to Boolean  => False
08) "" Empty String Convert to Boolean => false
09) "Sherry " => true
 */

// ++++++++++++++++++++++++++++[String to Number]+++++++++++++++++++++++++++++++

//  *) assign -value
let value = 3 
let negtiveValue = -value;
console.log(negtiveValue); // -3 

// *) Opeerators
// 2-2, 2+2, 2*2, 2/2, 2**2(power), 2%2 most of the time use DSA

// *) two string Concate
// let str1 = "SHerry";
// let str2 = "khan";
// let str3 = str1 + str2;
// // new update 
// let str4 = `${str1} and ${str2}`
// console.log(str4);


// *) Tricky Questions
console.log("1"  + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log("1" + (2 + 2));
console.log(1 + 2 + "3");
console.log(true);
console.log(+true);
console.log(false);
console.log(+false);
console.log("");
console.log(+"");


// *)Postfix and Prefix 
// Postfix  pehle print phr add
// Prefix pehle add phr print
let gameCount = 100;
gameCount++;
++gameCount;
console.log(gameCount++);
console.log(gameCount);
console.log(++gameCount);

// PostFix =>  a++
// Prefix => ++a
/*
******************************** Summary **************************
++++++++++++++++++++++++++++++++++ [String to Number] ++++++++++++++++++++++
01) ALl Opeartors
02) Two strings are concate not a add Both of them
03) String Interpulation use Back tick and Dollar sign => `${variable name }`
04) ("1" + 2) => 12
05) (1 + "2") => 12
06) (1 + 3 + "3") => 43
07) ("3" + 2 + 2) => 322
08) ("3" + (2 + 2)) =>34
09) "" => empty
10) +"" => 0
11) PostFix and PreFix | Post Increment & Pre Increment 
12) Post Increment | Post Fix => a++
13) Pre Increment | PreFix => ++a
14) Post Increment | Post Fix => Print First then add
15) Pre Increment | PreFix => add first then print
*/

// +++++++++++++++++++++++++++++ [Comparison Of Data Types] ++++++++++++++++++++++++++++++++++

// *) Some Comparison
// console.log(2 > 1);  // true
// console.log(2 >= 1); // true
// console.log(2 <= 1); // false 
// console.log(2 != 1); // true

// *) Comparison Different Data Types
// console.log("2" > 1); // true
// console.log("02" > 1); // Empty
// Always Data Type is same with the Time of Comparison

// *) null Comparison 
//  console.log(null > 0);
//  console.log(null < 0);
//  console.log(null == 0);
//  console.log(null >= 0);

// *) Undefined Comparison
// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// Undefined Comparison values always false 


/*
******************************** Summary **************************
++++++++++++++++++++++++++++++++++++++ [Comparison Of Data Types] +++++++++++++++++++++++
01) Different Data Types aren't compare ... always Same Data Types with Time of Comparison
02) null Comparison output false becuase null seprate value
03) Undefined Comparison values always false 
*/ 



// ************************************[Data Type Summary ] *******************

// *) There are two Data Types 1) Primitive 2) Non-Primitive
// Primitive Call By value 
// Non-Primitive Data Type Call By Reference 
// 7 Primitive : String , Number , Boolean, null, Undefined, Symbol, BigInt;
// 3 Non-Primitive : Object , Array, Function 



// Primitives 
// // String 
// let stringData = "Primitive Data Type";
// console.log(typeof stringData);

// Number 
// let numberData = 7384288;
// console.log(typeof numberData);

// // let symbolData = Symbol("35216");
// let symbolData = Symbol(896943);
// console.log(symbolData);
// console.log(typeof symbolData);
// // Symbol Use always uniqness
// let symbolData2 = Symbol(896943);
// console.log(symbolData == symbolData2); // False 

// //BigInt 
// // just add n in last value 
// let bigIntData = BigInt(3874854132787587534n);
// let bigIntData2 = 686239868326162n
// console.log( typeof bigIntData2);
// // not a usable 


// Non-Primitive 
// // Array
// let arrData = ["karahi", "Lahore"]
// console.log(typeof arrData);

// Objects
// let objData = {
//     firsName : "Shahmeer",
//     lastName : "Sherry"
// }
// console.log(objData);


// // Functions 
// function funcData (){
//     console.log("Non-Primitive Data Types");
// }
// funcData()
// array and Object Data Type is Object
// But Function Data Type is Function It's mean "Object Function"
/*
******************************** Summary **************************
// ********************** [Data Type Summary ] ******************************************
01) There are two Data Types 1) Primitive 2) Non-Primitive
02) Primitive : Call By Value
04) Non-Primitive : Call  By Reference
05) 7 Primitive Data Types (String, Number, Boolean, Symbol, BigInt, null, Undefined)
06) 3 Non-Primitive Data Types (Object, Function, Array)
07) Symbol use always uniqness
08) BigInt > Just add "n" in last value
09) Array and Objects Data Types is Object
10) Function Data Types is Function But Object Funtion 
*/

// +++++++++++++++++++++++++++++++++++ [Stack & Heap Memory] +++++++++++++++++++++++++++++++++++

// How to work memory in JS
// Starting main memory ko reserve krna end free krna 2ono programmer kam hota ta like C Language 
// But Current Modern language main memory accessable provide nh hota sb aoutomatically gardbrige hota hai


// *) Modern Language => Rust, Go(Golang), swift, kotlin,TpesSript
// *) Mid Modern Language => Java, Java Script, Python, C#, PHP, Ruby
  
// Data Types || 1) primitive 2)Non-primitive  
// Memory Types || 1) Stack 2) Heap 

// Stack memory Primitive Data Types hai
// Heap Memory Non-primitive Data Types hai


// Stack Memory main memory ki copy milti hai
// Heap Memory main Memory ka Reference mile ga 

// Check Stack Memory 
// number, Strings, Boolean, null, undefined,  BigInt
// let var1 = 23;
// console.log(var1);

// let var2 = var1;
// var2 = 25;

// console.log(var2);
// console.log(var1);

// var1 ko value de kr var2 kr equal kr dya jab ke and var2 ko value de di jb ke actuall var1 change nh hua becuase ye stack memory hai... isme hamien copy milti hai

// ye rule all primitive Data types main apply hOga like strings, booleans, Nulls, undefined etc



// Check Heap Momory
// let StdOne = {
//     name : "Shehriyar ALam",
//     Email : "Shahmeer@gmail.com"
// }
// console.log(StdOne);
// let StdTwo = StdOne
// StdTwo.Email = "hshehriyarAlam@gmail.com";
// StdTwo.name = "Shahmeer";
// console.log(StdTwo);
// console.log(StdOne);

// jb StdOne ko email and name assign kr dya .. StdTwo ko STdOne Ke equal Kr dya phr Dono Value ko change kr dya ... iski Actuall value bh change ho gai... becuase ye Heap Memory hain and Heap memory main hamien Reference Milta hai

/* ++++++++++++++++++++++++++++++++++++++++++++++ Summary +++++++++++++++++++++++++++++++++++++ 
01) There are two Types Of Memory  1) Stack 2) Heap
02) Stack Memory get memory copy
03) Heap memory get Memory Reference
04) Stack Memory = Primitive Data Types (Call by value)
05) Heap Memory = Non-Primitive Data Types (Call by Reference)
06) Primitive Data Types : Strings, Number, Boolean, Symbol, null, undefined, BigInt
07) Non-primitive Data Types : Array, Object< Functions
*/






// **************************************Strings in JS*****************************************

// String Primitive Data Types hai
// String ko Declare karte hain Single and Double Qoutation se 
// let str1 = 'shah'
// let str2 = "Meer"

// Numbers APas main add HOte hain But Strings Concate Hote hain
// Strings Concatenation 
// let str3 = "Shehriyar";
// let str4 = "Alam";
//  let strCombined = str3 + str4;
//  console.log(strCombined);

 // String InterPulations 
//  let strCombined2 = `${str3}  ${str4}`
//  console.log(strCombined2);

 // 2nd Way to  Declare Strings 
//  let str5 = new String("Shahmeer");
//  console.log(str5);

 // access property through value key
//  console.log(str5[0]);
 //becuase Strings behave as a array in JS

 // See Charachter Positions
//  console.log(str5.charAt(5)); // S

// Get Index Number 
// console.log(str5.indexOf("h"));

// Get Copy Strings
// console.log(str5.substring(0, 4));

// console.log(str5.slice(4, 0));

// Extra Spaces delete
// let str6 = "                      Syed"
// console.log(str6.trim());

// Replace values 
// let str8 = "Shehriyar-Alam"
// console.log(str8.replace("-", " "));

// Access value Check
// console.log(str8.includes("h"));


/* 
******************************** Summary ************************************
01) String Non-primitive Data Type 
02) Two String not Addition each other just Concate
03) String Behave as a array in JS
04) How to see Character position : str1.chAr(4)
05) How to Get index number : str1.indexOf(h)
06) How to get String Copy : subString(0,4)
07) How to Delete Extra Spaces str1.trim()
08) How replace values : str1.replace("-", "0")
09) How to check vllues in String : str1.includes("Shahmeer")
*/



// ++++++++++++++++++++++++++++++++++++ Numbers in JS ++++++++++++++++++++++++++++++++++++++
// Primitive Data Type Number
// Number Declare 
// let num1 = new Number(89);
// console.log( typeof num1);

//Round off  and Formate Decimal Values
// let num2 = new Number(654.89989);
// console.log(num2.toFixed(3));
// . se pehle ki value ko round karega 

// Round Off and Formate specific decimal values
// let num3 = new Number(1234.7689);
// console.log(num3.toPrecision(5));


// Add commas in 100 
// let num4 = 100000000000000000;
// console.log(num4.toLocaleString('en-IN'));

//-ve value Convert to +ve 
// let num5 = -10;
// console.log(num5);
// console.log(Math.abs(num5));
// But +ve value always +ve 
// let num6 = 20;
// console.log(Math.abs(num6));

// Cancell all Decimal values 
// let num7 = 8.9;
// console.log(Math.round(num7));

// Choose Round Of upper and Lower values 
// let num8 = 8.2;  // Use to Upper Case  and value Greter Than inn 0
// console.log(Math.ceil(num8));
// let num9 = 8.9; // Use Lower Case 
// console.log(Math.floor(num9));

// Find Lowest Value
// let num10 = (2,3,9,9,89,2,56,78)
// console.log(Math.min(num10));


// Find Highest value
// let num11 = (2,6,78,89,8,78,105)
// console.log(Math.max(num11));

//Math.Random | Random values always consume under 0 into 1 sometimes 1 and sometimes 0;
// console.log(Math.random());

//  Range defined
// let num12 = Math.random() * 10;
// console.log(num12);

// If Not get 0 values 
// let num13 = Math.random() * 10 +1;
// console.log(num13);

// UndreBracket Best Practice 
// let num14 = (Math.random()* 10 + 1);
// console.log(num14);

// Get Only one Value 
// let num15 = Math.floor(Math.random()*10 + 1)
// console.log(num15);

// Same Concept But Generatic Formula
// let min = 10;
// let max = 50;
// console.log(Math.floor(Math.random() * (max - min + 1 )) + min);

/*
***************************************** Summary ****************************************
01) Number Primitive Data Types
02) How to Round Off and Formate decimal Values : toFixed()
03) toFixed() : round off 0 early values 
04) Round Off and formate specifice decimal values
05) How to change Huge values in Our Country Standrad 1000000000000.toLocalStrings('en-IN)
06) How to Convert negative value to Positive Value : Math.abs(-10)
07) How to Cancell all Decimal Values : Math.round()
08) How to Choose Rounf Of Highes and lowest values
09) for lowest : Math.floor
10) for highest : Math.ciel
11) How to Find Lowest and Highest values in Numbers
12) Find lowest : Math.min()
13) find Highest : Math.max()
14) Math.random () : always Consume under 0 to 1 
15) How to range Define in Math.random : math.random()* 10
16) Not get 0 values : math.random () * 10 + 1
 */




//+++++++++++++++++++++++++++++++++ Date and Times in JS +++++++++++++++++++++++++++++++++++

// Dates Usually Calculate in MiliSeconds
// Dates Starts 01-January-1970 in JS

let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);
// Date and Time typeof is Objects

// Date and Time differnce Standard 
myDate.toDateString();
myDate.toLocaleDateString();
myDate.toISOString();
myDate.toLocaleDateString();
myDate.toLocaleString();
myDate.toTimeString();
myDate.toUTCString();
myDate.toLocaleTimeString();

/*
*********************************** Summary *****************************************
01) Dates and Time Usally randor in Miliseconds
02) Dates start 01-January-1970 in JS
03) Dates Data Type is Objects
04) By default Date Standard : Day - Month - Date - Year - Hours - Minutes - Seconds
05) Some method in JS which change Date and Time Standard
06) toString() : Same STandard
07) toDateString() : Day - Month - Date - Year
08) toLocaleDateString() : Date / Month / Year
09) toISOString() : Year - Date - Timezone
10) toJSON() : Year - Date - TimeZone
11) toISOString() and toJSON() Both are Similar
12) toLocaleString() : Date / Month / Year , Hours : Minutes : Seconds AM/PM
13) toTimeString() : Only Time Mentioned 23:09:40 GMT-0600 (Mountain Daylight Time)
14) toUTCString () : Day with Name - Date , Month Year Hours : Minutes : Seconds GMT
15) Month Count 0 to 11 in JS
16) Time Randor in miliSeconds 
17) 2 Time and Date Comparision always in Miliseconds
18) Convert MiliSecons to Second / 1000
19) Custamized Formate : Date is ${Math.floor(Date.now()/1000)}`
*/



















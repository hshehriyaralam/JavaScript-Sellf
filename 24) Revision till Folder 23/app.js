// +++++++++++++++++++++++++++++++++++ [Array] +++++++++++++++++++++++++++++++++

// Array : Non primitive Data Type
// Array : Multiple Collections Of Data Items in Single variable
let arr1 = [2, 4, 5, 10];
 // name   array braces [ ELemnents ]

 // JS ke aaray Resizebale hOte hain incase ham other value bh add kr sakte hain

 // Get value through index numbers in array
//  index number always start in 0
 console.log(arr1[0]);

 // array shallow copies refere krta hain 
 // Shallow copy means jiske changing se actuall bh change hO jayega 
// Deep Copy means jsime actuall Change nh hOti kyunke isme hamien Refrence milti hain na ke actuall copies 

// 2nd way to define array 
let arr2 = new Array(6,8,9,89)
console.log(arr2);
console.log( typeof arr2);

// array  Methods 
// add last value 
arr2.push(8);
console.log(arr2);

// rmove last value 
arr2.pop();
// console.log(arr2);

// add first value 
arr2.unshift(4);
// console.log(arr2);

// Remove fisrt value
arr2.shift();
// console.log(arr2);

//  Check array values 
// console.log(arr2.includes(89));

// Convert array to strings 
let arr3 = arr1.join();
// console.log(arr3);
// console.log(typeof arr3);


// Splice and Slice methods
let arr4 = ["Aksh", "Sameer", "Shahrukh", "Humyun"]
// console.log(arr4);

// Splice method 
// Splice actull array main manupalte krta hain .... Actuall array se bh remove kr dega 
let arr5 = arr4.splice(1,3)
// console.log(arr5);
// console.log(arr4);

// Slice methods 
// Slice actuall method main Manuplation nh karega ... Actuall array se remove nh hOga
let arr7 = ["SHameer", "Zain", "Daniyal"]
// console.log(arr7);
let arr6 = arr7.slice(1,3);
// console.log(arr6);
// console.log(arr7);

/* 
*********************** Sumary *******************
01) array Non-primitive Data Type.
02) Array : Collections Multiple  Data in Single variable .
03) Array Values is known as "Element".
04) Arrays ELemnet allow store  different Data Type .
05) Array Resizable : It's mean icase we add other value after assign values .
06) Array values access through index number and index numbers always start 0 . 
07) Array Perfare Shallow copies ... not a deep copies .
08) 2nd way to define array array : new Array().
09) push() : add last Element .
10) pop() : Remove last Element .
11) Shift() : Remove 1st Element.
12) Unshift() : add 1st Element .
13) includes() : Check array Values.
14) Join() : Bind arrays and Convert array to strings.
15) slice() : array values copy But Not delete Actuall array.
16) splice() :array values copy and Delete actuall arrays.
*/



// ++++++++++++++++++++++++++++++++ [array part 02] ++++++++++++++++++++++++++++++++


// Marg 2 Arrays


// let PTI = ["Imran", "Rasheed", "Ali"]
// let PLN = ["Nawaz", "Shahbaz", "Maryam"]

// let PDM = PTI.push(PLN);
// console.log(PTI);
// console.log(PLN);
// console.log(PTI.push(PLN));
// let PDM = PLN.push(PTI)
// console.log(PLN);
// Return Nested Array methods



// let Chor = PLN.concat(PTI)
// console.log(Chor);
//Concate method : new array return karega and 2 array ko murch kr dega 


// But agar hamien 2 se zyada array ko murge krna hoto iske lye spread methdo hai 
// let JI = ["Naeem","Siraj"];
// let TLP = ["Saad", "Zaheer", "Ubaid"];
// let PPP = ["Bilawal", "Asif"]
// let Agrement = [...JI, ...TLP, ...PPP ]
// console.log(Agrement);
// Conacte method Multiple array ko murch krega 


// Nested Conevrt in one array 
// let Nested = ["India", "Pakistan", ["Lohore", "Karachi"], "Bangladesh", ["Dhaka", "UP"],  "Srianka "]
// console.log(Nested);
// console.log(Nested.flat(Infinity));

// Convert String value in array 
// console.log(Array.from("Shahmeer"));

// Array pata krne ke lye ye variable array hai ya nh iska output boolean main ayega
// let arrvalue = ["sherry"]
// console.log(arrvalue);
// console.log(Array.isArray(arrvalue));

// Convert  Multiple variable in one array 
// let collection1 = 100;
// let collection2 = 3000;
// let collection3 = 8900;
// let collection345 = "Shahmer"
// let collection8850 = "Shery";

// console.log(collection1, collection2, collection3, collection345, collection8850)
// console.log(Array.of(collection1, collection2, collection3, collection345, collection8850))


/*
+++++++++++++++++++++++++++++++++++++ Summary [array part 02]  +++++++++++++++++++++++
01) Concate : Murch 2 array in one array 
02) ... Spread method : Multiple array murch in one array
03) flat(Infinity) : Nested arrays conevrt in one array
04) Array.form("Sherry") : convert string value in array
05) Array.isArray(array variable) : How to check array is 
06) Array.of(variable names) : Convert Mulltiple variable in one arrays
*/





// ********************************* Objects Part 01 ****************************

// Objects 2 tarike se assign kr sakte hain in Java Script 
// 01) as Constracter  02) as Literals 

// objects ko Constracter ki tarha use karenge as known as Singleton

 // Contructer Example : 
//  let obj1 = Object.create({
//     std : "SHahmeer",
//     std2 : "Sherry",
//  }); 
 // koi bh constructor se object banante hain wo Singleton Object kehlata hai

 // Literals Example : 
//  let  obj2 = {
//     name : "Sherry",
//     age : 20,
//     "Fullname" : "Shehriyar",
//     login : true,
//     locatin : "karachi",
//     email : "hshehriyaralam",
//     lastLogin : ["Monday", "Tuesday"],  
//  }
//  console.log(obj2);
 // Access Objects 2 method 
  // 1) Objects  Notation 2) Array Notations 
//  console.log(obj2.locatin);  //Object Notation 
//  console.log(obj2["age"]); // array Notation 
 // Array notation "" se access honge 
//  console.log(obj2["Fullname"]);
 
// Edit Objects values 
// obj2.login = false 
// console.log(obj2);

// Objects Lock so that there is no change 
// Object.freeze(obj2)
// obj2.locatin = "Lahore";
// console.log(obj2);

// add functions in Objects 
// obj2.greeting = function () {
//     console.log("Hello Greeting",`${this.email}`);
// }
// console.log(obj2.greeting());

// obj2.sym = function () {
//     console.log("sym is functions");
    
// }
// console.log(obj2.sym());


/* +++++++++++++++++++++++++++++++ Summary [Objects part 01 ] +++++++++++++++++++++++++++++++
01) Two Way declare Objects in JS 1) Literals 2) Singleton
02) Objects declare with Constructor is Called Singleton Objects 
03) Singleton Example : Object.create(Objects name)
04) Access Objects value 2 Method  1) Objects Notations 2) array Notations
05) Objects Notations : obj2.email 
06) Array Notations : obj2["email"]
07) Objects value Change : obj2.email = Shahmeer@gmail.com
08) Objects Lock so that there is no change Objects value : Object.freeze(obj2)
09) add Functions in Objects : obj2.greeting = functions () {}
*/


// ************************************ [Objcts part 02] ***********************************

// Singleton Objects 
// let amazoneUser = new Object ({ karachi :  "lawaris", Lahore : "KhotaHub", Islamabad : "Burgers peoples"});
// console.log(amazoneUser);

// // Nested Objects 
// let ALiBabaUSers =  {
//     UsersEmail : "790789494922gmail.com",
//     UsersProducts : {
//         Chicken : 2000,
//         Fruits : 3000,
//     },
//     usersLocations : ["USA", "Washington"],
//     UsersCities : {
//         USA : "NewYork",
//         UK : "Landon"
//     },
// }
// console.log(ALiBabaUSers);

// Objects murch 
// let MERNStack = {ForntEnd : "NextJS", BackEnd : "Node JS"}
// let MEANStack = {FontEnd : "Angular", BackEnd : "Node JS"}
// let LAMPStack = {ForntEnd : "Angular", BackEnd : "PHP" }

// let fullStack = {MERNStack, MEANStack, LAMPStack}
// let fullStack = Object.assign(MERNStack, MEANStack, LAMPStack)
// console.log(fullStack);

// let fullStackDevelopment = {...MERNStack, ...MEANStack, ...LAMPStack}
// console.log(fullStackDevelopment);


// Array Objects : DataBase se zyada Users ayenge wo array Objects Ayega 
// let ArrayObjects = [{
//     id: 1,
//     "email" : "Muhammadshamirmajeed@gmail.com"
// },
// {
//     id: 2,
//     "email" : "hshehriyaralam@gmail.com"
// }
// ];
// console.log(ArrayObjects);

// let sampleObjects = {
//     email : "hshehriyaralam",
//     Phone : "03120246893",
//     age : 20,
//     isLogin : true,
// }

// console.log(Object.keys(sampleObjects));
// console.log(Object.values(sampleObjects));
// console.log(Object.entries(sampleObjects));
// console.log(sampleObjects.hasOwnProperty("email"));


/* ++++++++++++++++++++++++++++++++ Summary ++++++++++++++++++++++++++++++

01) Singleton Objects : new Objects(values)
02) Nested objects are allow to declare 
03) Murch multiple objects : Object.assign(Objects name)
04) Array Objects are use to store data base value 
05) Objects.keys() : get all keys in Objects 
06) Objects.values () : get all values in Objects 
07) Objects.entries() : get key values pares in array formate 
08) Given Metods return in array  [] 
*/


// ************************************ JSON *********************************************

// Objects De-Structuring 
// let WAP = {
//   Module1 : ["HTML", "CSS", "Bootstrap"],
//   Module2 : ["Java Strip", "Advanced JS","Firebase"],
//   Module3 : ["React JS", "Next JS", "Typescript"],
//   Module4 : ["Node JS", "MonoDB", "React Native"]
// };

// console.log(WAP.Module1);
// const {Module1 : Teacher} = WAP
// console.log(Teacher);

// Object ki value ko de-structure kr ke usko as a new variable main store kr denge 
// Objects ki key ko bh Rename kr sakte hain


// JSON 
// let = {
//    "AI" : "Python",
//    "MERN" : "JS"
//  }

// array Objects without name is called JSON 
// Sometime JSON in aaray FOrmate 


/* +++++++++++++++++++++++++++++ Summary ++++++++++++++++++++++++++++++++
01) Objects keys store in new variable is called Object de-structuring
02) Objects without name is called JSON 
03) JSon use for API Data Store 
04) De-structurin work as an array 
*/ 

// ******************************** Functions part 01 ************************************

// Functions : Block of code that perform a specific task, can be invoked whwnever needed 

// function SumNumbers(number1 , number2){
//   let result = number1 + number2 
//   return result
// }
// console.log(SumNumbers(5,5));
// Parameters and Arguments 
// Value Of Function Parenthesis is known as Parametrs : 
// Value of Function Executions Parathesis is known as Arguemnts 


// Logics 
//  function UserLoggedIn(userName){
//   let result = ` ${userName} just LoggedIn`
//   return result 
//  }

//  result = UserLoggedIn("sherry")
//  console.log(shsh);


//  function login (userName) {
//   if(userName === undefined){
//     console.log("Please Enter UserName");
//     return
//   }
//   if(!undefined){
//     console.log("Please  userName");
//   }
//   return `${userName} just logged in `
//  }
//  let arg = login("shahmeer")
//  console.log(arg);
 

/* ++++++++++++++++++++++++++++++++++++++ Summary +++++++++++++++++++++++++++++++++++
01) Function :  Block of code that perform a specific task, can be invoked whwnever needed 
02) Parameters : Function parenthesis value 
03) Argument : invoke parenthesis value 
04) return : stop function 
*/

// ******************************** Functions part 02 **********************************

// Spread Method 
// function calcualtePrice(...item1) {
//   return item1
// }
// console.log(calcualtePrice(21, 23));


// function calculateItems(price1, price2, ...price3){
//  return(price1, price2, price3)
// }
// console.log(calculateItems(200, 400, 5000, 67, 90, 789));


// Functions with Objects 

// const User = {
//   IceCream : "Kulfi",
//   Pizza : "Chicken Fajita "
// }
 
// function func(Objects){
//         console.log(` My favourite pizzz ${User.Pizza} and ${User.IceCream}`);
// }
// // let esssm = func(User)
// console.log({
//   IceCream : "Choclate",
//   Pizza :  "Hawaiian"
// });

// With Array 
// let UNO = ["pakistan", "India", "Bangladesh"]
// function members(ARRAY12){
//   return ARRAY12
// }

// console.log(members(["China", "Russia"]));

/* +++++++++++++++++++++++++++++++++ Summary +++++++++++++++++++++++++++++++++
01) Functions always declare a meaningfull variable 
02) Rest and Spread alllwed in case multiple arguemnts
03) Depending on situations Rest OR  Spread Property 
04) return work only last values 
05) Objects declare allows in functions Arguemnts 
06) Objects declare allows in functions Arguemnts 
*/





// +++++++++++++++++++++++++++++++++++++++++ Scope +++++++++++++++++++++++++++++++

/// {} Curly Braces har programing language main scope hai 
// But Object main Curly Braces {} Object Declaration hai 
// Functions, arrays and cnditions ke sath Curly braces Scope hai 

// for Example 
// let a = 10;
// const b = 20;
// var c = 30 ;
// if(true){
//   let a = 11  // block scope 
//    const b = 21  // b;lcok scope
//   var c = 31 // Global Scope 
// }

// console.log(a);
// console.log(b);
// console.log(c);


/* ++++++++++++++++++++++++++++ Summary +++++++++++++++++++++++++++++++++++
01) Curly Braces {} har programing language main "Scope" hai
02) But Object main Curly Braces {} Objects Declarartion hai
03) Functions, arrays and Conditions main Curly Braces {} "Scope"
*/


// ********************************** Hoistings ****************************

// function one(){
//   const userName = "Gul Ahmad";

//   function two(){
//     const website = "LinkedIn"
//     console.log(userName);
    
//   }
//   // console.log(website); // Error
  
//   two()
// }
// one()


// if(true){
//   const userName = "Sherry"
//   if(userName === "Sherry"){
//     const website = "Youtube"
//     console.log(userName + website);
//   }
//   // console.log(userName + website); // Error
// }


// Functons se pehle functions main invoke 
// addtwo()
// function addtwo (){
//   console.log("AddTwo");
  
// }

// But ye arrow function main error aa jayega 
// newfunc()
// let newfunc =  () => {
//   console.log("three");
  
// }
// console.log(Express(5));

// let Express = function(num){
//   return num + 1
// }

// Expressions main functions se pehle invoke nh kr sakte 
// Hoisting => Function kaise declare honge , kahan unko rakha jata hain , Kya unka Execution contact hai, variable Ko Javascript kaise read karta ha , kaise final tree banti hain kaise functions and variable ko rakha jata hai 

/* ++++++++++++++++++++++++++ Summary ++++++++++++++++++++++++++++++++++
01) functions with variable is called Expressions 
02) Simple functions are alllowed to invoke functions before function
03) But arrow function and Expressions are not allowed to invoke functions before function
04) Hoisting => functions , Variable Managements 
*/ 




// ****************************** THIS and Arrow Functions ***********************************
// THIS Current Contaxt ko Refere krta hai


// const user = {
//   userName : "Sherry",
//   PRice : 1999,
//   WelcomeMessage : function (){
//     console.log(`${this.userName}`, "Welcome");
//     console.log(this);
    
    
//   },
// }
// user.WelcomeMessage()
// // console.log(this);
// user.userName = "Shahmeer";
// user.WelcomeMessage()

// function chai (){
//   let userName = "Arshad";
//   console.log(this.userName);
//   console.log(this);
  
  
// }
// chai()

// const coffee = () => {
//   let userName = "Khan"
//   console.log(this.userName);
//   // console.log(this);
  
// }
// coffee()


// Arrow Functions 
// let arrw = (num1,num2) => {
//   return num1 + num2
// }
// console.log(arrw(6,89));

// Implecite Return 
// let arrw2 = (num3 , num4) => num3 + num4;
// console.log(arrw2(8,9));

// // But Object return krna hai to 
// let arrr3 = () => {`userName : "Shahmeer"`}
// console.log(arrr3());


/* ++++++++++++++++++++++++++++++ Summary ++++++++++++++++++++++++++++
01) "ThIS" used to be current (Contaxt : value ) Refere
02) Empty "THIS" output empty objects in node enviroment 
03) Empty "THIS" output window Objects in browser 
*/


// ************************************ IFEE *************************************
// IFEE (Imediately invoke Function Execution )

// function ice () {
//   console.log("HEllo SHerry");
// }
// ice() // normal invoke 

// (function blue123() {
//   console.log("Large");
// })() // IFEE 


// (()=> {
//   console.log("SMIT");
  
// })()

// let iife = (function (){
//   console.log("Expressions");
  
// })()

// ((num10,  num12)=> {
//   console.log(num10 + num12);
  
// })(23, 46)


// ((userPrivate)=> {
//   console.log(`${userPrivate}`);
  
// })("SHahmeer")

/* ++++++++++++++++++++++++++++++++++++ SUmmary +++++++++++++++++++++++++++++++++++++++ 
01) IFEE  ( Imediately invoked functions Expressions )
02) first () functoion declare and 2nd () invoke functions
03) IFEE used to be avoid global polutions 
04) Samicolon has must in IFEE when 2nd functions 
05) Allow to declare Parameter and Argument 
*/

// ******************************** Control flow ********************************

// IF Statement 
// let Gendar =  true
// if(Gendar) {
//   console.log("Gendar");
// }else{
//   console.log("False");
// }

// if (10>9){
//   console.log("ture");
// }else{
//   console.log("Flse");
  
// }

// Switch Case 
// const month = "Jan"
// switch(month){
//   case"Jan":
//   console.log("January");
//   break;
//   case"Feb":
//   console.log("Feb");
//   break;
//   case"Mar":
//   console.log("Mar");
//   break;
//   case"April":
//   console.log("April");
//   break;
//   case"May":
//   console.log("May");
//   default:
//     console.log("Default Case Behaviour");
// }


// Truthy Values 
// const userEnail = "anything values under string notations "
// const logic1 = "false"
// const  logic2 = " ";
// const logic3 = [];
// const logic4 = {};
// const logic5 = function(){}


// // Falsy Values 
// const logic6 = false
// const logic7 = 0
// const logic8 = -0
// const logic9 = BigInt
// const logic10 = null
// const login11 = undefined 
// const logic12 = NaN

// console.log(typeof logic12);


// Nulish Coalescing  Operators 
// let Sameer = 2000
// let PicnicAmount ;
// PicnicAmount = 5 ?? Sameer ;
// PicnicAmount = null ?? Sameer ;
// PicnicAmount = undefined ?? Sameer ;
// PicnicAmount = 200 ?? Sameer ;
// console.log(PicnicAmount);

// Ternory Operators 
// let Picinic = 200
// Picinic == 100 ? console.log("Amount ") : console.log("Chal be Paise de ");









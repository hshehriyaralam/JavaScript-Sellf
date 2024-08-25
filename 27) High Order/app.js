// High Order
// High Order array Loops

//for of loop 
// ye sab array specific loop hai 

let arr34 =  [1,2,3,4,5,6,7]
for (const val of arr34) {
    console.log(val);
    
}
// easy syntax hai , without conditions and increment 


// for of loop with strings 
let strigs = "Hello World"
for (const key of strigs) {
    console.log(key);
    
}


// Maps 
// Map apne ap main ek Object hai 
// Map Object hai Hold krta ha key value pare 
// Map main Unique Values hogi and jis order main hogi wese hi  render hogi 

let map = new Map()
map.set("Pak" , "Pakistan")
map.set("Ind" , "India")
map.set("Ban" , "Bangladesh")
map.set("Nep" , "Nepal")


// array De-Structuring 
for (const [key, value] of map) {
    console.log(key, value);
    
}

// for of loop with objects 
let forOfObj = {
    game1 : "GTA",
    game2 : "Subway Suffer"
}

for (const {value} of forOfObj) {
    console.log(value);
}

//  For of loop not support Objects
// If we run loop in Objects so we should be use foor in loop

// for in loop with Objects 
let BAN = {
    Batsman1 : "Shakib",
    Batsman2 : "Mustafa",
    Batsman3 : "Hassan",
    Batsman4 : "Jamal",
    Batsman5 : "Mubashir",

}
console.log(BAN);
for (const key in BAN) {
    console.log(BAN[key]);
    
}
// for in loop with array 
let arrr39 = ["JS", "TS", "C++", "C#", "C"]
for (const key in arrr39) {
    console.log(key);
    console.log(arrr39[key]);
}


// For Each loop 
let coding = ["JS", "TS", "C++", "C#", "C"]
coding.forEach((item) => {
    console.log(item);
})

function print (item){
console.log(item);
}
coding.forEach(print)
coding.forEach((Shah,Zain, Daniyal)=> {
    console.log(Shah,Zain,Daniyal);
    
})


// forEach loop with array Objects 
let Extensions = [
    {
        LanguageName : "JavaScript",
        languagefile : "Js"
    },
    {
        LanguageName : "Python",
        languagefile : "py"
    },
    {
        LanguageName : "TypeScript",
        languagefile : "ts"
    },
    {
        LanguageName : "Java",
        languagefile : "java"
    }
]
Extensions.forEach((item)=> {
    console.log(item.languagefile);
})




/* ******************************* Summary ******************************
01)  for of loop : easy syntaxt without conditions and increments as compare to for loop
02)  For of loop allowed to apply in Array and Strings  But don't work at Object  
03)  If we used to be loop in Objects so must be use foor in loop 
04)  For in loop allowed to apply in array But this return index number which start 0 
05) For Each loop : Easy and return value,index number and array 
06)  For Each apply Array of Object easiy 
07) for of loop : Array specific loop 
08) Map redner  Uniq values and key values pare
*/

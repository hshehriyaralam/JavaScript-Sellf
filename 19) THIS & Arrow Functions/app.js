// Arraow Functions and THIS
// THIS => Current Contact KO Refere Karte Hain

const user = {
    userName : "Sherry",
    price : 1999,

    welcomMessage: function () {
        console.log(`${this.userName}, Welcoe to Our Website`);
        console.log(this);
    }
}
user.welcomMessage()
user.userName = "SHahmeer"
user.welcomMessage()

console.log(this);
// node enviroment main this refere krta hai Epmty Object
// browser main this refere krta hai window Object
// browser main jo global object hai wo window object hai



function chai(){
   let userName = "Asif"
//     console.log(this.userName);
    // console.log(this);
// //     // this Objects main hi km krta hai function main use nh hO paa rha hai
// // function just this print kare to bohat sari values ayegi
}
chai()




const  coffee = () => {
    let userName = "KHan"
    console.log(this.userName);
    console.log(this);
//     // but arrow function main just this print karai to undefined ayega 
}
coffee()


// Arrow Function Syntax
// basic arrow function
let arrw=  (num1, num2) => {
    return num1+num2;
}

// console.log(arrw(5,7));

// Implecit Return 
let arrw2 = (num3, num4) => num3 + num4;
console.log(arrw2(5, 6));



// agr confusion hai to parenthesis() main wrap krdo but Curly Braces {} lagaya to return lagana hOga


let arr3 = (num5, num6) => (num5 + num6)
// let arr3 = (num5, num6) => { return num5 + num6}
console.log(arr3(6, 6));



// But agr Object return krna hoto parenthesis lagana hOga
let arrw4 = () => ({userName : "Shahmeer"});
console.log(arrw4());



/* 
*********************** Summary *********************
01) "THIS" used to be current (Contact => value) Refere
02) empty "THIS" output empty object in node enviroment 
03) Empty "THIS" outut window Objects in Browser
04) Global Object in browser is window Object
05) "THIS" only work in Object not funtion correct usuable
06) Console just "THIS" in function Output a lot of  values
07) But Console just "THIS" in Arrow function Output undefine value
08) Arrow Function Syntax  => let arrw = () => {}
09) Allow to Implecit return in Arrow function It's mean let arrw2 = (num3, num4) => num3 + num4;
10) and allow to () in returns value => let arr3 = (num5, num6) => (num5 + num6)
11) But If use to be {} it's compulsory declare Return value => let arr3 = (num5, num6) => { return num5 + num6}
12) IF return in Object that use {} =>  let arrw4 = () => ({userName : "Shahmeer"});
*/

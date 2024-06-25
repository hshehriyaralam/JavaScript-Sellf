function addTwoNumbers (number1, number2){ // parameter
   // let number1 = prompt("enter Number1")
   // let number2 = prompt("enter Number2")
   let result = number1 + number2;
   return result
}
let number1 = +prompt("enter Number1")
let number2 = +prompt("enter Number2")
 let result = addTwoNumbers(number1, number2);
 console.log(result);

addTwoNumbers(5, 5); //Argument


// function () value parameter hai
// invoke () argument hai
// function main return ke bd koi value execute nh hOti


function loginUserMassage(userName){
  let result = `${userName} just logged in`
  return result
//   console.log("Hello smit");
}
result = loginUserMassage("sherry"); 
console.log(result);


function login(userName){
    if(userName === undefined){
        console.log("Please Entre UserName");
        return
    }
    if(!undefined){
        console.log("Please Enter UserName");
        return
    }
    return `${userName} just Logged in`
}
console.log(login());

/*
************************* Summary ***********************
01) Parameters under the function Name Parenthesis () 
02) Argument When invoke the function this time declare value
03) return property break the function
04) Empty argument function parameter is undefine
05) "" Empty string argument parameter is null;
*/







// Nested Scope
// Closure


function one(){
    const userName = "sherry";

    function two(){
        const website = "github.com";
        console.log(userName);
    }

    // console.log(website);  Error

    two()
}

one()


if(true){
    const userName = "shahmeer";
    if(userName === "shahmeer"){
        const website = " youtube";
        console.log( userName + website);
    }
    // console.log(website); // Error 
}

// console.log(userName); //  Error


console.log(addone(5)); // Run
function addone(num){
    return num + 1;
}
// Simple Function hai
// Simple function main Function se pehle invoke kr sakte hai


 console.log(addTwo()); // Error
const addTwo = function(num) {
    return num + 2;
}
// Expression 
// Expressins main functions se Pehle Invoke nh kr sakte 
// Hoisting => function KASIE declare Honge, kahan unko rakha jata hai,Kya unka Excution Contact hai , variable ko JS kaise read krti hai, kaise final tree banati hai kasie all function and all variable rakhe jate hain




/* 
******************************** Summary *****************************
01) Nested Scopes
02) function with variable is called Expressions 
03) Simple Functions allow to invoke before function
04) But Expression Not Allow to invoke before functions
05) Hoisting => functions, Variable Managment
*/
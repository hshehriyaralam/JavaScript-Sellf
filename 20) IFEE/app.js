// IFEE (Immediately Invoked Function Expressions)
// Function ke immediately invoke krana 


(function Ice() {
    console.log("IceCream");
})(); // Immediately Invoke | IFEE
//        ()         |            ()
// function Declare  | Function Execution
// Ice() // Normal Invoke

// Global scope ke polutions se bachne ke lye IFEE Use krte hain 
// IFEE main semicolon must hai  warna Error ayega 


( () => {
    console.log("Arrow Function");
})();




// parameter and Argument use in IFEE
((num1, num2) => {
    console.log(num1 + num2);
}) (5,5);


((UserName) => {
    console.log(`${UserName}`)
}) ("SHAHMEER");

/* 
***************************** SUMMMARY ************************
01)IFEE (Immediately Invoked Function Expressions)
02) first parenthesis () function declare and 2nd parenthesis () Execute the functions
03) IFEE used to be avoid Global polutions
04) Semicolon has must in IFEE Function otherwise output Error
05) ALlow to declare Parameter and ARgument in IFEE

10)*/  
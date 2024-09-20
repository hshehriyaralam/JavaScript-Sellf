// Lexicol  Scoping
function init() {
      let name = "Mozilla"; 
          function displayName() {
             console.log(name); 
            }
       displayName();
  }
//  init();

// ** Description **
/* init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer scopes, displayName() can access the variable name declared in the parent function, init().
*/

  function outer(){
    let name12 = "shahmeer"
    function inner(){
        let inner1 = "sherry"
        console.log("innerOne",name12);   
    }
    function innerTwo(){
        console.log("innerTwo", name12);
        console.log("Inner variable",inner1);
        
        
    }
    inner()
    innerTwo()
}
outer()
// console.log(name12);
// har function apna scope hai under the function scope things function ke bahar access nh kr sakte 
// But function ke andar ek or scope bna kr uske outer function ke scope ko access kr sakte hain 
// isi ko laxical Scope kehte hain 
// Child parent ka scope access kr sakta hai BUt Child Child ka scope access nh kr sakta 


  // Clouser : A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.


  // Closuer se inner function se outer  function ke scope ka access mil jata hai 
  function makeFunc() {
    const name = "Mozilla";
        function displayName() {
           console.log(name);
        }
      return displayName;
      // yah to inner function execute nh hua just reference return kara dya 
      // to just "displayName" function ka naterial execute hoga 
  }
  const myFunc = makeFunc();
  myFunc();
  // ayesa nh jab displayName function ke refrence ko return kr dya to ye apna scope to le kr jayega sath sath lexical scoping ko bh execute karega 
  // Execution contaxt to jaega But uska Laxical scope bh jayega 
  // isi ko Clouser kehte hain



  // **** Practical Example ****
//   document.getElementById('orange').onclick = function(){
//     document.body.style.backgroundColor = 'orange'
//   }
//   document.getElementById('green').onclick = function(){
//     document.body.style.backgroundColor = 'green'
//   }

function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`
   return  function (){
    document.body.style.backgroundColor = `${color}`

    }
}

document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")



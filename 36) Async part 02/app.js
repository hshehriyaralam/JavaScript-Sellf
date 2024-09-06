// setTimeOut()
// setTime Out ko sab se pehle handler Chaia Hota hai 
// Hander ek call back hi ........... ek function hai jiska nam nh hai

// setTimeout(function(){
//     console.log("Shahmeer");
    
// },2000)
// 2 second ke bs ye console ho jayega 
// But Kch time ke bad ek hi bar run hOga isme Repeation ka koi method nh h 







// setTimeout main function ya function ka Referenece 2ono pass kar sakte  hain ....function Execute nh karna just Reference Dena hai 
// const shahmeer = () => {
//     console.log("Shahmeer");
    
// }
// setTimeout(shahmeer, 2000)


// Heading render with SetTimeOut
// const sayshherry = function(){
//     document.querySelector('h1').innerHTML = "Chai Aur JS"
// }
// const breake = setTimeout(sayshherry,2000)
// setTime ko break kaise karna hai : clearTimeout()
// But ClearTimeOut main sirf setTimeOut ka Reference dena hoga 
// document.querySelector('#stop').addEventListener('click', () => {

//     clearTimeout(breake)
// })


// setInterval 
//  ye ek time period ke bad ye again & again run hoga 
// // setInterval main third parameter bh hota hai



// ClearInterval se setInterval se stop kr sakta hai


// let shah;
// document.getElementById('start').addEventListener('click', () => {
//     const sayDate = function(str){
//         console.log(str, Date.now())
//     }
//      shah =  setInterval(sayDate, 1000, "hi")    
// })

// document.getElementById('stop').addEventListener('click', () => {
// clearInterval(shah)

// })



/*  ************************* Summary ****************************
01) setTimeOut : fixed time Period ke bd code Execute karega 
02) setTimeOut ko stop karne ke lye clearTimeout()
03) setTimeout ki tarha ek setInterval bh method hai
04) But ye ek Time period ke bd code again and agin run hoga
05) setInterval ko stop karne ke lye "clearInterval"
*/
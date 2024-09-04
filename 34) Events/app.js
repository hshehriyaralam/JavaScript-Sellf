

//  Events kisi Activity main invoke hote hain
// Events lagane ke 3 approach hai 
// 1) Index main hi onclick ke andar function laga dain
// 2) 2nd Approach javascript se "id" get kr ke Events Javascript main hi inject kr dye 
// 3) 3rd Approach main Eventlistener laga kr Bohat sare Events inJect kr sakte hain 



//   <img src="https://images.pexels.com/photos/28054216/pexels-photo-28054216/free-photo-of-a-woman-smiling-in-a-sweater-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="images" width="300px" onclick="alert('Look awesome')">

// ye Physiable approach nh hai Jab Project Scale karega tab bohat pareshani hoGi 
// HTML main Event  ko inject nh karna 



// 2nd Approach
// document.getElementById("Pexel").onclick = function(){
    // alert("Look")
// }
// HTML se ID Get Kr ke onclick Event laga dye .. 
// Javascript ka onclick Function le ga and function main isse pass karna hoga 
// ye features kam deta hai 
// But ham ye Approach bh Prefare nh karte 




// 3rd Approach EventListener Use karenge 
// document.getElementById("Pexel").addEventListener('click', function(e){
//     console.log(e);
    
// })
// addEventListener 3 chezien leta hai Event , function and Boolean value 

// Events 
// PreventsDefault : Default behaviour ko stop kar dega 
// document.getElementById('google').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log("google.com");
    
// } )
// Google pr navigate nh hua preventDefault default behaviour ko stop kr deta hai 


// Target Events se HTML ko get Kar sakte hain
// document.querySelector('#images-name').addEventListener('click', (e) => {
//    console.log("CLick",e.target.tagName);
//    if(e.target.tagName === 'IMG'){
//     let removeIt = e.target.parentNode
//     removeIt.remove() 
//    }
  
// })
// Event parentNode se ham target ke parent main shift ho sakte hain 
// But ye Parent ko Bh delete kr de raha 
// Event tagName ye select ka Tag bh prefare karega 


// attachEvent listener bh hOte hain market main || Internert Exploror main application run krne main Heplp Hoti tHi 
// JQuery Library Bh bohat Famous tHe market main || EK  Time main JQueary Bohat Famous tHa jaise abh React hai 

/* ************************** Summary *****************************************
01) Event Kisi Activity main Invoke hota hai
02) Event 3 approaches se inject kr sakte hain 
03) HTML main inject , But ye physiable nh hai
04) Second javascript main id get kr ke Event lagan But isme zyada feature available nh hai
05) 3rd addEventListener laga kr isme zyada features bh milte hain
06) addEventListener 3 chezien lege Event, Function and True ya False value But isme By default False value hi Hoti hai
07) "preventDefault" Default Behavioiur ko stop kr dega 
08) "target"  se Elemnt ke parent pr shif ho sakte hain, parent select kr lega
09) "tagName" se Tag bh access kr sakte hain
*/
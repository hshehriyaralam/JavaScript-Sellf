// Prototype just behaviour nh hai
//  Javascript default behaviour hai prototyper behaviour 
// javascript  har nh manti jab tk koi null value na mil jaye ........ yahi iska prototype behaviour hai

// isi behaviour se link ho kr "this" keyword kam krta hai 
// aero function main "this" ka access nh hota , isi lye nh hota wahan prototype behaviour hai 

// classes bh isi se mili h 

// Javascript main sb aakhir main  Object hi hota hai
// End of the day javascript jaa kr milti hai Objects se 
// Object ka prototype null hi ho jata hai 

// function ka typeof Object function hai 
// for Example 
// function Sample(num){
//     return num*5
// }
// console.log(Sample(3));
// console.log(Sample().power = 2);
// function main Power bh add ho rha hai jo Object se specialized hai
// function function bh ha and Object bh hai
// Function bh end of the day Object hi hota  




// let Tname = "Sherry      "
// console.log(Tname.length);
// ek trueLanght ke name se method ho jo console main just name ki value ki lenght de and extra spaces ko cancell kr de 

// console.log(Tname.trim().length);
// trim se condition to true ho jayegi But Low IQ wali baat ho gi 
// But mujhe Bohat sare String , object and array ye method value get ka method sab main one by one lagani hOgi 
// ek method ho  jise har data type main assign kr sake 


// iske lye prototyoe main ek function bna denge use jahan chahe ham access kr sakenge 
// 1 array assign krte hain
// let myHeros  = ["Sherry", "Shahmeer"];



// let heroOBj = {
//     firstName : "Shahmeer",
//     Language : "Javascript",
//     Stack : "MERN Stack",

//     getSpidreMan : function(){
//         console.log(`Firstnme is ${this.firstName}`);
        
//     }
// }

//ek shahmeer name se method bana dete hain jo ham 
// Object.prototype.shahmeer = function(){
//     console.log("Shahmeer present is all Objects");
    
// }
// heroOBj.shahmeer()
// myHeros.shahmeer()
// ye object main create kya hai jabh ye array main bh access kr paa rhe hain 


// Array.prototype.Sherry = function(){
//     console.log("Array is alll about function");
    
// }
// myHeros.Sherry()
// heroOBj.Sherry()

// Condition true ho jayegi 
// String.prototype.spaceCancell = function(){
//     console.log(`${this}`);
//     console.log(`true lenght is ${this.trim().length}`);   
// }
// Tname.spaceCancell()








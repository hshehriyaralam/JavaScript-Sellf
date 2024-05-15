// String  'Single code'se bh denote krte hain "double code" se bh....
// let str1 = 'Sherry'
// let str2 = "Shahmeer"
// console.log(str1 +" " +  str2 + " Repo");

// *** Concatenation
// let userName = "hshehriyaralam@gmail.com";
// let repoCount = "50"
// console.log(userName + repoCount + " Value "); // Old Syntax



// Modern Way Syntax
// String interpulation ,,, ap banate hain placeholders inke andar jo bh variable hai ap directly inject kr sakte hain...
// ye syntax zyada readable hai zyada reliable hai
// console.log(`My Name  is ${userName} and My repoCount is ${repoCount}`);

// string likhne ka ye 2ostra Tarika hai
// let emailId = new String("Shahmeer");
// is Type se Hamein Bohat Sare hamein Bohatt sare Method and Lenght milte hain

// // KOi bh PROperty chaia uski key value access kr sakte hain
// console.log(emailId[0]);   // Console = S 
// // Besides that ham Protype BH access kya JAa sakta hai
// console.log(emailId.__proto__);

// // AP JAise proto TYpe access Kr sakte hai Ayese HI iske sare ,method bh access kr sakte hain
// console.log(emailId.toUpperCase());
// console.log(emailId.toLowerCase());
// // But isne Hamari ORiginal String ko Change nh kya HAi BEcuase Ye Heap Memory hai and Heap Memory main Hamien Reference Milta hai


// Character ke position dekhne ke lye
// console.log(emailId.charAt(6));
// console.log(emailId.indexOf("h"));


// Kisi BH String Ki Copy lene KE lye 
// let newEmail = emailId.substring(0, 6)
// console.log(newEmail);

// console.log(emailId.length);
// suppose string ki reverse value chaia 
// let anotherEmail = emailId.slice(-5, 0);
// console.log(anotherEmail);

// trim method
// let newName = "         Talat       ";
// console.log(newName);
// console.log(newName.trim());
// trim String main Space ko remove kr dega 


//  Similarly ek or method hai "replace"
let userNameone = "Shehriyar-Alam"
console.log(userNameone);
console.log(userNameone.replace("-", " "));

//Similarly ek or method hai "Include"
console.log(userNameone.includes("Alam"));


// ******************** Summary *******************
/* 1) String Single code se bh donate krte hain double code se.
2) Jab 2 String ko apas main add karenge wo sirf Concate hOga Add only Numbers m hOta hai.
3)  Console.log write krne ke lye modern Syntax Way bh hai "console.log(`My name is ${"Shehriyar Alam"}`) isko "string interpulation" kehte hain
4)  String 2osre se write down kr sakte hai 
let userName = new String("Shehriyar")
5) string mmain indexNumber se lenght ki value aaa jati hai
6)  










*/
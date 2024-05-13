//Java Script main Memory kasie work karti hai .......?
// starting main jaise ke C languages main  as a programmer memory ko reserve krna and memory ko free krna dono programmer kam hota tHa but current modern language  main like Java Script me apko memory ka itna control nh dya jata hai sb automatic garbidge collection hoTi hai...

// *** Modern Languages => Rust, Go(Golang), swift, Kotlin, TypesScript
// *** Mid modern langauges => Java, Java Script, Python, C#, PHP, Ruby

// 2 Types of Data Types => 1) Primitive 2) Non-Primitive
// 2 Types of Memory => 1) Stack    2) Heap
// Stack => Primitive Data Types 
// Heap => Non Primitive Data Types
// jab bh stack memory use hoti hai iska matlab apne jo bh variable use kya hai iski copy milegi
// or jab bh Heap memory use hoti hai usme Reference milega 

let myYoutube = "InsightSphere";
let anotherName = myYoutube;
anotherName = "Chai OR Code";

console.log(anotherName);
console.log(myYoutube);



// **************** Summary ************************
// jab hamne "myYoutube" ki value declare ki "InsighSphere" then "anotherName" variable ko equal kr dya "myYoutube" variable ke.. phr "anotherName" variable ki value change kr di console krne pr another name ki changable value ai becuase ye stack Memory hai , Syack memory main hame variable ki copy milti hai



let userOne = {
     email: "hshehriyaralam@gmail.com",
     phone: +923120346893,
};

let userTwo = userOne;
userTwo.email = "muhammadshamirmajeed@gmail.com";

console.log(userOne);
console.log(userTwo);


// ********************* Summary ****************************
/* ek Object main email and phone number store karaya  "userOne" variable ke name se and "userTwo" variable ko equal kr dya userOne se ,then "userTwo" ke email ko change kr dya , Now both variable ke email change ho jayega ...becuase ye "Heap Memory" hai  .... Heap memory main hamein Reference milta hai.



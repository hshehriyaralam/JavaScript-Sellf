// +++++++++++++++++++++++++++++++++++ [Array] +++++++++++++++++++++++++++++++++

// Array : Non primitive Data Type
// Array : Multiple Collections Of Data Items in Single variable
let arr1 = [2, 4, 5, 10];
 // name   array braces [ ELemnents ]

 // JS ke aaray Resizebale hOte hain incase ham other value bh add kr sakte hain

 // Get value through index numbers in array
 // index number always start in 0
 console.log(arr1[0]);

 // array shallow copies refere krta hain 
 // Shallow copy means jiske changing se actuall bh change hO jayega 
// Deep Copy means jsime actuall Change nh hOti kyunke isme hamien Refrence milti hain na ke actuall copies 

// 2nd way to define array 
let arr2 = new Array(6,8,9,89)
console.log(arr2);
console.log( typeof arr2);

// array  Methods 
// add last value 
arr2.push(8);
console.log(arr2);

// rmove last value 
arr2.pop();
console.log(arr2);

// add first value 
arr2.unshift(4);
console.log(arr2);

// Remove fisrt value
arr2.shift();
console.log(arr2);

//  Check array values 
console.log(arr2.includes(89));

// Convert array to strings 
let arr3 = arr1.join();
console.log(arr3);
console.log(typeof arr3);


// Splice and Slice methods
let arr4 = ["Aksh", "Sameer", "Shahrukh", "Humyun"]
console.log(arr4);

// Splice method 
// Splice actull array main manupalte krta hain .... Actuall array se bh remove kr dega 
let arr5 = arr4.splice(1,3)
console.log(arr5);
console.log(arr4);

// Slice methods 
// Slice actuall method main Manuplation nh karega ... Actuall array se remove nh hOga
let arr7 = ["SHameer", "Zain", "Daniyal"]
console.log(arr7);
let arr6 = arr7.slice(1,3);
console.log(arr6);
console.log(arr7);

/* 
*********************** Sumary *******************
01) array Non-primitive Data Type.
02) Array : Collections Multiple  Data in Single variable .
03) Array Values is known as "Element".
04) Arrays ELemnet allow store  different Data Type .
05) Array Resizable : It's mean icase we add other value after assign values .
06) Array values access through index number and index numbers always start 0 . 
07) Array Perfare Shallow copies ... not a deep copies .
08) 2nd way to define array array : new Array().
09) push() : add last Element .
10) pop() : Remove last Element .
11) Shift() : Remove 1st Element.
12) Unshift() : add 1st Element .
13) includes() : Check array Values.
14) Join() : Bind arrays and Convert array to strings.
15) slice() : array values copy But Not delete Actuall array.
16) splice() :array values copy and Delete actuall arrays.
*/
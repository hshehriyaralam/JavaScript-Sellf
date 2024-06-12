// Marging 2 arrays

let PLN = ["Nawaz", "Shahbaz", "Maryam"];
let MQM = ["Mustafa", "Khalid", "Kamran"];
let PTI = ["Imran", "Rashhed", "Fawad"]
// console.log(PLN);
// console.log(MQM);
 
// PLN.push(MQM);

// let PDM = PLN.push(MQM);
// console.log(PLN);
// ye method nested array push krta hain 


// let PDM = PLN.concat(MQM);
// console.log(PDM);
// concate prefere krta hai new array 


// 2 Array Ko murge krne ke lye concate use karenge seprate variable ke sath



// spred Operator
// let Chor = [...PLN, ...MQM, ...PTI]
// console.log(Chor);


// Nested array Convert to one array 
// let nestedArray = [5, 5, 9, 9, [3, 9, 0,], 9, 5, [4, 0, [4, 5, 6, 7,]]]

// let Suprem = nestedArray.flat(Infinity);
// console.log(Suprem);
// console.log(nestedArray)

// Convert String Values in Array
console.log(Array.isArray("Sherry"));
console.log(Array.from("Sherry"));



// Convert Multiple VAraibl is one Array
let std = 100;
let std2 = 200;
let std3 = 300;
let std4 = 400;
console.log(Array.of(std, std2, std3, std4));




/* *************** Summary ************************
01) Marging 2 array => .conact with new variable
02) Marging Multiple array => Spred [... varaible name, .....,  .....]
03) .flat(Infinity) => Nested Array Convert to One Array
04) Array.from("Sherry") => Strings Values Convert to Array
05) Array.of(varaibles name) => Multiple Variable  Convert to one array
*/
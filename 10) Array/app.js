//array => Collection OF multiplt Items Single Variable Mian Store karate hain
// let myaArr = [                      1, 2 , 3  , 4 ];
//   name    array bracket []       Element
// array bracket ki value ko element kehte hain Different Data Types bh ho sakte hain;
// JS ke array Resizeable HOte hain in  inCase ham other  values bh add kar sakte hain;

// array main Value Access Krte HAin Index number se
// index number 0 se start hOta Hain
// console.log(myaArr[0]);

// array shallow Copies refere krta hain na ke deep copies 
// shallow copy jiske changes se actual values change hoTi hai
// deep copy main hamien Reference milta hai actual change nh hoTa 


// 2nd way to Define array
let myaArr2 = new Array(1, 2, 3, 4, 4, 5, 6, 7, 8);
//add last value
myaArr2.push(6)


// Reomve last value
myaArr2.pop()

// add first value 
myaArr2.unshift(4)


// Remove First Value 
myaArr2.shift()


// array ki values check krnne ke lye 
// console.log(myaArr2.includes(4));



// koi ayesi value jo array main nh hain indexOf main outpt -1 ayega
// console.log(myaArr2.indexOf(19));



// Convert Array to String | Array Ko Bind Bh karega and string main conversion bh 
// let newArray = myaArr2.join();
// console.log(newArray);

// console.log(myaArr2);

// slice()  => Original array ko manuplate nh krta hai
// splice() => Original array ko manuplate  krta hai

var slppd = ["Akash", "Shah", "Ram", "Sita", "Lakshman"];
console.log(slppd);



console.log(slppd.slice(1 , 3)); // 
console.log(slppd);



console.log(slppd.splice(1,3));  // 
console.log(slppd);





/* ***************************** SUmmary ****************************
01) Collection of Items in Single VAriable
02) Array Values is known as "Element"
03) Array Element allow store in Different Data Type
04) Arrays Resizeable . It' mean inCase we add value after asign array
05) Array Value access through index number and index always start with 0
06) Array Prefare Shallow Copies ... not a Deep Copies
07) new Array ()  => 2nd way to define array
08) push() add last ELement 
09) pop () remove last Element
10) shift() remove First Element
11) Unshift () Add First Element
12) includes() Checking Array Values
13) join() => Convert array to String and Bind array Values
14) slice() => array values Copy But not Manuplate Original values
15) splice() => array values Copy and Manuplate Original Values
*/ 










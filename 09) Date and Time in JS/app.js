// Dates Usually Milisecond main Calculate hoti hai;
// Java Script main Dates 01 - January - 1970 se Calculate Hoti Hai;
// let myDate = new Date();
// // console.log((myDate));
// console.log(typeof myDate); // Object
// console.log(myDate.toString()); 
// console.log(typeof myDate); // Object
// // console.log(myDate);
// console.log(myDate); //  Thu june 06 2024 22:59:38 GMT-0600 (Mountain Daylight Time)
// console.log(myDate.toString()); // Thu june 06 2024 22:59:38 GMT-0600 (Mountain Daylight Time)
// console.log(myDate.toDateString());  // Thu June 06 2024
// console.log(myDate.toISOString());   // 2024-06-07T05:03:20.523Z

//  console.log(myDate.toLocaleDateString());  // 6/6/2024
//  console.log(myDate.toJSON());  // 2024-06-07T05:03:20.523Z | Similar toISOString()
//  console.log(myDate.toLocaleString()); //  6/6/2024, 11:07:33 PM
//  console.log(myDate.toLocaleTimeString()); //11:08:57 PM 
//  console.log(myDate.toTimeString());    //23:09:40 GMT-0600 (Mountain Daylight Time)
//  console.log(myDate.toUTCString());   // Fri ,  07 june 2024 05:10:49 GMT   



//  ************************* Summary 01 **********************
/* 
01) Dates Usally Milisecond Main Randor HOti HAi
02) JS main Dates 01 - January - 2024 se Calculate hoti hai
03) Dates Ka Data Type Object hai
04) By Default Dates Randor Hoti hai => Day - Month - Date - Year - Hours - Minutes - Seconds
05) toString() main bh Yahi Standard Hoga 
06) toDateString()  => Day - Month - Date - Year 
07) toLocaleDateString() => Date / Month / Year
08) toISOString() => Year - Date - Timezone
09) toJSON() => Year - Date - TimeZone 
10) toISOString() and toJSON() Both are Similar 
11) toLocaleString() => Date / Month / Year , Hours : Minutes : Seconds AM/PM
12) toTimeString() => Only Time Mentioned 23:09:40 GMT-0600 (Mountain Daylight Time)
11) toUTCString () => Day with Name - Date , Month Year Hours : Minutes : Seconds GMT
*/

// JS main Month 0 se start hote hain 0 to 11
// let myCreatedDate = new Date(2003, 7, 23);
// let myCreatedDates = new Date(2003, 7, 23, 12, 3);
// console.log(myCreatedDates.toDateString());
// console.log(myCreatedDate);


// Jb Double Digit main define krte hain month 1 se start hoga
// let myCreatedDateNew = new Date("2024-01-14");
// console.log(myCreatedDateNew.toLocaleString());

// MM DD YY Syntax 

// let myCreateDates2 = new Date("01-14-2024");j
// console.log(myCreateDates2);


// TimeStands 
// Time Randor in MiliSeconds
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);


// Comparison hamesha MIli Second main hOgi
// Jo Date ko define ki uska time conduct 
// console.log(myCreateDates2.getTime());


// Convert Milisecond to Second
// console.log(Date.now()/ 1000);
// Remove Decimal Value
// console.log(Math.floor(Date.now()/ 1000));



// Get Other Methods
let newDate = new Date();
console.log(newDate.getMonth() +1 ) ;
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getUTCDate());
console.log(newDate.getUTCDay());


console.log(`Date is ${Math.floor(Date.now()/1000)}`);
// FOrmate Customized Krne Ke lye


// var fejefo = newDate.toLocaleString('default',{
//     weekday : "long",
//     timeZone : "07T05",
// })
// console.log(fejefo);
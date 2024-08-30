// forEach loop koi value return nh karta 
// Example 
// let  Code = ["JS", "TS", "react", "NExtJS"]
// let values = Code.forEach((languages) => {
//     console.log(languages);
//     return languages
    
// })

// console.log(values);



// filter apne andar call back hi leta hai
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// let newNumbwera = numbers.filter((num) => num > 6); // explicite return 
// let newNumbwera = numbers.filter((num) => {
    
//      return num > 6
//     });

// console.log(newNumbwera);



// same work in forEach 
// let num12 = [2,4,5,6,7,8,9,10]
// let newNum12 = num12.forEach((num) => {
//     if(num > 6 ){
//         console.log(num);
//     }
// })
// console.log(newNum12);


// Logics
// let books = [
//     { title: "Book One", genre: "History", publish : 1989},
//     { title: "Book Two", genre: "Science", publish : 1992},
//     { title: "Book Three", genre: "Zology", publish : 2005},
//     { title: "Book Four", genre: "History", publish : 2009},
//     { title: "Book Five", genre: "Botony", publish : 2019},
//     { title: "Book Six", genre: "GK", publish : 2014},
//     { title: "Book Seven", genre: "Physics", publish : 2003},
//     { title: "Book Eight", genre: "History", publish : 2008},
//     { title: "Book Nine", genre: "History", publish : 1974},
//     { title: "Book Ten", genre: "Coding", publish : 1968},
// ]


// let NewBooks = books.filter((bk) =>  {
    // return bk.genre === "History"
//     return bk.genre === "History" && bk.publish >= 2003

// })

// console.log(NewBooks);



// map bh Call back function hai 
// ek sath ham 2 map bh assign kr sakte hain 
// let mapNums = [1,2,3,4,5,6,7,8,9,10];
// let newMapNums = 
//                mapNums.map((num) =>  num * 10)
//                .map((num) => num + 10)
//                .filter((num) => num >= 40)
// console.log(newMapNums);
// map bh ek method hai and  isme ham condition laga  kar value return kar sakte hain 




/* ++++++++++++++++++++++++++++++++ Summary +++++++++++++++++++++++++++++
01) ForEach loop not prefare return value
02) Filter accept call back function
03) map accept call back function 
 */



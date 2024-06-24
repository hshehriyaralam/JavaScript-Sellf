// Singleton Objects
// let darazUser = new Object();
let darazUser = {}
// console.log(darazUser);

// Nested Objects
// let Objects = {
//     email : "sherry",
//     fullName : {
//         userFullName : "SHahmeer",
//         userLastName :{
//             lastName : "khan"
//         }

//     }
// }

// console.log(Objects.fullName.userLastName.lastName);

// Multiple Objects Murch;
//  let objOne = {1: "a", 2: "b"}
//  let objTwo = {3: "c", 4: "d"}
//  let objThree = {5 : "e", 6:"f"}

//  let murchObj = {objOne,  objTwo}// 2ono Object lag aa rahe hain
// let murchObj = Object.assign({}, objOne,  objTwo)
// let murchObj = Object.assign(objOne,  objTwo, objThree)

// Spred Method
// let murchObj = {...objOne, ...objTwo, ...objThree,}



//  console.log(murchObj);


// Data Base se  zayda Users ayenge wo array Object ayega 
let Obj45 = [
    {
        id: 1,
        "email" : "Hshehriyaralam@gmail.com"
    },
    {
        id: 2,
        "email" : "muhammadshahmir@gmail.com"
    }
]
console.log(Obj45[0].email);

let fullObjects = {
    email : "hshehriyaralam@gmail.com",
    Phone : "03120246893",
    age : "20",
    IslOgedin : true,
}

console.log(Object.keys(fullObjects));
console.log(Object.values(fullObjects));
console.log(Object.entries(fullObjects));


console.log(fullObjects.hasOwnProperty("age"));


/*
************************* Summary ******************
01) Declare Singleton Object using Constractor
02) Allow Declare Nested Objects as like Array
03) Multiple Objects Murch using assign method => assign()
04) wasy way to murch Objects as spreed method as like Array =>  {.....obj}
05) Access Only keys in Objects => Object.keys(Obj Name);
06) Access Only value in Objects => Object.values(Obj Name);
07) access key value pare of Objects =>  Object.entries(Obj)
08) Check key in Object => objName.hasOwnProperty("keyName")
*/











// Class main sb assign kr sakte hai without function without keyword 
// class User1 {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
    // ek method add krenge jisme password main abc by default aa ajayeag
    // defaultPassword(){
    //     return `${this.password}abbcW`
    // }
    
    // username UpperCase
//     UpperCaseUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// let chai = new User1("Chai", "hshehriyaralam@gmail.com", "12334")
// console.log(chai);
// console.log(chai.defaultPassword());
// console.log(chai.UpperCaseUserName());


// without Class syntaxt behined the scene work kaise hota 
// behined the scene 
// function User2(username, email, password){
//     this.username = username
//         this.email = email
//         this.password = password
// }
// User2.prototype.defaultPassword = function (){
//     return `${this.password}abbcW`
// }
// User2.prototype.UpperCaseUserName = function(){
//     return `${this.username.toUpperCase()}`
// }


// let Coffee = new User2("shahmeer", "shehriyar@gmail.com", "12344")
// console.log(Coffee);
// console.log(Coffee.defaultPassword());
// console.log(Coffee.UpperCaseUserName());


// **************** Inheritance **************** 
// class User3 {
//     constructor(username){
//         this.username = username
//     }

//     logme(){
//         console.log(`USERNAME is ${this.username}`);
        
//     }
// }

// let chai1 = new User3("Shahmeer")
// CHai.logme()

// if user ko admin main convert krna hua to 
// class Admin extends  User3 {
//     constructor (username , email, password){
//         super(username)
        // but username user3 Ka use krna hai to 
        //Pehle "call" method use krte tHe class se Pehle 
        // But abh nh ab ham "super" keyword use krte hain 
        // this bh assign krne ki need nh hai
        // super : behined the scene khud hi "this" le jayega 
//         this.email = email
//         this.password = password
//     }
//         addCourse(){
//             console.log(`new Course add by ${this.username}`)
            
//         }


// }

// const chai2 = new Admin("sherry", "hshehriyaralam@gmail.com", "digwid45365")
// chai2.addCourse()
// chai1.addCourse()
// chai2.logme()

// console.log(chai2 instanceof User3);
// console.log(chai2 instanceof Admin);
// console.log(chai1 instanceof Admin);

// **************** Static Properties *****************

class user4 {
    constructor(username){
        this.username = username
    }

    print(){
        console.log(`USERNAME is ${this.username}`);
        
    }
    // jaise hi user bane is user ko 1 unique ID mil jaye 
    // createID (){
    //     return `123`
    // }
    // But ye Create ID ki functionality sab ko nh deni 
    // iske lye ham isse "static" kar denge 
     static createID (){
            return `123`
        }


}

let shahmeer12 = new user4("Shahmeer")
console.log(shahmeer12.createID());


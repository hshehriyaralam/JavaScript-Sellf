// OOP : Object Oriented Programing 
// Javascript :  prototype based language 
// Objects : collection properties and methods 


const user = {
    userName : "Sherry",
    isLogin : true,
    loginAccount : 8,
    getUserDeatils : function () {
        // console.log(this.userName); 
        // this current syntaxt ko refere krta hai 
        console.log(this);
        
    }
}
// console.log(userName);
console.log(user.getUserDeatils());


const user2 = {
    userName : "shahmeer",
    isLogin : false,
    loginAccount : 9,
    getUserDeatils : function () {
        // console.log(this.userName); 
        // this current context ko refere krta hai 
        console.log(this);
        
    }
}
// console.log(userName);
console.log(user2.getUserDeatils());



// Contructor Functions 
function ClintSide(username, budget, quantity){
    this.username = username,
    this.budget = budget,
    this.quantity = quantity
    return this
}

let OrderOne = ClintSide("shah", 200, 89) ;
// But agar ham OrderTwo bana denge to value over Rigt ho jayega 

let OrderTwo = ClintSide("Zain", 300, 98)
console.log(OrderOne);
console.log(OrderTwo); 
// overright se bachne ke lye new keyword use karenge 
// "new" and "this" ye intenses hai OOP ka part hai 
// 
let OrderThree =  new ClintSide("Zain", 300, 98)
let OrderFour =  new ClintSide("Hamza", 500, 103)
console.log(OrderThree);
console.log(OrderFour);


/* "new" keyword 
Step 1: new  keyword se ek empty Object create hota  hai jaise "this" main , jisko instense Bola jata hai 
Step 2: ek construction function call hota hai "new" keyword ke waja se , jitne bh arguments wagera de deta hai 
Step 3:apke keyword "this" ya "new" uske andar ye inject hote hain
Step 4: apko function mil jate hain 
*/

/*  ++++++++++++++++++++++++++++++++ Summary ++++++++++++++++++++++++++++++=
01) Conrtuctor property Reference hoti hai khud ke bare main  
02) OOP : Objects Oriented Programing 
03) Objects : Collection properties and methods 
04) "this" current context ko  Refere krta hai
05) Values Over right se  bachne ke lye "new" keyword use krte hain
06) 
07) 
08) 
09) 
10) 






*/
 
// Promise 
// The Promise object representing the eventual completeion (or failure) of an asyncronous operations and its resulting value 

// Promise ka matlab jo apne abh async task dya hai wo abh Que main lag kr complete nh hOga
// promise future main jaa jr complete hota hai 

// Promise main three stages hain
// 1. Pending 
// 2. fulfiled
// 3. reject


// promise apne app main ek "object" hai 
// promise ko varible main hold krna zarori nh hai
// promise ek call back leta hain 
let promiseOne = new Promise ((resolve, reject) => {
    // DO any async Task 
    // DB calls, network call
    setTimeout (()=> {
        console.log("async task complete ");
        resolve()
    }, 1000)
})
// .then ka connection hai resolve kr sath 
// .then m bh ek call back function milta hai 
// .then ko resolve ke sath connect karne ke lye async m resolve() method ko call krna hoga 
promiseOne.then(() => {
    console.log("Promise Consume");
    
})
// BUt pehe async task run hoga phr .then ki value 






new Promise ((resolve,reject) => {
    setTimeout(() => {
        console.log("Promise Two & async task 2 ");
        resolve("e")
    }, 1000)
}).then((e) => {
    console.log(e);
    
})


// async task se .then tk value pass krne ke lye resolve use hoga 
// resolve ke parameters pr  data bh pass kr sakte ho 
// data kch bh ho sakta ha array, function object etc 
let promiseThree = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise Three");
        resolve({userName : "Shehriiyar"})
    }, 5000)
})
promiseThree.then((result) => {
    console.log(result);
    
})
// resolve ka data .then ke parameter main ayega 







// agar promise main error hua  to reject() method se handle karenge 
let promiseFour = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log("promise FOur");
        let error = true
        if(!error){
            resolve({UserName :  "Shahmeer", Pass : 12134})
        }else{
            reject("Something went wrong ")
        }
    }, 2000)
})
let thenPromiseFour = promiseFour.then( (user) => {
    console.log(user)
    return user.UserName
})
console.log(UserName);
// .then main resolve Data object to mil rahi hai 
// but key and value main error dega 

// data nikalne .then ki or further ap chaining kr sakte ho 
promiseFour.then( (user) => {
    console.log(user)
    return user.UserName
})
.then((UserName) => {
    console.log(UserName);  
})
// 1st .then main jo value return karenge wo 2nd .then ke parameter mai ayega 
.catch((error) => {
    console.log(error, "");
    
})



// last main finally method use karnege kch bh proccess ho resolve ya reject wo finally main aa jayega 
let PromiseFive = new Promise ((resolve, reject) => {
    let login = false
    if(!login){
        reject("Not have an account ")
    }else{
        resolve("LOgin")
        
    }
}).then((result) => {
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() =>   console.log("The promise is either resolved Or Rejected ")
)


let PromiseSix = new Promise ((resolve, reject ) => {
    setTimeout (() => {
        let error = false
    if(!error) {
        resolve({Lnaguage : "JavaScript", lecture : "Promise"})
    }else{
        reject("Error! Went wrong ")
    }
    }, 1000)
})
// .then ya .catch  ki jaga async await use kr sakte 
let PromiseSixConsume = async  () => {
    
    const response = await PromiseSix 
    console.log(response);
    // But async await directly error ko handle nh  kr sakte 
    // async await error  handle ke lye try catch use karenge 

    try{
        const response = await PromiseSix 
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
}
PromiseSixConsume()


// fetch 
let getGithubInfo = async () => {
    const response = await fetch ("https://api.github.com/users/hiteshchoudhary")
//     // console.log(response); yaha iski value aa rhi ha But data m nh aa rhi 
//     // kyunke data ko bh read krne ke lye time chaia hota hai
//     // yhan bh await laganab hoga 
    const data = await response.json()
    console.log(data);   
}
getGithubInfo()




// Same work in .then and catch 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((result) => {
    return result.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)
)

// But jo sab se end mo hai wo execute pehle kyun ho rha hai 


/* ++++++++++++++++++++++++++ Summmary +++++++++++++++++++++++++++++++++
01) Promise : abh jo task mila hai wo abh que lag kr coplete nh hoga 
02) Promise Future main jaa kr complete hota hai
03) Promise apne ap main Object  hai
04) Promise ko variable main hold krna zaroori nh hai
05) Promise ka parameter main 2 method hote hain 1) resolve() 2) reject
06) Promsie resolve Hoga to .then() run hoga 
07) Promise agar reject hua to .catch
08) async task main resolve method assign krna hoga 
09) resolve() ke parenthesis main jo data pass karenge wo .then ke parameter main ayega 
10) isi tarha Reject bh work krega 
11) resolve  ka data kch bh ho sakta 
12) 2 .then laga kr Data chaining krte hain 
13) ek  method or  hai "finally()" isme true ho ya false wo print krdega
14) .then and .catch ki jaga async await ko bh use kr sakte hain
15) But async await directly error handle nh karta 
16) async await main error handle ke lye try and catch use krte hain
*/
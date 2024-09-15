// call  keyword work kya krta hai ?
function SetUsername(username){
    this.username  = username
    console.log("usernameCalled");
    
}

function createUsername(username, email, password) {
    // SetUsername(username)
    // function execute ho rha .. but after execution reference apne pass hold nh kr rha 
    // ayese situation main ham "call" keyword use krenge 
    // Reference hold krne ke lye "call" keyword use krte hain 
    // SetUsername.call(username)
    // call se bh refence nh aya 
    // then call ke parameter main  1st value "this" pass out krenge 
     SetUsername.call(this, username)


    this.email = email
    this.password = password
}

const newCall = new createUsername("shahmeer", "hshehriyar@gmail.com", 74868583)
console.log(newCall);


// 01) "call" hamara execution context kisi or function ko pass kr deta hai 
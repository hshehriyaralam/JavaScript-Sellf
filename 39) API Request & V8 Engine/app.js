// API ek Talking language hai 
// frontEnd and BackEnd apas main baat te hain
// randomuser.me API web
// JSON Formatter : APIs read ke lye 

// fetch se pehle XMLhttpRequest se API request Hoti tHi 

// XMLHttpRequest  : ye apne app main ek method hai
// XMLHttpRequest : isko Object bnane ke lye ek "new" keyword use krte hain
const URLRequest = 'https://api.github.com/users/hiteshchoudhary'
const API1 = new XMLHttpRequest();
API1.open('GET',URLRequest)   
let insert;
// Open hi Request ko bhejta hai | Open main 2 parameters availbale hote hain 1) method, string 
// Open ko call karna Hoga jab Request Jayegi 
API1.onreadystatechange  = function () {
    console.log(API1.readyState);
    // ab state ko detect bh kar sakte hain 
    if(API1.readyState === 4 ){
        // console.log("four");
        // API ki sari detals and value bh console main print kr dete hain
        // console.log(this.responseText);
        // Jab bh URL se response ata hai wo string ma ata hai use JSON main convert karna hoga 
        // parse string ko JASON main convet kr dega 
        let data = JSON.parse(this.responseText);
        // console.log(data.login);
        insert = document.getElementById('insert');
        insert.innerHTML = `<div class="card bg-dark text-white" style="width: 20rem; ">
        <img src="https://th.bing.com/th/id/OIP.Zz0nVELryfmBS9strggNFgAAAA?w=196&h=196&c=7&r=0&o=5&pid=1.7" class="card-img-top" alt="...">
        <div class="card-body bg-dark text-white">
          <h5 class="card-title">${data.login}</h5>
          <p class="card-text">${data.name}</p>
          <p class="card-text">${data.followers}</p>
          <p class="card-text">${data.following}</p>
          <p class="card-text">${data.id}</p>
          <p class="card-text">${data.bio}</p>
        </div>
      </div>  `  
    }
}
// open ko call krenge .send se 
API1.send()
// jab apne request bheji hai request change Hote hain 
// Request Ke state change Hote rehte hain
// State ko check karte hain "readyState" se 
// But "readyState" se one time track hoga 
// Continously track krne ke lye uski state change kr do 
// so  "onreadystatechange" ye continously track krege 
// onreadystatechange ek functin leta hai us function main readyState run kara denge 






// V8 Engine


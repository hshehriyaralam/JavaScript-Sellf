// Tevarsing 
// Parent CHild Relation 
// Child Parent Relation 
// Child Child Relations 
// Parent Parent Relation 

let Expression1 = document.querySelector('.parent')
console.log(Expression1);
// ye to ho gya parent but isme Kitne Children hain wo bh access kr sakte  hain
console.log(Expression1.children);
// ye HTML collection Return karega 
console.log(Expression1.childNodes);
console.log(Expression1.children[1].innerHTML);
console.log(Expression1.children[1].innerText);
console.log(Expression1.children[1].textContent);

// Loop Run
for (let i = 0; i < Expression1.children.length; i++) {
    console.log(Expression1.children[i]);   
}

Expression1.style.color = "white";

// get firstChild
console.log(Expression1.firstElementChild);
console.log(Expression1.firstChild); // isme bohat sare Extras value aa jayenge 

// get LastChild
console.log(Expression1.lastElementChild);


// Move Child to Parents 
let dayOne = document.querySelector('.day')
console.log(dayOne.parentElement);

// move Next ELement 
console.log(dayOne.nextElementSibling);


// ChildNodes 
// ChildNodes Complete Tree structure
// ChildNodes Line Break ko bh Node Element Count krta hai 
// But ye sirf ek hi line ko Node Element ko Count karega ek se zyada  nh 
// ChildNodes "Enter" ko bh TextElement Count krta hai 
// ChildNodes HTML Comments ko bh count karega 



// DOM ke through HTML ke Attribute Create kr sakte hain 
const div = document.createElement('div');
console.log(div);
// isme styling and title and id and className bh add kar sakte hain 
div.className = "Shahmeer";
div.id = Math.round(Math.random() * 10 + 1);
// div.innerText = "DOM New ELement "
div.style.color = "white"
div.style.textAlign = "center"
div.style.marginTop = "50px"
div.style.fontSize = "50px"
const addText = document.createTextNode("DOM New Element")
div.appendChild(addText);

document.body.appendChild(div)


/* *************************** Summary ******************************
01) DOM se Tevarsing kar sakte hain Parent to Child, Child to Parent , Child to Child 
02) Parent to Child : Children()
03) Parent to Child : ke lye ChildNodes bh h but isme Extra value bh ate hain 
04) ChildNodes() : Complete Tree structure hai
05) ChildNodes() : Line break ko bh Node Element Count krta hai 
06) But ek hi line breake ko node Element Count karega Ek se Zyada nh 
07) ChildNodes() : "Enter" Ko bh Text Element Count Karta hai 
08) ChildNodes() : HTML Comment ko bh Count karega 
09) Get First ELement : Expression1.firstElementChild
10) Get LastElement : Expression1.LastElementChild
11) Move Child to Parents : dayOne.parentElement
12) Child to Child : dayOne.nextElementSibling
13) document.createElement : ke through new Element Create kar sakte hain JS ke through 
14) End isko Append krne ke bd Web page render Ho jayega :document.body.appendChild(div)
15) isme Styling , id and ClassName bh add kar sakte hain  
*/




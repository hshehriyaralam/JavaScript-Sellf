// console.log("Node list ");

// getElementById
let output = document.getElementById('title')
console.log(output);
// HTML ke sare TAg aa jainge .. But node Enviroment main Error ayege and Browser main id ke through HTML ke tags aa jayenge 

// getElementById se id ki value bh access kr sakte hain 
let output1 = document.getElementById('title').id
console.log(output1);


// Get Class name 
let output2 = document.getElementById('title').className
console.log(output2);

// HTML ke All attributrs bh  nikal sakte hoo 
let output3 = document.getElementById('title').getAttribute('class')
console.log(output3);


// Jis tarha get attribute add kya hai isi tarha set attribute bh laga sakte hain 
// set attribute se Class name and ID de sakte hain and change bh kar sakte hain 
// HTML ke class and id ko JS ka setAttribute Hamesha overwrite karega 
let output4 = document.getElementById('title').setAttribute('ID', 'test')
console.log(output4);
console.log(output);

 // Id ko get kr ke iski value pata kar sakte hain
 let output5 = document.getElementById('p')
 let output6 = output5.textContent 
 let output7 = output5.innerHTML
 let output8 = output5.innerText
 console.log(output5);
 console.log(output6);
 console.log(output7);
 console.log(output8);


// value 3 method se get ho rha hai 1)textContent 2)innerHTML 3)innerText
// But isme different kya hai 

// innerText : se jo display none value hai jo css ke through hide ki gai hai wo value nahi mile gi 
// TextContent : But TextConetent sara Content show hoga Jo Hide bh hai

// ye nh ke koi sahi ya koi galat hai depending on useCase 

// innnerHTML : ye text ke sath HTML Tag ko bh le ayegga agr wo text main hue to 
// Example : 
{/* <p class="paragraph" id="p">Lorem ipsum dolor sit amet <span>consectetur</span> est?</p> */}
// ye innerHTML main span Tag bh show karega But innerText main show nh karega 



// QuerySelector 
let output9 = document.querySelector('h1')
output9.querySelector("#title")
output9.querySelector(".heading")
console.log(output9);
// query selector first elemet ko get krta hai 


// ek  tarika hai querySelectorALL 
// querySelectorALL se DOM Manupulation krne ke lye array index bracket and index number de kr access kya jata otherwise error ayega 
let output10 = document.querySelectorAll('h1')
output10[0].style.color = "red"
console.log(ou10);



// Nodelist array nh and ye ForEach loop provide krta hai 
// But agar isme map and other loop use krna hai  to pehle array main conevrt krna parega 


// getElementByClassName se HTMLCollection get hoGa na ka array 
let output11 = document.getElementsByClassName('Items')
console.log(output11); // || HTML Collection get hua isme ForEach ya Map use nh kr sakte kyunke ye array nh hai pehle ise array main convert krna hOga
let output12 = Array.from(output11)
console.log(output12);
let output13 =   output12.forEach((li) => {
    li.style.color = 'white'
    li.style.liststyle = 'none'
})
console.log(output13);



/* 
01) document.getElementById(): HTML ke sare Tag Get ho Jayenge 
02) document.getElementById('item').id,title : id se Get kr ke uski ID ya title bh get kt sakte hain 
03) document.getElementByClassName('items') : Jis Tarah id se get Kar sakte hain isi tarha Class se Bh  get kr sakte hain But wo Array nh  hoga wo HTML Collection hoga isme map, ForEach ya array ko koi method use nh kar sakte 
04) document.getElementByClassName('items') : Class se get krne ke bad Array main conevrt krna hoga jabh map ya ForEach use kr sakte hain  "Array.from(variable)"
05) HTML Attributes bh nikal sakte hain : document.getElementById().getAttributes()
06) id se get krke iski value pata kar sakte hian :document.getElementById('p').TextContent
07) Value get Krne ke 3 tarike hain 1) TextContent 2) innerHTML 3) innerText
08) But iski Dependacies main Difference hai : TextContent Hide value bh shpw hogi
09) innerText : se hide value show nh hogi and na hi HTML ke tags show honge Text main
10) innerHTML : HTML ke Tags bh show Honge Text main and Hide value show nh hogi 
11) id and ClassName ke ilawa : document.querySelector('h1') ye first Element ko get  karega 
12) isi tarha document.querySelectorsALl('h1'): bh But isme sare Tags Get Honge 
13) document.querySelectorsAll : se manuplate ke lye index number lagana hoGa output10[0].style.color = "red"
14) Nodelist Array nh hain ye ForEach loop Prefare karta hai
15) Map ya other loop run ke lye Pehle Array mmain Convert krna hoag 
*/ 
// console.log("Lock");
function addlanguage(langName){
  const li = document.createElement('li')
  li.innerHTML = `${langName}`
  document.querySelector('.Language').appendChild(li)
}
addlanguage("Python");
addlanguage("Java");
addlanguage("Ruby");

// li vatiable bana kr createElement kr diya and uske bad li ko assign kr dya function ke parameters se then querySelector laga kr li ko append kr dya ab function ko invoke karenge and argument main jo value denge list append ho web browser render Ho jayega 


// But isse bh Optimize function bh bana sakte hai jo easy to read ho 
function OptimizeLanguage(LanguageName ){
    const li = document.createElement('li')
    // const addText = document.createTextNode(LanguageName)
    // li.appendChild(addText)
    // 2nd Way 
    li.appendChild(document.createTextNode(LanguageName))
    document.querySelector('.Language').appendChild(li)
}

OptimizeLanguage("Reacts")
OptimizeLanguage("NExt JS")


// YE Value add ho rahi Edit ke lye Kya approach hOgi 
// Edit ke lye pehle select hona to zaroori hai 
 let firstLenght =  document.querySelector("li:nth-Child(2)");
 console.log(firstLenght);
//  firstLenght.appendChild("C++")



 function EditValue (ParaName) {
    let newli = document.createElement('li')
    newli.textContent = ParaName
    firstLenght.replaceWith(newli)
 }

 EditValue("C++")
// Edit krne ke lye ReplacewWith Use hoga 


// Edit 2nd Way OuterHTML 
const firstLi = document.querySelector("li:nth-Child(1)")
console.log(firstLi);
firstLi.outerHTML = `<li> TypeScript </li>`

// Remove 
let lastLang = document.querySelector("li:last-child")
lastLang.remove()


/*  ******************************** Summary ****************************
01) list Main Value Add krne ke lye : querySelector laga kr AppendChild()  laga den
02) value Edit krne ke lye pehle Select Karna hOga : document.querySelector("li:nth-Child(2)")
03) Edit value main replaceWith method use karnege 
04) ek or method hai outerHTML main edit "li" ko add kr denge 
05)  firstLi.outerHTML = `<li> TypeScript </li>`
06) value remove ke lye select kr ke remove method laga denge 
07)  lastLang.remove()
*/




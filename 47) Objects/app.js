// apko kisi objects ko janna hia hai 
// iske lye ek property hai "getOwnPropertyDescriptor"

// Math.PI = 89
// console.log(Math.PI);

// let  varai3 = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(varai3);

const greenTea = {
    name : Math.PI,
    price : 99.9,
    isAvalable : true,
    flavour :function (){
        console.log("flavour");
        
    }
}

// console.log(greenTea); 

// iski wirtable and eneumeriable vakues ko true se false kr sakte hain
Object.defineProperty(greenTea, "name", {
    // writable : false,
    enumerable : true
})
// console.log(Object.getOwnPropertyDescriptor(greenTea, "name"));

// isme loop lagana ho to 
// But isme enumerable  ko false krne se loop run nnh hOga 
for (let [key, value]  of Object.entries(greenTea)) { //Object.entries : isi lye add kye Objects iterable nh tHa 
    // But agar object main function hua to for of loop chalega ya nh 
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}
// enumerable  ko false karne loop main just name nh chla
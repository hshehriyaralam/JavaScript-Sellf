// function hamesha valuable do jisse read kr ke work ka idea ho

// 



// ek situation hogi jisme arguemnt ki count nh pata  => ayesi situation main ham paremter main rest & spred OPerator HOta hai 
// function calculattCartPrice (...num1){  // Spred and Rest Method
//      return num1
// }
// // console.log(calculattCartPrice(200));
// console.log(calculattCartPrice(200, 300, 400));




function CalculatePizzaCart (val1, val2, ...num1){
    return( val1, val2, num1 )
}

// console.log(CalculatePizzaCart(200, 400, 1450, 1560));
// 1st argument 1st parameter main store ho gya 2nd 2nd main end the last rest array 
// ruturn always last value ko hi prefare karega 



// WIth Objects 
const user = {
    pizzaFlavour : "Chicken Fajita", 
    pizzPrice : 480,
}

function CombinedPizza(anyobject){   
    console.log(`My Favorite pizza ${user.pizzaFlavour} and price  is ${user.pizzPrice} `);
}
// CombinedPizza(user);
CombinedPizza({
    pizzaFlavour : "Chess Pizza",
    pizzPrice : 250,
})


// With Array
let IceCream = ["Chocolate", "Karunch", "Stawbery"]
function combinedIceCream (getArray){
    return getArray[0]
}

// console.log(combinedIceCream(IceCream));
console.log(combinedIceCream(["Vanila", "Banana"]));


/*
****************** Summary **********************
01) Function always declare a meaningfull variable 
02) Rest and Spred Property allowed huge Arguments 
03) Depending On situation Rest  OR Spred Propert
04) Functions Declare with Objects 
05) return method work only last value
06) allow to declare Objects in functins Argument
07) allow to declare Array in functions Argument 
*/







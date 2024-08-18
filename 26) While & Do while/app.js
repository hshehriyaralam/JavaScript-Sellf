// console.log("Hello SMIT");

let index = 1;
while (index <= 10) {
    console.log(` loop continue ${index}`);
    index = index + 2;
}


let arr1 = ["Ram", "Sita", "gita"];
let i2 = 0
while(i  < arr1.length){
     console.log(arr1[i2]);
     i2  = i2 + 1;
};

// table Perform with While Loop
let TableNumber = 2
let tableLenght1 = 10
let i = 1
while (i <= tableLenght1) {
    let table = TableNumber + ` * ` + i + ' = ' + i*TableNumber;
    i = i + 1
    console.log(table);
};


// Do while loop
let Score = 11
do{
    console.log(`Score is ${Score}`);
    Score++;
}while(Score <= 10)
// do while condition true na hoto error nh ayega   

// while 
let Score1 = 11
while (Score1 <= 10) {
    console.log(`Score is ${Score1}`);
    Score1++;
}


// For Loop 
for (let index = 11; index <= 10; index++) {
    console.log(index);

}



// Table with Do while loop
let tableNumber = 9;
let tableLenght = 10;
let i3 = 1
do{
    console.log(tableNumber + ` * ` + i3 + ` = ` + i3*tableNumber);
    i3++;
}while(i <= tableLenght)

/* 
*********************************** Summarry *******************************************
01) 3 types Loops > For Loops, While loops, do while Loops
02) All loops same works 
03) For loops : for( i = 0; i<=10; i++ ){console.log(i)}
04) for loops :  (initialization;  conditions , increment) {result}
05) While Loops : let i = 0; while( i<=10 ){console.log(i) , i++}
06) While Loops : initialization; while (conditions) {result , increment}
07) Do while loops : let i = 0; do{ console.log(i) , i++ }while(i <= 10)
08) Do while loops : initialization; do{result ,  increment }while(conditions)
09) initialization undre parenthesis in for loops
10) But while and Do while loops initialization oout of block scope

*/






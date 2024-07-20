// Day 02 :-  Operators

// Arithmatic operators

let varOne = 30
let varTwo = 20

console.log("A+b = ", varOne + varTwo);
console.log("A-b = ", varOne - varTwo);
console.log("Axb = ", varOne  * varTwo);
console.log("A/b = ", varOne / varTwo);
console.log("A%b = ", varOne % varTwo);



// Assignment operators

console.log(varTwo += varOne);
console.log(varOne -= varTwo);



//Comparision operators

let comparision1 = (() => {
    if (varOne >= varTwo) {
        console.log(varOne, " is greater then ", varTwo);
    }

    else console.log(varTwo, " is greater then ", varOne);
})()


let varThree = 23
let varFour = '23'

console.log(`Here variable - ${varThree} acts as Number and Variable - ${varFour} acts as integer`);

if (varThree == varFour) {
    console.log(`${varThree} is equal to ${varFour}`)
} 
else console.log(`${varThree} is not equal to ${varFour}`);


if (varThree === varFour) {
    console.log(`${varThree} is equal to ${varFour}`);
} 
else console.log(`${varThree} is not equal to ${varFour}`);
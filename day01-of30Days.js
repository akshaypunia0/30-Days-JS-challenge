//Variables and datatypes

var variable1 = 16
console.log(variable1);

let variable2 = 'Akshay chaudhary'
console.log(variable2);

const variable3 = true
console.log(variable3);

const array = [1,'abc',3,4,5]
console.log(array);
console.log(typeof(array))
console.log(typeof(array[1]));
console.log(typeof(array[2]));

const obj = {
    'firstName': 'Akshay',
    'lastName': 'Chaudhary',
    'date': 23
}
console.log(obj);
console.log(typeof(obj));
console.log(typeof(obj.firstName));
console.log(typeof(obj.date));

let variable4 = 'Akshay'
console.log(variable4);
variable4 = 23;   //reassigning value of variable4
console.log(variable4);

const variable5 = 123
console.log(variable5);
// variable5 = 345    //we can't reassign any value to a variable declared using const
// console.log(variable5);
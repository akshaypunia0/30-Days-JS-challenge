// Nested if-else statement
// Task 1, Task 2 and Task 3


const randomNumber = () => {
    let number1 = Math.floor((Math.random() * 10))
    let number2 = Math.floor((Math.random() * 10))

    let result = number1 - number2
    console.log(result);
    return result
}
let number = randomNumber();

const checkNumber = (number) => {
    
    if (number > 0) {
        console.log(`The number is positive: ${number}`);
    } else if (number < 0 ) {
        console.log(`The number is negative: ${number}`);
    } else {
        console.log(`The number is zero: ${number}`);
    }
}

checkNumber(number);



// switch cases
//Task 4 and Task 5


// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// switch (2) {
//     case 1:
//         console.log(days[0]);
//         break;
//     case 2:
//         console.log(days[1]);
//         break;
//     case 3:
//         console.log(days[2]);
//         break;
//     case 4:
//         console.log(days[3]);
//         break;
//     case 5:
//         console.log(days[4]);
//         break;
//     case 6:
//         console.log(days[5]);
//         break;
//     case 7:
//         console.log(days[6]);
//         break;

//     default:
//         console.log('Error: Please enter a number between 1-7');
//         break;
// }


// const number = Math.floor((Math.random() * 10) + 1)

// const result = (number%2 == 0) ? `${number} is even` : `${number} is odd`

// console.log(result);


// let randomArray = ['clear', 10, '5', 'solar', 20, 'door', 50];

// function filter (array) {
//     let filterArray = [];
//     let avarageNumber = 0;
//     for (let i = 0; i <= array.length; i++) {
//         if (typeof array[i] === 'number') {
//             filterArray.push(array[i]);
//             avarageNumber += array[i];
//         }
//     }
//     return avarageNumber / filterArray.length;
// }

// console.log(filter(randomArray));

let mathOperation = prompt ('Please specify the mathematical action');
let firstNumber = +prompt ('Please enter fist number');
let secondNumber = +prompt ('Please enter second number');
let result;

function doMath (mathOperation,firstNumber,secondNumber) {
    switch (mathOperation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/': 
            result = firstNumber / secondNumber;
            break;
        case '%':
            result = firstNumber % secondNumber;
            break;
        case '^':
            result = Math.pow(firstNumber,secondNumber);
        default:
            alert('Invalid operation');
            return
    }
     return result
}

let final = doMath(mathOperation,firstNumber,secondNumber);

console.log(final);
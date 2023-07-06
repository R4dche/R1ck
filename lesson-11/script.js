let randomArray = ["clear", 10, "5", "solar", 20, "door", 50];

function filter(array) {
  let filterArray = [];
  let avarageNumber = 0;
  for (let i = 0; i <= array.length; i++) {
    if (typeof array[i] === "number") {
      filterArray.push(array[i]);
      avarageNumber += array[i];
    }
  }
  return avarageNumber / filterArray.length;
}

console.log(filter(randomArray));

let mathOperation = prompt("Please specify the mathematical action");
let firstNumber = +prompt("Please enter fist number");
let secondNumber = +prompt("Please enter second number");
let resultMathOperaton;

function doMath(mathOperation, firstNumber, secondNumber) {
  switch (mathOperation) {
    case "+":
      resultMathOperaton = firstNumber + secondNumber;
      break;
    case "-":
      resultMathOperaton = firstNumber - secondNumber;
      break;
    case "*":
      resultMathOperaton = firstNumber * secondNumber;
      break;
    case "/":
      resultMathOperaton = firstNumber / secondNumber;
      break;
    case "%":
      resultMathOperaton = firstNumber % secondNumber;
      break;
    case "^":
      resultMathOperaton = Math.pow(firstNumber, secondNumber);
    default:
      alert("Invalid operation");
      return;
  }
  return resultMathOperaton;
}

let final = doMath(mathOperation, firstNumber, secondNumber);

console.log(final);

const userString = prompt("Please write a sentence");
const userRemoveSymbol = prompt("Lead the characters that need to be deleted");

function removeSymbol(usersString, usersRemoveSymbol) {
  const stringToArray = Array.from(usersString);
  const removeSymbolToArray = Array.from(usersRemoveSymbol);
  const filterArray = stringToArray.filter(
    (char) => !removeSymbolToArray.includes(char)
  );
  return filterArray.join("");
}

const result = removeSymbol(userString, userRemoveSymbol);

console.log(result);

let parentArray = [];
let childArray = [];

function twoDimensionalArray() {
  const usersParentArray = +prompt("Specify the length of the parent array");
  const userschildArray = +prompt("Specify the length of the child array");

  for (let i = 0; i < usersParentArray; i++) {
    parentArray[i] = [];
    for (let k = 0; k < userschildArray; k++) {
      let element = prompt(`Enter Elemet ${k}:`);
      parentArray[i][k] = element;
    }
  }
  return console.log(parentArray);
}

twoDimensionalArray();



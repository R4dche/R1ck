function calc() {
    const firstNumber = +prompt('Enter first number');
    const secondNumber = +prompt('Enter second numer');
    alert(
        `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}
${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}
${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}
${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
}

calc()

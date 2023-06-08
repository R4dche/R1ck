// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let result = [];

for (let i = 20; i <= 30; i = i + 0.5) {
    result.push(i)
}

console.log(result.join(', '));

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let dollar = 27;
let multiDollar;
let result1 = '';

for (let i = 10; i <= 100; i = i + 10) {
    multiDollar = `${dollar * i}`;
    result1 += `${i}$ = ${multiDollar} грн` + '\n';
}

console.log(result1);

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let integer = 50;
let integerResult = [];

for (let i = 1; i <= 100; i++) {
    if (i ** 2 <= integer) {
        integerResult.push(i);
    }
}

console.log(integerResult.join(', '));

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

function validateInteger (number) {
    if (number < 2) {return false};

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {false};
    }

    return true;
}

console.log(validateInteger(11));

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

function validateSqrtThree (number) {
    for (let i = 3; i <= number; i++) {
        if (number % 3 === 0) {return true}
    }

    return false;
};

console.log(validateSqrtThree(81));

// Вивести на сторінку в один рядок через кому числа від 10 до 20.

let result = "";

for (let i = 10; i <= 20; i++) {
  result = `${result + i},`;
}
console.log(result);

// Вивести квадрати чисел від 10 до 20.

let numberSquare = "";

for (let i = 10; i <= 20; i++) {
  numberSquare = Math.pow(i, 2);
}
console.log(numberSquare);

// Вивести таблицю множення на 7.

for (let i = 1; i <= 10; i++) {
  let c1 = `${i}` * 7;
  let result = `${i} * 7 = ${c1}`;
  console.log(result);
}

// Знайти суму всіх цілих чисел від 1 до 15.

let sumNumberByOneToFifteen = 1;

for (let i = 1; i <= 15; i++) {
  sumNumberByOneToFifteen += i;
}
console.log(sumNumberByOneToFifteen);

let multipleNumberByFifteenToThirtyfive = 1;

for (let i = 15; i <= 35; i++) {
  multipleNumberByFifteenToThirtyfive *= i;
}

console.log(multipleNumberByFifteenToThirtyfive);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let middleInflection = 1;

for (let i = 1; i <= 500; i++) {
  middleInflection += i;
}

console.log(middleInflection / 500);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sumNamberByThirteen = 1;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sumNamberByThirteen += i;
  }
}

console.log(sumNamberByThirteen);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let integerNumbers = "";

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    integerNumbers += `${i},`;
  }
}

console.log(integerNumbers);

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let naturalNumber = 200;
let dividers = [];
let pairDividers = [];
let sumDividers = 0;

for (let i = 1; i <= naturalNumber; i++) {
  if (naturalNumber % i === 0) {
    dividers.push(i);
    if (i % 2 === 0) {
      pairDividers.push(i);
      sumDividers += i;
    }
  }
}

console.log(`All divisors of user number: ${dividers}`);
console.log(`All even divisors: ${pairDividers.join(",")}`);
console.log(`Sum of even divisors: ${sumDividers}`);

// Надрукувати повну таблицю множення від 1 до 10.

function multTable(x, y) {
  let result = "";

  function multString(value) {
    let srting = "";

    for (let i = 1; i <= x; i++) {
      srting += `${value} * ${i} = ${value * i},` + "\n";
    }

    return srting;
  }

  for (let i = 1; i <= y; i++) {
    result += multString(i) + "\n";
  }

  return result;
}

console.log(multTable(9, 10));

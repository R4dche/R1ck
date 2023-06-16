let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sumOfArray = 0;
let countPositiveArray = 0;
let countNegativeArray = 0;
let minNumberInArray;
let indexMinNumber;
let indexMaxNumber;
let maxNumberInArray;
let nonPairNumbers = 0;
let pairNumbers = 0;
let sumPairNumbers = 0;
let sumNonPairNumbers = 0;
let multiOfArray = 1;
let maxNumberAndRess = 0;


for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 ) {
        sumOfArray += array[i];
        multiOfArray *= array[i];
        countPositiveArray ++;
        if (array[i] % 2 === 0) {
            nonPairNumbers ++;
            sumNonPairNumbers += array[i]
        }
        if (array[i] % 2) {
            pairNumbers ++;
            sumPairNumbers += array[i]
        }
    }
    if (array[i] < 0) {
        countNegativeArray ++;
    }
    minNumberInArray = Math.min(...array)
    maxNumberInArray = Math.max(...array);
    indexMinNumber = array.indexOf(minNumberInArray)
    indexMaxNumber = array.indexOf(maxNumberInArray)
    maxNumberAndRess = array.map(function (elem) {
        if (elem === maxNumberInArray) {
            return elem;
        } else {
            return 0
        }
    })
}

console.log('Sum positive number of array: '+ sumOfArray);
console.log('Count positive number: ' + countPositiveArray);
console.log('Min number of array: ' + minNumberInArray);
console.log('Index min number: ' + indexMinNumber);
console.log('Max number of array: ' + maxNumberInArray);
console.log('Index max number: ' + indexMaxNumber);
console.log('Count negative number: ' + countNegativeArray);
console.log('Count non-pair number: ' + nonPairNumbers);
console.log('Count pair number: ' + pairNumbers);
console.log('Sum non-pair numbers: ' + sumNonPairNumbers);
console.log('Sum pair numbers: ' + sumPairNumbers);
console.log('Multi positive number of array: '+ multiOfArray);
console.log('Max number and resset: ' + maxNumberAndRess);

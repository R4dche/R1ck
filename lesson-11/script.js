let randomArray = ['clear', 10, '5', 'solar', 20, 'door', 50];

function filter (array) {
    let filterArray = [];
    let avarageNumber = 0;
    for (let i = 0; i <= array.length; i++) {
        if (typeof array[i] === 'number') {
            filterArray.push(array[i]);
            avarageNumber += array[i];
        }
    }
    return avarageNumber / filterArray.length;
}

console.log(filter(randomArray));
let userArray = [1, 2, 3, 4, 5, 6, 7]

function removeElement (array,index) {
    let remove = array.splice(index -1, 1);
}

removeElement(userArray,5);
console.log(userArray);
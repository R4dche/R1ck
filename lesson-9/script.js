const userArray = [1, 2, 3, 4, 5, 6, 7, 54, 65, 32, 12];

function removeElement(array, item) {
  const index = userArray.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

removeElement(userArray, 65);
console.log(userArray);

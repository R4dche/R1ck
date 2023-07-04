let usersMassives = [];
function usersMassive() {
  let usersLenghtMassive = +prompt("Specify the length of the array");

  for (let i = 0; i < usersLenghtMassive; i++) {
    let element = prompt(`Enter Element ` + (i + 1) + `:`);
    usersMassives.push(element);
  }

  alert(`Your array: ${usersMassives}`);

  function customSort(usersMassives) {
    usersMassives.sort((a, b) => {
      return a.localeCompare(b);
    });
    return usersMassives;
  }

  alert(`Your sorted array: ${customSort(usersMassives)}`);

  let startIndex = 2;
  let endIndex = 4;

  usersMassives.splice(startIndex, endIndex - startIndex + 1);

  alert(`Removed elements 2-4 from array: ${usersMassives}`);
}

usersMassive();


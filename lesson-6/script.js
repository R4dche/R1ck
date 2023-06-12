let usersMassives = [];
function usersMassive () {
  let usersLenghtMassive = +prompt("Specify the length of the array");

  for (let i = 0; i < usersLenghtMassive; i++) {
    let element = prompt(`Enter Element ` + (i + 1) + `:`);
    usersMassives.push(element);
  }

  usersMassives.sort(function (a, b) {
    return a - b;
  });

  let startIndex = 2;
  let endIndex = 4;

  usersMassives.splice(startIndex, endIndex - startIndex + 1);

  return console.log(usersMassives);
}

usersMassive();
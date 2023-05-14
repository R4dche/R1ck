function userPortrait() {
  let dateUser;
  let dateUserIsNumber;

  function validateUserBirthDate() {
    return !dateUser || dateUser < 1900 || dateUser > 2005 || isNaN(dateUserIsNumber);  
  }

  function validateUserCitySport (validate) {
    if (!validate || validate == ' ') {
      return true;
    }
  }

  do {
    dateUser = prompt("Enter please your birth date");
    dateUserIsNumber = Number(dateUser);

    if (validateUserBirthDate(dateUser)) {
      alert("It is a pity that you did not want to enter your birth date...");
    }
  } while (validateUserBirthDate(dateUser));

  let userAge = new Date().getFullYear() - dateUser;

  let userCity;
  let otherCity;
  let capitalCity;

  do {
    userCity = prompt("What city do you live in?");

    if (validateUserCitySport(userCity)) {
      alert("It is a pity that you did not want to enter your city...");
    }
  } while (validateUserCitySport(userCity));

  let toLowerCaseCity = userCity.toLowerCase();

  switch (toLowerCaseCity) {
    case "kiev":
      capitalCity = "You live in the capital of Ukraine";
      break;
    case 'kyiv':
        capitalCity = "You live in the capital of Ukraine";
        break;
    case "washington":
      capitalCity = "You live in the capital of USA";
      break;
    case "london":
      capitalCity = "You live in the capital of Greate Britain";
      break;
    default:
      otherCity = `You live in the ${userCity}`;
  }

  let userSport;
  let otherSport;
  let favoriteSport;

  do {
    userSport = prompt("Enter please your favorite sport");

    if (validateUserCitySport(userSport)) {
      alert("It is a pity that you did not want to enter your sport...");
    }
  } while (validateUserCitySport(userSport));

  let toLowerCaseSport = userSport.toLowerCase();

  switch (toLowerCaseSport) {
    case "basketball":
      favoriteSport = "Cool! Do you want to be Kobe Bryant?";
      break;
    case "box":
      favoriteSport = "Cool! Do you want to be Mike Tyson?";
      break;
    case "football":
      favoriteSport = "Cool! Do you want to be Cristiano Ronaldo?";
      break;
    default:
      otherSport = `Cool! Do you like ${userSport}`;
  }

  return alert(
        `You are ${userAge} years old;` +
        '\n' +
        `${capitalCity || otherCity};` +
        '\n' +
        `${favoriteSport || otherSport};`
        );
}

userPortrait();

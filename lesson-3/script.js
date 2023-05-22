let dateUser;
let dateUserIsNumber;
let userAge;

function usersBirthYear() {

  function validateUserBirthDate() {
    return (
      !dateUser || dateUser < 1900 || dateUser > 2023 || isNaN(dateUserIsNumber)
    );
  }
  
  do {
    dateUser = prompt("Enter please your birth date");
    dateUserIsNumber = Number(dateUser);
    
    if (validateUserBirthDate(dateUser)) {
      alert("It is a pity that you did not want to enter your birth date...");
    }
  } while (validateUserBirthDate(dateUser));
  

  userAge = new Date().getFullYear() - dateUser;
};

function validateUserString (validate) {
  if (!validate || validate == ' ' || validate.trim() == '') {
    return true;
  }
};

let userCity;
let otherCity;
let capitalCity;
let toLowerCaseCity;

function usersCity() {
  do {
    userCity = prompt("What city do you live in?");

    if (validateUserString(userCity)) {
      alert("It is a pity that you did not want to enter your city...");
    }
  } while (validateUserString(userCity));

  toLowerCaseCity = userCity.toLowerCase().trim();

  switch (toLowerCaseCity) {
    case "kiev":
    case "kyiv":
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
};

let userSport;
let otherSport;
let favoriteSport;
let toLowerCaseSport;

function usersSport() {
  do {
    userSport = prompt("Enter please your favorite sport");

    if (validateUserString(userSport)) {
      alert("It is a pity that you did not want to enter your sport...");
    }
  } while (validateUserString(userSport));

  toLowerCaseSport = userSport.toLowerCase().trim();

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
};

function confirmAlert () {
  usersBirthYear();
  usersCity();
  usersSport();
  alert(
    `You are ${userAge} years old;` +
    '\n' +
    `${capitalCity || otherCity};` +
    '\n' +
    `${favoriteSport || otherSport};` 
    );
};

confirmAlert();


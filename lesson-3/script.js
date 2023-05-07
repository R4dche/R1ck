let dateUser = +prompt('Enter please your birth date');
let currentDate = new Date().getFullYear - dateUser;
// let cityUser = prompt('Enter please your native city').toLowerCase();
let sportUser  = prompt('Enter please your favorite sport');
let otherCity;
let Ukraine;
let USA;
let greatBritain;

switch (cityUser) {
    case 'kiev':
        Ukraine = alert('You live in the capital of Ukraine');
        break;
    case 'washington':
        USA = alert('You live in the capital of USA');
        break;
    case 'london':
        greatBritain = alert('You live in the capital of Greate Britain');
        break;
    default:    
        otherCity = alert(`You live in the ${cityUser.toUpperCase()}`);
}

let otherSport;
let favoriteSport;

switch (sportUser) {
    case 'basketball':
        favoriteSport = alert('Cool! Do you want to be Kobe Bryant?');
        break;
    case 'box':
        favoriteSport = alert('Cool! Do you want to be Mike Tyson?');
        break;
    case 'football':
        favoriteSport = alert('Cool! Do you want to be Cristiano Ronaldo?');
        break;
    default:
        otherSport = alert('')
}
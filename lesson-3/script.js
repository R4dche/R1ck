function userPortrait () {

    let dateUser;

    do {
        dateUser = prompt('Enter please your birth date');

        if (!dateUser) {
            alert('It is a pity that you did not want to enter your birth date...');
        }
    } while (!dateUser);

    let currentDate = new Date().getFullYear() - dateUser;

    let cityUser;

    do {
        cityUser = prompt('What city do you live in?');

        if (!cityUser) {
            alert('It is a pity that you did not want to enter your city...');
        }
    } while (!cityUser);

    let toLowerCaseCity = cityUser.toLowerCase();
    let otherCity;
    let capitalCity;
    
    switch (toLowerCaseCity) {
        case 'kiev':
            capitalCity = ('You live in the capital of Ukraine');
            break;
        case 'washington':
            capitalCity = ('You live in the capital of USA');
            break;
        case 'london':
            capitalCity = ('You live in the capital of Greate Britain');
            break;
        default:    
            otherCity = (`You live in the ${cityUser}`);
    }
    
    let sportUser;
    let otherSport;
    let favoriteSport;

    do {
        sportUser = prompt('Enter please your favorite sport');

        if (!sportUser) {
            alert('It is a pity that you did not want to enter your sport...');
        }
    } while (!sportUser);
    
    switch (sportUser) {
        case 'basketball':
            favoriteSport = ('Cool! Do you want to be Kobe Bryant?');
            break;
        case 'box':
            favoriteSport = ('Cool! Do you want to be Mike Tyson?');
            break;
        case 'football':
            favoriteSport = ('Cool! Do you want to be Cristiano Ronaldo?');
            break;
        default:
            otherSport = (`Cool! Do you like ${sportUser}`);
    }

    return alert(`
        You are ${currentDate} years old;
        ${capitalCity || otherCity};
        ${favoriteSport || otherSport};
        `)
}

userPortrait();


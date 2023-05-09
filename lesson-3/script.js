function userPortrait () {

    let dateUser = +prompt('Enter please your birth date');
    let currentDate = new Date().getFullYear() - dateUser;
    let cityUser = prompt('Enter please your native city').toLowerCase();
    let sportUser  = prompt('Enter please your favorite sport');


    let otherCity;
    let Ukraine;
    let USA;
    let greatBritain;
    
    switch (cityUser) {
        case 'kiev':
            Ukraine = ('You live in the capital of Ukraine');
            break;
        case 'washington':
            USA = ('You live in the capital of USA');
            break;
        case 'london':
            greatBritain = ('You live in the capital of Greate Britain');
            break;
        default:    
            otherCity = (`You live in the ${cityUser.toUpperCase()}`);
    }
    
    let otherSport;
    let basketball;
    let box;
    let football;
    
    switch (sportUser) {
        case 'basketball':
            basketball = ('Cool! Do you want to be Kobe Bryant?');
            break;
        case 'box':
            box = ('Cool! Do you want to be Mike Tyson?');
            break;
        case 'football':
            football = ('Cool! Do you want to be Cristiano Ronaldo?');
            break;
        default:
            otherSport = (`Cool! Do you like ${sportUser}`);
    }

    return alert(`
        You are ${currentDate} years old;
        ${USA || Ukraine || greatBritain || otherCity};
        ${basketball || box || football || otherSport};
        `)
}

userPortrait();


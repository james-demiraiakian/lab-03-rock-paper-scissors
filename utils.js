export function didUserWin(userChoice, actualChoice){
    if (userChoice === actualChoice) {
        return 'standoff';
    } else if (userChoice === 'pig' && actualChoice === 'meg') {
        return 'survived';
    } else if (userChoice === 'meg' && actualChoice === 'flashlight') {
        return 'survived';  
    } else if (userChoice === 'flashlight' && actualChoice === 'pig') {
        return 'survived';
    } else {
        return 'sacrificed';
    }
};

export function getRandomMove(){
    return ['pig', 'meg', 'flashlight'][Math.floor(Math.random() * 3) + 1];
};

// USER CHOICE
// pig, meg, flashlight

// COMPUTER THROW
// pig, meg, flashlight

// possible outcomes: survived, sacrificed, standoff

// if the userChoice == computerChoice return 'standoff'
// if the user throws pig && if computer throws flashlight, return 'survived'
// if the user throws meg && if the computer throws flashlight, return 'survived'
// if the user throws scissors && if the computer throws paper, return 'win'
// else return 'lose'
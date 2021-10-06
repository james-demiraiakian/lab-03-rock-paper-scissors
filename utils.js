export function didUserWin(userChoice, actualChoice){
    if (userChoice === actualChoice) {
        return 'standoff';
    } else if (userChoice === 'pig' && actualChoice === 'meg') {
        return 'escaped';
    } else if (userChoice === 'meg' && actualChoice === 'flashlight') {
        return 'escaped';  
    } else if (userChoice === 'flashlight' && actualChoice === 'pig') {
        return 'escaped';
    } else {
        return 'sacrificed';
    }
};

export function getRandomMove(){
    return ['meg', 'pig', 'flashlight'][Math.floor(Math.random() * 3)];
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
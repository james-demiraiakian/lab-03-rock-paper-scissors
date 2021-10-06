export function didUserWin(userChoice, actualChoice){
    // if (userChoice === actualFlip) {
    //     return true;
    // } else {
    //     return false;
    // }
// OPTION 2
    // if (userChoice === actualFlip) {
    //     return true;
    // }
    // return false;
// OPTION 3
    // return userChoice === actualFlip ? true : false;

    return userChoice === actualChoice;
};

export function getRandomMove(){
    return ['pig', 'meg', 'flashlight'][Math.floor(Math.random() * 3) + 1];
};
console.log(pig);
// USER CHOICE
// rock, paper, scissors

// COMPUTER THROW
// rock, paper, scissors

// possible outcomes: win, lose, draw

// if the userThrow == computerThrow return 'draw'
// if the user throws rock && if computer throws scissors, return 'win'
// if the user throws paper && if the computer throws rock, return 'win'
// if the user throws scissors && if the computer throws paper, return 'win'
// else return 'lose'
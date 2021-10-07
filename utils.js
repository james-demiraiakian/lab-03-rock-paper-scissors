export function didUserWin(userChoice, actualChoice){
    if (userChoice === actualChoice) {
        return 'standoff';
    } else if (userChoice === 'pig' && actualChoice === 'meg') {
        return 'pig-beats-meg';
    } else if (userChoice === 'meg' && actualChoice === 'flashlight') {
        return 'meg-beats-flashlight';  
    } else if (userChoice === 'flashlight' && actualChoice === 'pig') {
        return 'flashlight-beats-pig';
    } else if (userChoice === 'meg' && actualChoice === 'pig'){
        return 'meg-loses-pig';
    } else if (userChoice === 'pig' && actualChoice === 'flashlight'){
        return 'pig-loses-flashlight';
    } else if (userChoice === 'flashlight' && actualChoice === 'meg'){
        return 'flashlight-loses-meg';
    }
}

export function getRandomMove(){
    return ['meg', 'pig', 'flashlight'][Math.floor(Math.random() * 3)];
}

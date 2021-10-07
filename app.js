import { didUserWin, getRandomMove } from './utils.js';

const playButton = document.getElementById('play');
const spanEscaped = document.getElementById('escaped');
const spanSacrificed = document.getElementById('sacrificed');
const spanStandoff = document.getElementById('standoff');
const error = document.getElementById('error');
const result = document.getElementById('result');
const reset = document.getElementById('reset');

let escaped = 0;
let sacrificed = 0;
let standoff = 0;

playButton.addEventListener ('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    if (!selected) {
        return error.classList.remove('hidden');
    }

    error.classList.add('hidden');
    const userChoice = selected.value;
    const actualChoice = getRandomMove();

    if (userChoice === actualChoice){
        standoff++;
        result.textContent = `computer ${actualChoice}. It was a draw... maybe someone rage quit?`;

    } else if (didUserWin(userChoice, actualChoice) === 'pig-beats-meg'){
        escaped++;
        result.textContent = `computer ${actualChoice}. rank up! they really thought they could outplay you with ${actualChoice}?`;
    
    } else if (didUserWin(userChoice, actualChoice) === 'meg-beats-flashlight'){
        escaped++;
        result.textContent = `computer ${actualChoice}. uh oh, meg found a flashlight...`;

    } else if (didUserWin(userChoice, actualChoice) === 'flashlight-beats-pig'){
        escaped++;
        result.textContent = `computer ${actualChoice}. If only they brought lightborn...`;

    } else if (didUserWin(userChoice, actualChoice) === 'meg-loses-pig'){
        sacrificed++;
        result.textContent = `computer ${actualChoice}. Rekt by pig.`;

    } else if (didUserWin(userChoice, actualChoice) === 'pig-loses-flashlight'){
        sacrificed++;
        result.textContent = `computer ${actualChoice}. You should have brought lightborn`;
    } else if (didUserWin(userChoice, actualChoice) === 'flashlight-loses-meg'){
        sacrificed++;
        result.textContent = `computer ${actualChoice}. Looks like Meg dropped her flashlight...`;
    }
    else {
        result.textContent = `error, try again.`;
    }

    spanEscaped.textContent = escaped;
    spanSacrificed.textContent = sacrificed;
    spanStandoff.textContent = standoff;
});

reset.addEventListener ('click', ()=>{
    escaped = 0;
    sacrificed = 0;
    standoff = 0;

    spanEscaped.textContent = escaped;
    spanSacrificed.textContent = sacrificed;
    spanStandoff.textContent = standoff;
});

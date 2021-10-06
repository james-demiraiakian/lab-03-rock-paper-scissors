import { didUserWin, getRandomMove } from "./utils.js";

// DOM ELEMENTS
const playButton = document.getElementById('play');
const spanEscaped = document.getElementById('escaped');
const spanSacrificed = document.getElementById('sacrificed');
const spanStandoff = document.getElementById('standoff');
const error = document.getElementById('error');

// GLOBAL STATE
let escaped = 0;
let sacrificed = 0;
let standoff = 0;

//EVENT LISTENERS
playButton.addEventListener ('click', ()=>{
const selected = document.querySelector('input[type=radio]:checked');
if(!selected) {
  return error.classList.remove('hidden');
}
error.classList.add('hidden');
const userChoice = selected.value;
const actualChoice = getRandomMove();
// USER WIN
// USER LOSS
// USER TIE
if(userChoice === actualChoice){
  standoff++;
} else if(didUserWin(userChoice,actualChoice)){
  escaped++;
} else {
  sacrificed++;
} 
console.log('user choice', userChoice);
console.log('computer choice', actualChoice);

spanEscaped.textContent = escaped;
spanSacrificed.textContent = sacrificed;
spanStandoff.textContent = standoff;

});
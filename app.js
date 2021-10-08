import { didUserWin, getRandomMove, outcome } from './utils.js';

const playButton = document.getElementById('play');
const error = document.getElementById('error');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
// const imageBlind = document.getElementById('blind');
// const imageDead = document.getElementById('dead');
const meg = document.getElementById('meg');
const flashlight = document.getElementById('flashlight');
const pig = document.getElementById('pig');

meg.addEventListener('click', ()=>{
    outcome('meg');
})

flashlight.addEventListener('click', ()=>{
    outcome('flashlight');
})

pig.addEventListener('click', ()=>{
    outcome('pig');
})

reset.addEventListener ('click', ()=>{
    escaped = 0;
    sacrificed = 0;
    standoff = 0;

    spanEscaped.textContent = escaped;
    spanSacrificed.textContent = sacrificed;
    spanStandoff.textContent = standoff;
});

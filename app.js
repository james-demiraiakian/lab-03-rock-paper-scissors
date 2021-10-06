import { didUserWin } from "./utils";
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

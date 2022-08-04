// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

import { renderGoblin } from './render-goblin.js';

const formEl = document.querySelector('form');
const goblinInput = document.getElementById('goblin-input');
const goblinContainerEL = document.querySelector('.goblin-container');

let defeatedGoblins = 0;
let playerHp = 10;


const goblinArr = [
    {
        name: 'Lorph',
        hp: 3
    },
    {
        name: 'Jeff',
        hp: 3
    },
];

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const goblin = goblinInput.value;
    

})

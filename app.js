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


const goblinsArr = [
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

    const goblinName = goblinInput.value;

    const newGoblin = {
        name: goblinName,
        hp: Math.floor(Math.random() * 7)
    };

    goblinsArr.push(newGoblin);

    console.log(goblinsArr);
    

});

function displayGoblins() {

    goblinContainerEL.textContent = '';

    for (let goblin of goblinsArr) {
        renderGoblin(goblin.name, goblin.hp);
    }
}

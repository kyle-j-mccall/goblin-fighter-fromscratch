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
const defeatedGoblinsEl = document.getElementById('goblins-defeated');
const playerHpEl = document.querySelector('.player-hp');

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

    displayGoblins();

    formEl.reset();

    
    

});

function displayGoblins() {

    goblinContainerEL.textContent = '';

    
    
    for (let goblin of goblinsArr) {
        const renderedGoblin = renderGoblin(goblin.name, goblin.hp);

        goblinContainerEL.append(renderedGoblin);

        renderedGoblin.addEventListener('click', () => {
            
            if (Math.random() > .3) {
                goblin.hp--;
                
                
            }

            if (goblin.hp === 0) {
                alert(`You defeated ${goblin.name}`);
                defeatedGoblins++;
                defeatedGoblinsEl.textContent = defeatedGoblins;
            }

            if (Math.random() * .7) {
                playerHp--;
                playerHpEl.textContent = playerHp;
            }

            if (playerHp === 0) {
                alert('You Died');
            }
            
            console.log(playerHp);
            console.log(goblin.hp);
            displayGoblins();
        });
    }

    
    
} 

displayGoblins();



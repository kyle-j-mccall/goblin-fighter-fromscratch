
import { renderGoblin } from './render-goblin.js';
import { renderGoblinHitMessage } from './render-hit.js';


const formEl = document.querySelector('form');
const goblinInput = document.getElementById('goblin-input');
const goblinContainerEL = document.querySelector('.goblin-container');
const defeatedGoblinsEl = document.getElementById('goblins-defeated');
const playerHpEl = document.querySelector('#player-hp');
const hitMessageContainer = document.querySelector('.message-container');
const playerAvatar = document.querySelector('.player-avatar');

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
        hp: Math.ceil(Math.random() * 7)
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
                displayHits(goblin, playerHp);
                
                
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
                playerAvatar.textContent = '🧟‍♂️';
                displayHits(goblin, playerHp);
            }
            
            console.log(playerHp);
            console.log(goblin.hp);
            displayGoblins();
        });


    } 

    
    
} 

displayGoblins();

function displayHits(goblinObj, playerHp) {
    hitMessageContainer.textContent = '';
    const hitMessage = renderGoblinHitMessage(goblinObj, playerHp);
    hitMessageContainer.append(hitMessage);
}




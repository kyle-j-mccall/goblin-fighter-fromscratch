
import { renderGoblin } from './render-goblin.js';
import { renderGoblinHitMessage, renderGameOverMessage, renderMissMessage } from './render-messages.js';
import { renderNewGameButton } from './render-newgame-button.js';


const formEl = document.querySelector('form');
const goblinInput = document.getElementById('goblin-input');
const goblinContainerEL = document.querySelector('.goblin-container');
const defeatedGoblinsEl = document.getElementById('goblins-defeated');
const playerHpEl = document.querySelector('#player-hp');
const hitMessageContainer = document.querySelector('.message-container');
const playerAvatar = document.querySelector('.player-avatar');
const newGameButtonContainer = document.querySelector('.new-game-container');





let defeatedGoblins = 0;
let playerHp = 10;


let goblinsArr = [
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
        const renderedGoblin = renderGoblin(goblin.name, goblin.hp, playerHp);


        goblinContainerEL.append(renderedGoblin);

        renderedGoblin.addEventListener('click', () => {

            if (Math.random() > .3) {
                goblin.hp--;
                displayHits(goblin);


            } else {
                displayMiss();
            } 

            if (goblin.hp === 0) {

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
                displayGameOverMessage();
                displayNewGameButton();



            }


            displayGoblins();
        });


    }



}



displayGoblins();

function displayHits(goblinObj) {
    hitMessageContainer.textContent = '';
    const hitMessage = renderGoblinHitMessage(goblinObj);
    hitMessageContainer.append(hitMessage);
}

function displayMiss() {
    hitMessageContainer.textContent = '';
    const missMessage = renderMissMessage();
    hitMessageContainer.append(missMessage);
}





function displayNewGameButton() {
    newGameButtonContainer.textContent = '';
    const button = renderNewGameButton();
    button.addEventListener('click', () => {
        resetGame();
    });
    newGameButtonContainer.append(button);
}

function displayGameOverMessage() {
    hitMessageContainer.textContent = '';
    const message = renderGameOverMessage(playerHp);
    hitMessageContainer.append(message);
}

function resetGame() {
    playerHp = 10;
    defeatedGoblins = 0;
    playerAvatar.textContent = '🦸';
    
    playerHpEl.textContent = playerHp;
    goblinsArr = [
        {
            name: 'Lorph',
            hp: 3
        },
        {
            name: 'Jeff',
            hp: 3
        },
    ];
    displayGoblins();
    displayGameOverMessage();
    displayHits();

}




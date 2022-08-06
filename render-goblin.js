export function renderGoblin(name, hp, playerHp) {
    const goblinDiv = document.createElement('div');
    const goblinEmoji = document.createElement('p');
    const goblinNameEl = document.createElement('p');
    const goblinHpEl = document.createElement('p');

    hp > 0 ? goblinDiv.classList.add('goblin-list') : goblinDiv.classList.add('dead-goblin');
    playerHp === 0 ? goblinDiv.classList.add('game-over-goblin-list') : goblinDiv.classList.add('goblin-list');
    goblinEmoji.classList.add('goblin-emoji');
    goblinEmoji.textContent = hp > 0 ? '😈' : '☠️';
    goblinNameEl.textContent = `${name} `;
    goblinHpEl.textContent = `HP: ${hp}`;

    goblinDiv.append(goblinEmoji, goblinNameEl, goblinHpEl);

    return goblinDiv;
}



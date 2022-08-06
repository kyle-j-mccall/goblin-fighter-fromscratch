export function renderGoblinHitMessage(goblinObj) {
    const hitDiv = document.createElement('div');
    const hitMessage = document.createElement('p');

    if (goblinObj.hp > 0) {
        hitMessage.textContent = `You hit ${goblinObj.name}!`;
    } else if (goblinObj.hp === 0) {
        hitMessage.textContent = `You killed ${goblinObj.name}`;
    
    }
    
    hitDiv.classList.add('hit-message');

    hitDiv.append(hitMessage);

    return hitDiv;
}

export function renderGameOverMessage(playerhp) {
    const gameOverDiv = document.createElement('div');
    const gameOverMessage = document.createElement('p');

    if (playerhp === 0) {
        gameOverMessage.textContent = 'YOU DIED! \r\n GAME OVER';

    }
    gameOverDiv.classList.add('game-over-message');

    gameOverDiv.append(gameOverMessage);

    return gameOverDiv;
}
export function renderGoblinHitMessage(goblinObj, playerhp) {
    const hitDiv = document.createElement('div');
    const hitMessage = document.createElement('p');

    if (goblinObj.hp > 0 && playerhp > 0) {
        hitMessage.textContent = `You hit ${goblinObj.name}!`;
    } else if (goblinObj.hp === 0) {
        hitMessage.textContent = `You killed ${goblinObj.name}`;
    } else if (playerhp === 0) {
        hitMessage.textContent = 'YOU DIED! \r\n GAME OVER';
    }

    
    hitDiv.classList.add('hit-message');

    hitDiv.append(hitMessage);

    return hitDiv;
}
export function renderNewGameButton() {
    const buttonContainer = document.createElement('div');
    const button = document.createElement('button');

    button.classList.add('new-game-button');

    button.textContent = 'New Game';

    buttonContainer.append(button);

    return buttonContainer;
}
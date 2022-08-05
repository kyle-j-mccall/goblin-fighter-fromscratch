export function renderGoblin(name, hp) {
    const goblinDiv = document.createElement('div');
    const goblinNameEl = document.createElement('p');
    const goblinHpEl = document.createElement('p');

    goblinDiv.classList.add('goblin-list');

    goblinNameEl.textContent = name;
    goblinHpEl.textContent = hp;

    goblinDiv.append(goblinNameEl, goblinHpEl);

    return goblinDiv;
}
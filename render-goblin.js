export function renderGoblin(name, hp) {
    const goblinDiv = document.createElement('div');
    const goblinNameEl = document.createElement('p');
    const goblinHpEl = document.createElement('p');

    goblinNameEl.textContent = name;
    goblinHpEl.textContent = hp;

    return goblinDiv;
}
import { player1, player2 } from './game.js';
import { $formFight, $arenas } from './creates.js'
import { createElement, createReloadButton } from './utils.js'
import { generateLogs } from './logs.js'

const playerWin = (name) => {
    const $winTitle = createElement('div', 'winTitle');
    if (name) {
        $winTitle.innerText = `${name} win`;
    } else {
        $winTitle.innerText = `DRAW`;
    }
    return $winTitle;
}

const showResult = () => {
    if (player1.hp === 0 || player2.hp === 0) {
        $formFight.disabled = true;
        createReloadButton();
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWin(player2.name));
        generateLogs('end', player2, player1);
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWin(player1.name));
        generateLogs('end', player1, player2)
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWin());
        generateLogs('draw', player2, player1);
    }
}

export {playerWin, showResult}
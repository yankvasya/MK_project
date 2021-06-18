import Game from './game.js';
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
    if (this.player1.hp === 0 || this.player2.hp === 0) {
        $formFight.disabled = true;
        createReloadButton();
    }

    if (this.player1.hp === 0 && this.player1.hp < this.player2.hp) {
        $arenas.appendChild(playerWin(this.player2.name));
        this.generateLogs('end', this.player2, this.player1);
    } else if (this.player2.hp === 0 && this.player2.hp < this.player1.hp) {
        $arenas.appendChild(playerWin(this.player1.name));
        this.generateLogs('end', this.player1, this.player2)
    } else if (this.player1.hp === 0 && this.player2.hp === 0) {
        $arenas.appendChild(playerWin());
        this.generateLogs('draw', this.player2, this.player1);
    }
}

export {playerWin, showResult}
import { player1, player2 } from './players.js';
import { $formFight, createReloadButton, $arenas, createElement } from './creates.js'
import { generateLogs } from './logs.js'

// function playerWin(name) {
//     const $winTitle = createElement('div', 'winTitle');
//     if (name) {
//         $winTitle.innerText = `${name} win`;
//     } else {
//         $winTitle.innerText = `DRAW`;
//     }
//     return $winTitle;
// }

const playerWin = (name) => {
    const $winTitle = createElement('div', 'winTitle');
    if (name) {
        $winTitle.innerText = `${name} win`;
    } else {
        $winTitle.innerText = `DRAW`;
    }
    return $winTitle;
}



// function showResult() {
//     if (player1.hp === 0 || player2.hp === 0) {
//         $formFight.disabled = true;
//         createReloadButton();
//     }

//     if (player1.hp === 0 && player1.hp < player2.hp) {
//         $arenas.appendChild(playerWin(player2.name));
//         generateLogs('end', player2, player1);
//     } else if (player2.hp === 0 && player2.hp < player1.hp) {
//         $arenas.appendChild(playerWin(player1.name));
//         generateLogs('end', player1, player2)
//     } else if (player1.hp === 0 && player2.hp === 0) {
//         $arenas.appendChild(playerWin());
//         generateLogs('draw', player2, player1);
//     }
// }

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
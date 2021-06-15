import {$arenas, $formFight, createPlayer} from './creates.js';
import { player1, player2 } from './players.js';
import { enemyAttack, playerAttack } from './attack.js'
import {generateLogs } from './logs.js'
import { showResult } from './result.js'
    
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

if (document.onload = 'true') {
    generateLogs('start', player1, player2);
}

$formFight.addEventListener('submit', function (e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();

    if (enemy.hit !== player.defence) {
        player1.changeHP(enemy.value);
        player1.renderHP();
        generateLogs('hit', player2, player1);
    } else {
        generateLogs('defence', player2, player1);
    }

    if (player.hit !== enemy.defence) {
        player2.changeHP(player.value);
        player2.renderHP();
        generateLogs('hit', player1, player2);
    } else {
        generateLogs('defence', player1, player2);
    }
    showResult()
})

export {$formFight};
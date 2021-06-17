import { $formFight } from './creates.js';
import Player from './players.js';
// import init from './players.js';

import { enemyAttack, playerAttack } from './attack.js'
import { generateLogs } from './logs.js'
import { showResult } from './result.js'


const player1 = new Player({
    player: 1,
    name: 'IWillKillAllTitans',
    hp: 100,
    img: './gif/eren.gif',
    weapon: ['Arms', 'Bomb', 'Pig'],
    // changeHP,
    // elHP,
    // renderHP,
    pastDmg: 0,
    rootSelector: 'arenas'
})

const player2 = new Player({
    player: 2,
    name: 'Anime-Tyan',
    hp: 100,
    img: './gif/tyan.gif',
    weapon: ['Blade', 'Katana', 'Validol'],
    // changeHP,
    // elHP,
    // renderHP,
    pastDmg: 0,
    rootSelector: 'arenas'
})

// if (document.onload = 'true') {
//     init();
// }

function init() {
    player1.createPlayer();
    player2.createPlayer();
    generateLogs('start', player1, player2);
}

init();

$formFight.addEventListener('submit', function (e) {
    e.preventDefault();
    const { hit: hitEnemy, defence: defenceEnemy, value: valueEnemy } = enemyAttack();
    const { hit, defence, value } = playerAttack();

    if (hitEnemy !== defence) {
        player1.changeHP(valueEnemy);
        player1.renderHP();
        generateLogs('hit', player2, player1, valueEnemy);
    } else {
        generateLogs('defence', player2, player1);
    }

    if (hit !== defenceEnemy) {
        player2.changeHP(value);
        player2.renderHP();
        generateLogs('hit', player1, player2, value);
    } else {
        generateLogs('defence', player1, player2);
    }
    showResult()
})

export { $formFight, player1, player2 };
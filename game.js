// import { $formFight } from './creates.js';
import generateLogs from './logs.js'
import Player from './players.js'
// import { enemyAttack, playerAttack } from './attack.js'
// import { showResult } from './result.js'

class Game {
    constructor() {
        // start = () => {
        this.$arenas = document.querySelector('.arenas');
        this.$formFight = document.querySelector('.control');
        this.$chat = document.querySelector('.chat');

        this.player1 = new Player({
            player: 1,
            name: 'IWillKillAllTitans',
            hp: 100,
            img: './gif/eren.gif',
            weapon: ['Arms', 'Bomb', 'Pig'],
            pastDmg: 0,
            rootSelector: 'arenas'
        })

        this.player2 = new Player({
            player: 2,
            name: 'Anime-Tyan',
            hp: 100,
            img: './gif/tyan.gif',
            weapon: ['Blade', 'Katana', 'Validol'],
            pastDmg: 0,
            rootSelector: 'arenas'
        })
        // }
        // this.start() = start();
    }

    start = () => {
        this.player1.createPlayer();
        this.player2.createPlayer();

        this.generateLogs('start', this.player1, this.player2);

        this.$formFight.addEventListener('submit', (e) => {
            e.preventDefault();
            const { hit: hitEnemy, defence: defenceEnemy, value: valueEnemy } = this.enemyAttack();
            const { hit, defence, value } = this.playerAttack();

            if (hitEnemy !== defence) {
                this.player1.changeHP(valueEnemy);
                this.player1.renderHP();
                this.generateLogs('hit', this.player2, this.player1, valueEnemy);
            } else {
                this.generateLogs('defence', this.player2, this.player1);
            }

            if (hit !== defenceEnemy) {
                this.player2.changeHP(value);
                this.player2.renderHP();
                this.generateLogs('hit', this.player1, this.player2, value);
            } else {
                this.generateLogs('defence', this.player1, this.player2);
            }

            this.showResult()
        })
    }

}







// export {  };
export default Game;
// export { start };
// export { start };
// export start;
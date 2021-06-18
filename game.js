import Player from './players.js';
import { logs } from './constants.js';

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

    generateLogs = (type, { name }, { name: playerName2, hp, pastDmg }) => {
        let text = '';
        const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
        switch (type) {
            case 'start':
                text = `${logs[type].replace('[time]', time).replace('[player1]', name).replace('[player2]', playerName2)}`;
                break;
            case 'hit':
                text = `${time} | ${logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]', name).replace('[playerDefence]', playerName2)} -${pastDmg} [${hp}/100]`;
                break;
            case 'defence':
                text = `${time} | ${logs[type][getRandom(logs[type].length - 1)].replace('[playerKick]', playerName2).replace('[playerDefence]', name)} -${pastDmg} [${hp}/100]`;
                break;
            case 'draw':
                text = `${time} ${logs[type]}`;
                break;
            case 'end':
                text = `${time} ${logs[type][getRandom(logs[type].length - 1)].replace('playerWins', name).replace('playerLose', playerName2)}`;
                break;
            default:
                text = 'Ошибка 404';
                break;
        }
        const el = `<p>${text}</p>`;
        this.$chat.insertAdjacentHTML('afterbegin', el);
    }

}

export default Game;

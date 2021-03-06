import Player from './players.js';
import { logs } from './constants.js';
import { HIT, ATTACK } from './constants.js'
import { getRandom, createElement } from './utils.js';


let player1;
let player2;

// class Game {


// start = async () => {
//     const players = await this.getPlayers(); 
//     console.log(players);
// const p1 = players[getRandom(players.length) - 1];
// const p2 = players[getRandom(players.length) - 1];
//     console.log(p1, p2);


//     player1.createPlayer();
//     player2.createPlayer();
//     }
// }

// const game = new Game();


class Game {
    constructor() {
        this.$arenas = document.querySelector('.arenas');
        this.$formFight = document.querySelector('.control');
        this.$chat = document.querySelector('.chat');
    }


    getPlayers = async () => {
        const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose').then(res => res.json());
        return body;
    }


    start = async () => {
        const players = await this.getPlayers();
        const p1 = JSON.parse(localStorage.getItem('player1'));
        const p2 = players;
        console.log(p1, p2);

        this.player1 = new Player({
            ...p1,
            player: 1,
            rootSelector: 'arenas',
        });

        this.player2 = new Player({
            ...p2,
            player: 2,
            rootSelector: 'arenas',
        });

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
                this.generateLogs('hit', this.player2, this.player1, value);
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
                text = `${time} | ${logs[type][getRandom(logs[type].length - 1)].replace('[playerKick]', name).replace('[playerDefence]', playerName2)}  [${hp}/100]`;
                break;
            case 'draw':
                text = `${time} ${logs[type]}`;
                break;
            case 'end':
                text = `${time} ${logs[type][getRandom(logs[type].length - 1)].replace('playerWins', name).replace('playerLose', playerName2)}`;
                break;
            default:
                text = '???????????? 404';
                break;
        }
        const el = `<p>${text}</p>`;
        this.$chat.insertAdjacentHTML('afterbegin', el);
    }

    enemyAttack = () => {
        const hit = ATTACK[getRandom(3) - 1];
        const defence = ATTACK[getRandom(3) - 1];
        return {
            value: getRandom(HIT[hit]),
            hit,
            defence
        }
    }

    playerAttack = () => {
        const attack = {};

        for (let item of this.$formFight) {
            if (item.checked && item.name === 'hit') {
                attack.value = getRandom(HIT[item.value]);
                attack.hit = item.value;
            }

            if (item.checked && item.name === 'defence') {
                attack.defence = item.value;
            }

            item.checked = false;
        }
        console.dir(attack.value);
        return attack;
    }

    createReloadButton = () => {
        const $reloadWrap = createElement('div', 'reloadWrap');
        const $buttonRestart = createElement('button', 'button');
        $buttonRestart.innerText = 'Restart';

        $buttonRestart.addEventListener('click', function () {
            window.history.back();
            // window.location.reload();
        });

        $reloadWrap.appendChild($buttonRestart);
        this.$arenas.appendChild($reloadWrap);
    }

    showResult = () => {
        if (this.player1.hp === 0 || this.player2.hp === 0) {
            this.$formFight.disabled = true;
            this.createReloadButton();
        }

        if (this.player1.hp === 0 && this.player1.hp < this.player2.hp) {
            this.$arenas.appendChild(this.playerWin(this.player2.name));
            this.generateLogs('end', this.player2, this.player1);

        } else if (this.player2.hp === 0 && this.player2.hp < this.player1.hp) {
            this.$arenas.appendChild(this.playerWin(this.player1.name));
            this.generateLogs('end', this.player1, this.player2);

        } else if (this.player1.hp === 0 && this.player2.hp === 0) {
            this.generateLogs('draw', this.player2, this.player1);
        }
    }

    playerWin = (name) => {
        const $winTitle = createElement('div', 'winTitle');
        if (name) {
            $winTitle.innerText = `${name} win`;
        } else {
            $winTitle.innerText = `DRAW`;
        }
        return $winTitle;
    }
}

export default Game;

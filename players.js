import {changeHP, elHP, renderHP} from './hp.js';

const player1 = {
    player: 1,
    name: 'IWillKillAllTitans',
    hp: 100,
    img: './gif/eren.gif',
    weapon: ['Arms', 'Bomb', 'Pig'],
    changeHP,
    elHP,
    renderHP,
    pastDmg: 0
}

const player2 = {
    player: 2,
    name: 'Anime-Tyan',
    hp: 100,
    img: './gif/tyan.gif',
    weapon: ['Blade', 'Katana', 'Validol'],
    changeHP,
    elHP,
    renderHP,
    pastDmg: 0
}

export {player1, player2};
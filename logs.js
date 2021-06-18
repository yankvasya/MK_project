import $chat from './game.js';
import { getRandom } from './utils.js'
import { logs } from './constants.js'

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
    $chat.insertAdjacentHTML('afterbegin', el);
}

export default generateLogs ;
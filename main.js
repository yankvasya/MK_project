import { player1, player2 } from './players.js';
import getRandom from './utils.js'

const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

const ATTACK = ['head', 'body', 'foot'];

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(object) {
    const $player = createElement('div', 'player' + object.player);
    const $progressbar = createElement('div', 'progressbar');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $img = createElement('img');
    const $life = createElement('div', 'life');

    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);

    $life.style.width = `${object.hp}%`;
    $name.innerHTML = object.name;
    $img.src = object.img;
    return $player;
}

function changeHP(num) {
    this.hp -= num;
    if (this.hp <= 0) {
        this.hp = 0;
    }

    this.pastDmg = num;
    return num;
}

function elHP() {
    return document.querySelector(`.player${this.player} .life`);
}

function renderHP() {
    this.elHP().style.width = `${this.hp}%`;
}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle');
    if (name) {
        $winTitle.innerText = `${name} win`;
    } else {
        $winTitle.innerText = `DRAW`;
    }
    return $winTitle;
}

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $buttonRestart = createElement('button', 'button');
    $buttonRestart.innerText = 'Restart';

    $buttonRestart.addEventListener('click', function () {
        window.location.reload();
    });

    $reloadWrap.appendChild($buttonRestart);
    $arenas.appendChild($reloadWrap);
}


// document.onload = ;

if (document.onload = 'true') {
    generateLogs('start', player1, player2);
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

// function start() {
//     if (window.onload === true) {
//         alert('1243');
//     }
// }


function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];
    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}

function playerAttack() {
    const attack = {};

    for (let item of $formFight) {
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

function showResult() {
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

function generateLogs(type, player1, player2) {
    // const normalize = (num) => (num.toString().lenght > 1 ? num : `0${num}`);
    // const time = `${normalize(new Date().getHours())}:${normalize(new Date().getMinutes())}:${normalize(new Date().getSeconds())}`;
    // const time = new Date().toLocaleTimeString().slice();
    // let time = '';
    let text = '';
    const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    switch (type) {
        case 'start':
            text = `${logs[type].replace('[time]', time).replace('[player1]', player1.name).replace('[player2]', player2.name)}`;
            break;
        case 'hit':
            text = `${time} | ${logs[type][getRandom(logs[type].length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name)} -${player2.pastDmg} [${player2.hp}/100]`;
            break;
        // hp = player1.hp || player2.hp;
        // player.hp = playerAttack().value;
        case 'defence':
            text = `${time} | ${logs[type][getRandom(logs[type].length - 1)].replace('[playerKick]', player2.name).replace('[playerDefence]', player1.name)} -${player1.pastDmg} [${player1.hp}/100]`;
            break;
        // let el = `<p>${time} | ${text} ${-player.hp} [${hp}/100]</p>`;
        case 'draw':
            text = `${time} ${logs[type]}`;
            break;
        case 'end':
            text = `${time} ${logs[type][getRandom(logs[type].length - 1)].replace('playerWins', player1.name).replace('playerLose', player2.name)}`;
            break;
        default:
            text = 'Ошибка 404';
    }
    // $chat.insertAdjacentHTML('afterbegin', el);
    // $chat.insertAdjacentHTML('afterbegin', sg);
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // console.log(text);
    // let sg = `<p>${starttext}</p>`;
    const el = `<p>${text}</p>`;
    $chat.insertAdjacentHTML('afterbegin', el);
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
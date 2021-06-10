const $arenas = document.querySelector('.arenas');
// const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const player1 = {
    player: 1,
    name: 'IWillKillAllTitans',
    hp: 100,
    img: './gif/eren.gif',
    weapon: ['Arms', 'Bomb', 'Pig'],
    attack,
    changeHP,
    elHP,
    renderHP
}

const player2 = {
    player: 2,
    name: 'Anime-Tyan',
    hp: 100,
    img: './gif/tyan.gif',
    weapon: ['Blade', 'Katana', 'Validol'],
    attack: function () {
        console.log(this.name + ' Fight...');
    },
    changeHP,
    elHP,
    renderHP
}

function attack() {
    console.log(this.name + ' Fight...');
}


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

    $life.style.width = object.hp + '%';
    $name.innerHTML = object.name;
    $img.src = object.img;

    return $player;
}

function changeHP(num) {
    this.hp -= num;
    console.log(this.hp)
    if (this.hp <= 0) {
        this.hp = 0;
    }
}

function elHP() {
    return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle');
    if (name) {
        $winTitle.innerText = name + ' win';
    } else {
        $winTitle.innerText = 'DRAW';
    }
    return $winTitle;
}

function getRandom(num) {
    return Math.ceil(Math.random() * num);;
}

// $randomButton.addEventListener('click', function () {
//     player1.changeHP(getRandom(20));
//     player1.renderHP();
//     player2.changeHP(getRandom(20));
//     player2.renderHP();

//     if (player1.hp === 0 || player2.hp === 0) {
//         $randomButton.disabled = true;
//         createReloadButton();
//     }

//     if (player1.hp === 0 && player1.hp < player2.hp) {
//         $arenas.appendChild(playerWin(player2.name));
//     } else if (player2.hp === 0 && player2.hp < player1.hp) {
//         $arenas.appendChild(playerWin(player1.name));
//     } else if (player1.hp === 0 && player2.hp === 0) {
//         $arenas.appendChild(playerWin())
//     }
// })


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

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    }
}

$formFight.addEventListener('submit', function (e) {
    e.preventDefault();
    const enemy = enemyAttack();
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
    console.log('a', attack);
    console.log('e', enemy);
})
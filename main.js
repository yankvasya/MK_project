const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    winnername: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Arms', 'Bomb', 'Pig'],
    attack: function () {
        console.log(player1.name + ' Fight...');
    }
}

const player2 = {
    player: 2,
    name: 'Sonya',
    winnername: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Blade', 'Katana', 'Validol'],
    attack: function () {
        console.log(player2.name + ' Fight...');
    }
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

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.floor(Math.random() * 50);
    $playerLife.style.width = player.hp + '%';
    console.log(player.hp);

    if (player1.hp <= 0 && player2.hp <= 0) {
        $playerLife.style.width = '0' + '%';
        player1.hp = 0;
        player2.hp = 0;
        $arenas.appendChild(playerWin('BOTH'));
        $randomButton.disabled = true;
        return playerWin;
    } else if (player.hp <= 0 && (player1.hp || player2.hp > 0)) {
        $playerLife.style.width = '0' + '%';
        $arenas.appendChild(playerWin(player.winnername));
        $randomButton.disabled = true;
        console.log(player.hp);
        console.log(player1.hp, player2.hp);
    }
}

function playerWin(winnername) {
    const $winTitle = createElement('div', 'winTitle');
    $winTitle.innerText = winnername + ' win';
    return $winTitle;
}

$randomButton.addEventListener('click', function () {
    console.log('####: Click Random Button');
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
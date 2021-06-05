const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Arms', 'Bomb', 'Pig'],
    attack: function() {
        console.log(player1.name + ' Fight...');
    }
}

const player2 = {
    name: 'Sonya',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Blade', 'Katana', 'Validol'],
    attack: function() {
        console.log(player2.name + ' Fight...');
    }
}

function createPlayer(player, object) { 
    let $player = document.createElement ('div');
    let $arenas = document.querySelector('.arenas');

    let $progressbar = document.createElement ('div');
    let $name = document.createElement ('div');
    let $character = document.createElement ('div');
    let $img = document.createElement ('img');
    let $life = document.createElement ('div');

    $player.classList.add(player);
    $progressbar.classList.add('progressbar')
    $name.classList.add('name');
    $character.classList.add('character');
    $life.classList.add('life');


    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);

    $life.style.width = object.hp + '%';
    $name.innerHTML = object.name;
    $img.src = object.img;
}



createPlayer('player1', player1);
createPlayer('player2', player2);



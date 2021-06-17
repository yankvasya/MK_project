import { createElement } from './utils.js'

class Player {
    constructor(props) {
        console.log(props);

        this.player = props.player;
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.pastDmg = props.pastDmg;
        this.selector = `player${this.player}`;
        this.rootSelector = props.rootSelector;
    }
    changeHP = (num) => {
        this.hp -= num;
        if (this.hp <= 0) {
            this.hp = 0;
        }

        this.pastDmg = num;
        return num;
    }

    elHP = () => {
        return document.querySelector(`.${this.selector} .life`);
    }

    renderHP = () => {
        this.elHP().style.width = `${this.hp}%`;
    }


    
    // надо не забыть тут деструкт
    createPlayer = () => {
        const $player = createElement('div', this.selector);
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

        $life.style.width = `${this.hp}%`;
        $name.innerHTML = this.name;
        $img.src = this.img;

        const $root = document.querySelector(`.${this.rootSelector}`);
        $root.appendChild($player);
        return $player;
    }
}



export default Player;
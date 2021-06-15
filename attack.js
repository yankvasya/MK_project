import { getRandom } from "./utils.js";
import { $formFight } from "./creates.js";

const ATTACK = ['head', 'body', 'foot'];

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

// function enemyAttack() {
//     const hit = ATTACK[getRandom(3) - 1];
//     const defence = ATTACK[getRandom(3) - 1];
//     return {
//         value: getRandom(HIT[hit]),
//         hit,
//         defence
//     }
// }

const enemyAttack = () => {
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

export {ATTACK, HIT, enemyAttack, playerAttack};
// const date = new Date();
// console.dir(date);

// // console.log(date.getDate());
// console.log(new Date().getMonth());

// console.log(new Date('1984-12-1'));

// console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
// console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);


// new Date(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());

// console.log(new Date().getHours() + ':' + new Date.getMinutes() + ':' + new Date.getSeconds());



// console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);


const player = {
    name: 'Zar',
    type: 'Sensei',
    weapon: ['Katana', 'Python', 'Bread'],
    hp: {
        current: 1000,
        total: 880,
    }
}

// const player3 = {
//     name: 'Zar1',
//     type: 'Sensei1',
//     weapon: ['Katana', 'Python', 'Bread'],
//     hp: {
//         current: 1000,
//         total: 880,
//     }
// }


const {name, weapon: [one,, three], ...rest} = player;
// const {name: namePlayer3, ...restPlayer3} = player3;

// console.log(name, type, weapon);
// console.log(hp);
// console.log(current, total);
// console.log(name, one, three, rest);


const character = {
    name: 'Scorpion',
    hp: 100,
    weapon: ['hands'],
    type: 'fighters'
}

character.whoop = function () {
    console.log(`${this.name} let's fight!`);
}

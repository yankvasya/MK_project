const date = new Date();
console.dir(date);

// console.log(date.getDate());
console.log(new Date().getMonth());

console.log(new Date('1984-12-1'));

console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);


new Date(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());

console.log(new Date().getHours() + ':' + new Date.getMinutes() + ':' + new Date.getSeconds());



console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);

async function getPlayers() {
    console.log('start');
    const q = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players')
    const body = await (await q).json();
    console.log(body);
    return body;
}

getPlayers();
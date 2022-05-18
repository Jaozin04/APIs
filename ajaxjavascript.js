async function Location(n) {
	const result = await fetch (`https://rickandmortyapi.com/api/location/${n}`);
	const location = await result.json();
	console.log(location.name);

	const p = `<p> Mundo 15: ${location.name}<p>`;
	document.body.insertAdjacentHTML('afterbegin',p);
}

async function Character(n) {
	const result = await fetch (`https://rickandmortyapi.com/api/character/${n}`);
	const character = await result.json();
	console.log(character.name);
	console.log(character.status);

	const pn = `<p> Personagem: ${character.name}<p>`;
	const ps = `<p> Status: ${character.status}<p>`;
	document.body.insertAdjacentHTML('afterbegin',pn);
	document.body.insertAdjacentHTML('afterbegin',ps);
}

async function Episode(n) {
	const result = await fetch (`https://rickandmortyapi.com/api/episode/${n}`);
	const episode = await result.json();
	console.log(episode.name);

	const p = `<p> Nome do episodio 5: ${episode.name}<p>`;
	document.body.insertAdjacentHTML('afterbegin',p);
}




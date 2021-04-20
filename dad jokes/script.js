const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

getJokes();

jokeBtn.addEventListener('click', () => {
	getJokes();
});

async function getJokes() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	const response = await fetch('https://icanhazdadjoke.com', config);

	const data = await response.json();

	jokeElement.innerHTML = data.joke;
}

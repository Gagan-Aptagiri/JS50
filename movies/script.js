const API_URL =
	'https://api.themoviedb.org/3/discover/movie?api_key=3be8933e0f186fa6d8bbd539d5736a06&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=flatrate';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=3be8933e0f186fa6d8bbd539d5736a06&language=en-US&page=1&include_adult=true&query=""';

const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();

	console.log(data);
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm);
		search.value = '';
	} else {
		window.location.reload();
	}
});

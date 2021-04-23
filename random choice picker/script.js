const textarea = document.getElementById('textarea');
const tagsElement = document.getElementById('tags');

textarea.focus();

textarea.addEventListener('input', (event) => {
	createTags(event.target.value);
});

function createTags(input) {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());

	tagsElement.innerHTML = '';

	tags.forEach((tag) => {
		const tagElement = document.createElement('span');
		tagElement.classList.add('tag');
		tagElement.innerText = tag;
		tagsElement.appendChild(tagElement);
	});
}

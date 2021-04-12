const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentProgress = 1;

next.addEventListener('click', () => {
	currentProgress++;

	if (currentProgress > circles.length) {
		currentProgress = circles.length - 1;
	}

	update();
});

prev.addEventListener('click', () => {
	currentProgress--;

	if (currentProgress < 1) {
		currentProgress = 1;
	}

	update();
});

function update() {
	circles.forEach((circle, idx) => {
		if (idx < currentProgress) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});

	const actives = document.querySelectorAll('.active');

	progress.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + '%';

	if (currentProgress === 1) {
		prev.disabled = true;
	} else if (currentProgress === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}

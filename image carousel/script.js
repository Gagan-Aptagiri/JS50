const imagesContainer = document.getElementById('imgs');
const images = document.querySelectorAll('#imgs img');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let index = 0;

let carouselImageChangeInterval = setInterval(run, 2000);

function run() {
	index++;
	changeImage();
}

function changeImage() {
	if (index > images.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = images.length - 1;
	}

	imagesContainer.style.transform = `translateX(${-index * 500}px)`;
}

function resetInterval() {
	clearInterval(carouselImageChangeInterval);
	carouselImageChangeInterval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
	index++;
	changeImage();
	resetInterval();
});

leftBtn.addEventListener('click', () => {
	index--;
	changeImage();
	resetInterval();
});

const password = document.querySelector('#password');
const background = document.querySelector('#background');

password.addEventListener('input', (e) => {
	const input = e.target.value;
	const inputLength = input.length;
	const blurValue = 16 - inputLength * 2;

	background.style.filter = `blur(${blurValue}px)`;
});

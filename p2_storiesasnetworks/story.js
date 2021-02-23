let body = document.querySelector('body');

function revealAnswer() {
	body.classList.add('reveal');
}

function hideAnswer() {
	body.classList.remove('reveal');
}

document.addEventListener('touchstart',revealAnswer);
document.addEventListener('touchend', hideAnswer);


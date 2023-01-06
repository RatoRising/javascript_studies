const btn = document.querySelector('.btnopenmodal');
const modalWrapper = document.querySelector('.modalwrapper');

btn.addEventListener('click', () => {
	modalWrapper.classList.remove('invisible');
	btn.classList.add('invisible');
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		modalWrapper.classList.add('invisible');
		btn.classList.remove('invisible');
	}
});

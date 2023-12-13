const button = document.querySelector('#menu');
const navigation = document.querySelector('.navigationbar');

button.addEventListener('click', () => {
	navigation.classList.toggle('open');
	button.classList.toggle('open');
});
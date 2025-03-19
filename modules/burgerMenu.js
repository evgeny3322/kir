const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

const toggleBurger = () => {
	setTimeout(() => {
		burger.textContent = burger.textContent === 'Меню' ? 'Закрыть' : 'Меню';
	}, 600);
	menu.classList.toggle('top-0');
	body.classList.toggle('overflow-hidden');
};

burger.addEventListener('click', toggleBurger);

menu.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', toggleBurger);
});

const earlyAccessForm = document.querySelector('#earlyAccessForm');
const emailInput = earlyAccessForm.querySelector('#email');

const highlightInvalidInput = (selector) => {
	const input = document.querySelector(selector);

	input.classList.add('!border-red-500', '!text-red-500');
	setTimeout(() => {
		input.classList.remove('!border-red-500', '!text-red-500');
	}, 2000);
};

earlyAccessForm.addEventListener('submit', (event) => {
	event.preventDefault();

	if (/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(emailInput.value.trim())) {
		// ...
		alert('Спасибо за регистрацию! Вы получите ранний доступ к FW collection DROP.');
	} else {
		highlightInvalidInput('#email');
	}
});

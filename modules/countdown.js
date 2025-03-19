let countdownDate = new Date('Jan 28, 2025 00:00:00').getTime();
const detailedCountdown = document.querySelector('.detailedCountdown');
const compactCountdown = document.querySelector('.compactCountdown');

const getDeclension = (number, one, few, many) => {
	number = Math.abs(number) % 100;
	let lastDigit = number % 10;

	if (number > 10 && number < 20) return many;
	if (lastDigit > 1 && lastDigit < 5) return few;
	if (lastDigit === 1) return one;
	return many;
};

const updateCountdown = () => {
	let now = new Date().getTime();

	let distance = countdownDate - now;

	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	if (distance < 0) {
		detailedCountdown ? (detailedCountdown.innerHTML = `0 дней, 0 часов, 0 минут, 0 секунд`) : '';
		compactCountdown ? (compactCountdown.innerHTML = `0:0:0:0`) : '';
	} else {
		detailedCountdown
			? (detailedCountdown.innerHTML = `
            ${days} ${getDeclension(days, 'день', 'дня', 'дней')}, 
            ${hours} ${getDeclension(hours, 'час', 'часа', 'часов')}, 
            ${minutes} ${getDeclension(minutes, 'минута', 'минуты', 'минут')}, 
            ${seconds} ${getDeclension(seconds, 'секунда', 'секунды', 'секунд')}
        `)
			: '';
		compactCountdown ? (compactCountdown.innerHTML = `${days}:${hours}:${minutes}:${seconds}`) : '';
	}
};

updateCountdown();
let countdownInterval = setInterval(updateCountdown, 1000);

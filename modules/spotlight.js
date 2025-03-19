const spotlightContainer = document.querySelector('.spotlight-container');
const spotlight = document.getElementById('spotlight');
let spotlightX = 0;
let spotlightY = 0;

function getBoundingClient(e) {
	const rect = spotlightContainer.getBoundingClientRect();
	const multipliers = [
		{ width: 2600, value: 500 },
		{ width: 2500, value: 400 },
		{ width: 2300, value: 300 },
		{ width: 2086, value: 200 },
		{ width: 1860, value: 150 },
		{ width: 1710, value: 100 },
		{ width: 1650, value: 50 },
		{ width: 1480, value: 20 },
		{ width: 1400, value: 0.4 },
		{ width: 1350, value: 1 },
		{ width: 1250, value: 1 },
		{ width: 1150, value: 1 },
		{ width: 1050, value: 1 },
		{ width: 950, value: 1 },
		{ width: 850, value: 1 }
	];

	let multiply = 600;

	for (const { width, value } of multipliers) {
		if (window.innerWidth <= width) {
			multiply = value;
		}
	}
	spotlightX = e.clientX - multiply;
	spotlightY = e.clientY - rect.top;
	spotlight.setAttribute('cx', spotlightX);
	spotlight.setAttribute('cy', spotlightY);
}
document.addEventListener('mousemove', getBoundingClient);

window.addEventListener(
	'resize',
	(e) => {
		if (window.innerWidth <= 768) {
			document.removeEventListener('mousemove', getBoundingClient);
			spotlight.setAttribute('cx', 0);
			spotlight.setAttribute('cy', 50);
			spotlight.classList.add('active-footer');
			// Select the SVG element
			var svg = document.querySelector('.spotlight-svg'); // replace with your SVG ID

			// Set the viewBox attribute
			svg.setAttribute('viewBox', '0 0 500 115');

			svg.querySelector('g').classList.add('active-left');
		} else {
			var svg = document.querySelector('.spotlight-svg'); // replace with your SVG ID
			document.addEventListener('mousemove', getBoundingClient);
			spotlight.classList.remove('active-footer');
			svg.setAttribute('viewBox', '0 0 1413 115');
			svg.querySelector('g').classList.remove('active-left');
		}
	},
	true
);

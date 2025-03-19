const images = document.querySelectorAll('.parallax-img');
new SimpleParallax(images, {
	scale: 1.5,
	orientation: 'down',
	delay: 0,
	overflow: true
});

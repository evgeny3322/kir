new Swiper('.gallerySwiper', {
	navigation: {
		prevEl: '.buttonPrev',
		nextEl: '.buttonNext'
	},
	loop: true,
	slidesPerView: '1.46',
	spaceBetween: '16',
	speed: '700',
	initialSlide: 1,
	breakpoints: {
		1024: {
			centeredSlidesBounds: true,
			centeredSlides: true,
			loop: false,
			slidesPerView: '1.8'
		}
	}
});

new Swiper('.servicesSwiper', {
	loop: true,
	slidesPerView: '1.11',
	spaceBetween: '10',
	speed: '700',
	initialSlide: 1,
	breakpoints: {
		1280: {
			loop: false,
			slidesPerView: '4'
		}
	}
});

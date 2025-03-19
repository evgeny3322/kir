document.querySelectorAll('.accordionHeading').forEach((accordionHeading) => {
	accordionHeading.addEventListener('click', (event) => {
		accordionHeading.classList.toggle('active');
		const accordion = accordionHeading.parentElement,
			icon = accordionHeading.lastElementChild,
			accordionBody = accordionHeading.nextElementSibling;

		icon.lastElementChild.classList.toggle('rotate-90');
		if (accordionHeading.classList.contains('active')) {
			accordion.style.rowGap = '32px';
			accordionBody.style.cssText = `
                max-height: ${accordionBody.scrollHeight}px;
                opacity: 1;
            `;
		} else {
			accordion.style.rowGap = '0px';
			accordionBody.style.cssText = `
                max-height: 0px;
                opacity: 0;
            `;
		}
	});
});

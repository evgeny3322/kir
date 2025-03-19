const customCursor = document.getElementById('customCursor');
const caseImages = document.querySelectorAll('.cases .case-image');

const toggleCustomCursorVisibility = () => customCursor.classList.toggle('opacity-0');

window.addEventListener('mousemove', (event) => {
	customCursor.style.top = `${event.clientY}px`;
	customCursor.style.left = `${event.clientX}px`;
});

caseImages.forEach((image) => {
	image.addEventListener('mouseenter', toggleCustomCursorVisibility);
	image.addEventListener('mouseleave', toggleCustomCursorVisibility);
});

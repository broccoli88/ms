const galleryGrid = document.querySelectorAll(`.gallery__img-container`);

galleryGrid.forEach((image, index) => {
	if (index % 3 === 0) {
		image.classList.add(`altered-width`);
	}
	if (index === 4) {
		image.classList.add(`altered-width`);
	}
});

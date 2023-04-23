// Nav function

export default function navUnwrap() {
	const menu = document.querySelector(`.nav__menu`);
	const nav = document.querySelector(`.nav`);

	menu.addEventListener(`click`, () => {
		nav.classList.toggle(`collapsible`);
	});

	window.addEventListener(`resize`, () => {
		if (window.innerWidth >= 768) {
			nav.classList.remove(`collapsible`);
		}
	});
}

// Create gallery function

export function createGallery(imageArray, tilesParentClass, gridTilesClass) {
	const gallery = document.querySelector(`.${tilesParentClass}`);

	imageArray.forEach((image) => {
		const figure = document.createElement(`figure`);
		figure.classList.add(`gallery__img-container`);
		gallery.appendChild(figure);
	});

	const galleryGrid = document.querySelectorAll(`.${gridTilesClass}`);

	galleryGrid.forEach((tile, index) => {
		tile.style.background = `url(${imageArray[index]})`;
		tile.style.backgroundSize = `cover`;
	});

	galleryGrid.forEach((image, index) => {
		if (index % 4 === 0) {
			image.classList.add(`col-span-6`);
			if (index - 1 > 0) {
				galleryGrid[index - 1].classList.add("col-span-6");
			}
		}
	});

	galleryGrid.forEach((image) => {
		if (!image.classList.contains("col-span-6")) {
			image.classList.add(`col-span-4`);
		}
	});
}

// Modal

export function modalDisplay(
	imageArray,
	gridTilesClass,
	modalClass,
	closeBtnClass,
	teleportImgClass,
	slidersClass
) {
	const galleryGrid = document.querySelectorAll(`.${gridTilesClass}`);
	const teleport = document.querySelector(`.${modalClass}`);
	const closeTeleport = document.querySelector(`.${closeBtnClass}`);
	const teleportImage = document.querySelector(`.${teleportImgClass}`);
	const sliders = document.querySelectorAll(`.${slidersClass}`);

	let currentImageIndex = 0;

	// Opening teleport and providing image.src based on index in array

	galleryGrid.forEach((tile, index) => {
		tile.addEventListener("click", () => {
			teleport.classList.add(`show-teleport`);
			teleportImage.src = imageArray[index];
			currentImageIndex = index;
		});
	});

	closeTeleport.addEventListener(`click`, () => {
		teleport.classList.remove(`show-teleport`);
	});

	// Image slide

	sliders.forEach((slider) => {
		slider.addEventListener("click", (e) => {
			if (e.target.classList.contains(`slider-right`)) {
				currentImageIndex++;
				if (currentImageIndex > imageArray.length - 1) {
					currentImageIndex = 0;
				}
				teleportImage.src = imageArray[currentImageIndex];
			}

			if (e.target.classList.contains(`slider-left`)) {
				currentImageIndex--;
				if (currentImageIndex < 0) {
					currentImageIndex = imageArray.length - 1;
				}
				teleportImage.src = imageArray[currentImageIndex];
			}
		});
	});
}

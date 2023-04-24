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

export function createGallery(imageArray, tilesParentClass) {
	const gallery = document.querySelector(`.${tilesParentClass}`);

	imageArray.forEach((image) => {
		const img = document.createElement(`img`);
		img.classList.add("gallery-img");
		gallery.appendChild(img);
	});

	const galleryGrid = document.querySelectorAll(`.gallery-img`);

	galleryGrid.forEach((tile, index) => {
		tile.src = imageArray[index];
		if (tile.naturalHeight > 1250) {
			tile.classList.add(`row-span-2`);
		}
		if (tile.naturalWidth > 1250) {
			tile.classList.add(`col-span-2`);
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

	teleport.addEventListener("click", (e) => {
		if (e.target === teleport) {
			teleport.classList.remove(`show-teleport`);
		}
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

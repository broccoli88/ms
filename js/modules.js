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

export function createGallery(imageArray, parentElClass) {
	const gallery = document.querySelector(`.${parentElClass}`);

	imageArray.forEach((image) => {
		const img = document.createElement("img");
		img.classList.add("gallery-img");
		img.src = image;

		gallery.append(img);
	});
}

// Modal

export function modalDisplay(
	imageArray,
	modalClass,
	closeBtnClass,
	teleportImgClass,
	slidersClass
) {
	const galleryGrid = document.querySelectorAll(`.gallery-img`);
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

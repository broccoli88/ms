import navUnwrap from "./navBar.js";

navUnwrap();

const images = [
	"images/banan/1.jpg",
	"images/banan/2.jpg",
	"images/banan/3.jpg",
	"images/banan/4.jpg",
	"images/banan/5.jpg",
	"images/banan/6.jpg",
	"images/banan/7.jpg",
	"images/banan/8.jpg",
	"images/banan/9.jpg",
	"images/banan/10.jpg",
	"images/banan/11.jpg",
	"images/banan/12.jpg",
	"images/banan/13.jpg",
];

// Adding image container to DOM

images.forEach((image, index) => {
	const gallery = document.querySelector(`.grid-gallery`);
	const figure = document.createElement(`figure`);
	figure.classList.add(`gallery__img-container`);
	gallery.appendChild(figure);
});

const galleryGrid = document.querySelectorAll(`.gallery__img-container`);

// Providing image path to the img element

galleryGrid.forEach((image, index) => {
	image.style.background = `url(${images[index]})`;
	image.style.backgroundSize = `cover`;
});

// Changing grid layout and adding classes to image containers

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

// Teleport functionality

const teleport = document.querySelector(`.teleport`);
const closeTeleport = document.querySelector(`.teleport__close`);
const teleportImage = document.querySelector(".teleport__img");
const sliders = document.querySelectorAll(".teleport__slider");

let currentImageIndex = 0;
// Opening teleport and providing image.src based on index in array

galleryGrid.forEach((tile, index) => {
	tile.addEventListener("click", () => {
		teleport.classList.add(`show-teleport`);
		teleportImage.src = images[index];
		currentImageIndex = index;
	});
});

// Closing teleport

closeTeleport.addEventListener(`click`, () => {
	teleport.classList.remove(`show-teleport`);
});

// Image slide

sliders.forEach((slider) => {
	slider.addEventListener("click", (e) => {
		if (e.target.classList.contains(`slider-right`)) {
			currentImageIndex++;
			if (currentImageIndex > images.length - 1) {
				currentImageIndex = 0;
			}
			teleportImage.src = images[currentImageIndex];
			console.log(teleportImage.src, currentImageIndex);
		}

		if (e.target.classList.contains(`slider-left`)) {
			currentImageIndex--;
			if (currentImageIndex < 0) {
				currentImageIndex = images.length - 1;
			}
			teleportImage.src = images[currentImageIndex];
			console.log(teleportImage.src, currentImageIndex);
		}
	});
});

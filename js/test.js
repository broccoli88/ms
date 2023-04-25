import navUnwrap from "./testModules.js";
import {
	createGallery,
	setGalleryLayout,
	modalDisplay,
} from "./testModules.js";

navUnwrap();
const pageTitle = document.querySelector("head title").textContent;
const heading = document.querySelector(`.heading`);

heading.textContent = pageTitle;

// Banan Gallery

const imagesBanan = [
	"../images/banan/1.jpg",
	"../images/banan/2.jpg",
	"../images/banan/3.jpg",
	"../images/banan/4.jpg",
	"../images/banan/5.jpg",
	"../images/banan/6.jpg",
	"../images/banan/7.jpg",
	"../images/banan/8.jpg",
	"../images/banan/9.jpg",
	"../images/banan/10.jpg",
	"../images/banan/11.jpg",
	"../images/banan/12.jpg",
	"../images/banan/13.jpg",
];

const imagesCzekIT = [
	"../images/czek-It/1.jpg",
	"../images/czek-It/2.jpg",
	"../images/czek-It/3.jpg",
	"../images/czek-It/4.jpg",
	"../images/czek-It/5.jpg",
	"../images/czek-It/6.jpg",
	"../images/czek-It/7.jpg",
	"../images/czek-It/8.jpg",
	"../images/czek-It/9.jpg",
	"../images/czek-It/10.jpg",
	"../images/czek-It/11.jpg",
	"../images/czek-It/12.jpg",
	"../images/czek-It/13.jpg",
	"../images/czek-It/14.jpg",
	"../images/czek-It/15.jpg",
	"../images/czek-It/16.jpg",
	"../images/czek-It/17.jpg",
];

if (pageTitle === "Banan NS") {
	createGallery(imagesBanan, "grid-gallery");
}

if (pageTitle === "Czek IT") {
	createGallery(imagesCzekIT, "grid-gallery");
}

window.addEventListener("load", () => {
	const images = document.querySelectorAll(".gallery-img");
	images.forEach((image) => {
		if (image.naturalHeight >= 1250) {
			image.classList.add("row-span-2");
		}
		if (image.naturalWidth >= 1250) {
			image.classList.add("col-span-2");
		}
	});
});

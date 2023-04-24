import navUnwrap from "./testModules.js";
import { createGallery, modalDisplay } from "./testModules.js";

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

createGallery(imagesBanan, "grid-gallery");
modalDisplay(
	imagesBanan,
	"gallery-img",
	"teleport",
	"teleport__close",
	"teleport__img",
	"teleport__slider"
);

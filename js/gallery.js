import navUnwrap from "./modules.js";
import { createGallery, modalDisplay } from "./modules.js";

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

const imagesDentify = [
	"../images/dentify/1.jpg",
	"../images/dentify/2.jpg",
	"../images/dentify/3.jpg",
	"../images/dentify/4.jpg",
	"../images/dentify/5.jpg",
	"../images/dentify/6.jpg",
	"../images/dentify/7.jpg",
	"../images/dentify/8.jpg",
	"../images/dentify/9.jpg",
	"../images/dentify/10.jpg",
	"../images/dentify/11.jpg",
	"../images/dentify/12.jpg",
	"../images/dentify/13.jpg",
	"../images/dentify/14.jpg",
	"../images/dentify/15.jpg",
	"../images/dentify/16.jpg",
	"../images/dentify/17.jpg",
	"../images/dentify/18.jpg",
	"../images/dentify/19.jpg",
	"../images/dentify/20.jpg",
	"../images/dentify/21.jpg",
	"../images/dentify/22.jpg",
	"../images/dentify/23.jpg",
	"../images/dentify/24.jpg",
];

const imagesFalk = [
	"../images/falk/1.jpg",
	"../images/falk/2.jpg",
	"../images/falk/3.jpg",
	"../images/falk/4.jpg",
	"../images/falk/5.jpg",
	"../images/falk/6.jpg",
	"../images/falk/7.jpg",
	"../images/falk/8.jpg",
	"../images/falk/9.jpg",
	"../images/falk/10.jpg",
	"../images/falk/11.jpg",
	"../images/falk/12.jpg",
	"../images/falk/13.jpg",
	"../images/falk/14.jpg",
	"../images/falk/15.jpg",
	"../images/falk/16.jpg",
	"../images/falk/17.jpg",
	"../images/falk/18.jpg",
	"../images/falk/19.jpg",
	"../images/falk/20.jpg",
	"../images/falk/21.jpg",
	"../images/falk/22.jpg",
	"../images/falk/23.jpg",
	"../images/falk/24.jpg",
	"../images/falk/25.jpg",
	"../images/falk/26.jpg",
	"../images/falk/27.jpg",
	"../images/falk/28.jpg",
	"../images/falk/29.jpg",
];

const imagesKiaKorczyk = [
	"../images/kia-korczyk/1.jpg",
	"../images/kia-korczyk/2.jpg",
	"../images/kia-korczyk/3.jpg",
	"../images/kia-korczyk/4.jpg",
	"../images/kia-korczyk/5.jpg",
	"../images/kia-korczyk/6.jpg",
	"../images/kia-korczyk/7.jpg",
	"../images/kia-korczyk/8.jpg",
	"../images/kia-korczyk/9.jpg",
	"../images/kia-korczyk/10.jpg",
	"../images/kia-korczyk/11.jpg",
	"../images/kia-korczyk/12.jpg",
	"../images/kia-korczyk/13.jpg",
];

const imagesMercedesZasada = [
	"../images/mercedes-benz/1.jpg",
	"../images/mercedes-benz/2.jpg",
	"../images/mercedes-benz/3.jpg",
	"../images/mercedes-benz/4.jpg",
	"../images/mercedes-benz/5.jpg",
	"../images/mercedes-benz/6.jpg",
	"../images/mercedes-benz/7.jpg",
	"../images/mercedes-benz/8.jpg",
	"../images/mercedes-benz/9.jpg",
	"../images/mercedes-benz/10.jpg",
	"../images/mercedes-benz/11.jpg",
	"../images/mercedes-benz/12.jpg",
	"../images/mercedes-benz/13.jpg",
	"../images/mercedes-benz/14.jpg",
	"../images/mercedes-benz/15.jpg",
	"../images/mercedes-benz/16.jpg",
	"../images/mercedes-benz/17.jpg",
	"../images/mercedes-benz/18.jpg",
	"../images/mercedes-benz/19.jpg",
	"../images/mercedes-benz/20.jpg",
	"../images/mercedes-benz/21.jpg",
	"../images/mercedes-benz/22.jpg",
	"../images/mercedes-benz/23.jpg",
	"../images/mercedes-benz/24.jpg",
];

const imagesMyClinic = [
	"../images/my-clinic/1.jpg",
	"../images/my-clinic/2.jpg",
	"../images/my-clinic/3.jpg",
	"../images/my-clinic/4.jpg",
	"../images/my-clinic/5.jpg",
	"../images/my-clinic/6.jpg",
	"../images/my-clinic/7.jpg",
	"../images/my-clinic/8.jpg",
	"../images/my-clinic/9.jpg",
	"../images/my-clinic/10.jpg",
	"../images/my-clinic/11.jpg",
	"../images/my-clinic/12.jpg",
	"../images/my-clinic/13.jpg",
	"../images/my-clinic/14.jpg",
	"../images/my-clinic/15.jpg",
	"../images/my-clinic/16.jpg",
	"../images/my-clinic/17.jpg",
	"../images/my-clinic/18.jpg",
];

const imagesSesjaBiznesowa = [
	"../images/sesja-biznesowa/1.jpg",
	"../images/sesja-biznesowa/2.jpg",
	"../images/sesja-biznesowa/3.jpg",
	"../images/sesja-biznesowa/4.jpg",
	"../images/sesja-biznesowa/5.jpg",
	"../images/sesja-biznesowa/6.jpg",
	"../images/sesja-biznesowa/7.jpg",
	"../images/sesja-biznesowa/8.jpg",
	"../images/sesja-biznesowa/9.jpg",
	"../images/sesja-biznesowa/10.jpg",
];

if (pageTitle === "Banan NS") {
	createGallery(imagesBanan, "grid-gallery", "gallery__img-container");
	modalDisplay(
		imagesBanan,
		"gallery__img-container",
		"teleport",
		"teleport__close",
		"teleport__img",
		"teleport__slider"
	);
}
if (pageTitle === "Czek IT") {
	createGallery(imagesCzekIT, "grid-gallery", "gallery__img-container");
	modalDisplay(
		imagesCzekIT,
		"gallery__img-container",
		"teleport",
		"teleport__close",
		"teleport__img",
		"teleport__slider"
	);
}
if (pageTitle === "Dentify") {
	createGallery(imagesDentify, "grid-gallery", "gallery__img-container");
	modalDisplay(
		imagesDentify,
		"gallery__img-container",
		"teleport",
		"teleport__close",
		"teleport__img",
		"teleport__slider"
	);
}
if (pageTitle === "Falk") {
	createGallery(imagesFalk, "grid-gallery", "gallery__img-container");
	modalDisplay(
		imagesFalk,
		"gallery__img-container",
		"teleport",
		"teleport__close",
		"teleport__img",
		"teleport__slider"
	);
}
if (pageTitle === "KIA Korczyk") {
	createGallery(imagesKiaKorczyk, "grid-gallery", "gallery__img-container");
	modalDisplay(
		imagesKiaKorczyk,
		"gallery__img-container",
		"teleport",
		"teleport__close",
		"teleport__img",
		"teleport__slider"
	);
}
if (pageTitle === "Mercedes Benz Sobieslaw Zasada") {
	createGallery(
		imagesMercedesZasada,
		"grid-gallery",
		"gallery__img-container"
	);
	modalDisplay(
		imagesMercedesZasada,
		"gallery__img-container",
		"teleport",
		"teleport__close",
		"teleport__img",
		"teleport__slider"
	);
}
if (pageTitle === "My Clicnic") {
	createGallery(imagesMyClinic, "grid-gallery", "gallery__img-container");
	modalDisplay(
		imagesMyClinic,
		"gallery__img-container",
		"teleport",
		"teleport__close",
		"teleport__img",
		"teleport__slider"
	);
}
if (pageTitle === "Sesja Biznesowa") {
	createGallery(
		imagesSesjaBiznesowa,
		"grid-gallery",
		"gallery__img-container"
	);
	modalDisplay(
		imagesSesjaBiznesowa,
		"gallery__img-container",
		"teleport",
		"teleport__close",
		"teleport__img",
		"teleport__slider"
	);
}

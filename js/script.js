// Nav

// const menu = document.querySelector(`.nav__menu`);
// const nav = document.querySelector(`.nav`);

// menu.addEventListener(`click`, () => {
// 	nav.classList.toggle(`collapsible`);
// });

// window.addEventListener(`resize`, () => {
// 	if (window.innerWidth >= 768) {
// 		nav.classList.remove(`collapsible`);
// 	}
// });

// Grid main

const images = [
	{ img: "../images/photos-main/banan.jpg" },
	{ img: "../images/photos-main/biznes.jpg" },
	{ img: "../images/photos-main/czekit.jpg" },
	{ img: "../images/photos-main/dentify.jpg" },
	{ img: "../images/photos-main/falk.jpg" },
	{ img: "../images/photos-main/kia.jpg" },
	{ img: "../images/photos-main/mercedes.jpg" },
	{ img: "../images/photos-main/myclinic.jpg" },
];
const gridTiles = document.querySelectorAll(".grid__link");

window.addEventListener(`load`, () => {
	gridTiles.forEach((tile, index) => {
		image = images[index].img;
		tile.style.backgroundImage = `url(${image})`;
	});
});

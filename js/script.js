// Nav
import navUnwrap from "./modules.js";

navUnwrap();

// Grid main

const pageTitle = document.querySelector(`head title`).textContent;

if (pageTitle !== "Under Construction") {
	const images = [
		{ img: "../images/photos-main/banan.jpg" },
		{ img: "../images/photos-main/czekit.jpg" },
		{ img: "../images/photos-main/dentify.jpg" },
		{ img: "../images/photos-main/falk.jpg" },
		{ img: "../images/photos-main/biznes.jpg" },
		{ img: "../images/photos-main/mercedes.jpg" },
		{ img: "../images/photos-main/kia.jpg" },
		{ img: "../images/photos-main/myclinic.jpg" },
	];
	const gridTiles = document.querySelectorAll(".grid__link");

	window.addEventListener(`load`, () => {
		gridTiles.forEach((tile, index) => {
			let image = images[index].img;
			tile.style.backgroundImage = `url(${image})`;
		});
	});

	// Grid slide

	const hero = document.querySelector(`.hero`);

	const gridObserver = new IntersectionObserver(
		(entries) => {
			const grid = document.querySelector(`.grid`);
			if (!entries[0].isIntersecting) {
				grid.classList.add(`grid-slide`);
				hero.classList.add(`hero-fade`);
			} else {
				grid.classList.remove(`grid-slide`);
				hero.classList.remove(`hero-fade`);
			}
		},
		{
			threshold: 0.98,
		}
	);

	gridObserver.observe(hero);
}

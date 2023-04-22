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

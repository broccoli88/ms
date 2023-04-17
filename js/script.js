const menu = document.querySelector(`.nav__menu>img`);
const navList = document.querySelector(`.nav__list`);

menu.addEventListener(`click`, () => {
	navList.classList.toggle(`menu-active`);
});

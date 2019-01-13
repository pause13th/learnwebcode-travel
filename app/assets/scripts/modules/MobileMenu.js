
import $ from 'jquery';

class MobileMenu {
	constructor() {

		this.menuIcon = $('.header__menu-icon');
		this.menuContent = $('.header__menu-content');
		this.events();
		this.siteHeader = $('.header');

	}
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu(){
		// console.log('icon is clicked')
		this.menuContent.toggleClass("header__menu-content--is-visible");
		this.siteHeader.toggleClass("header--is-expanded");
		this.menuIcon.toggleClass("header__menu-icon--close-x");
	}
}

export default MobileMenu;
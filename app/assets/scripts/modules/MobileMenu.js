import $ from 'jquery';

class MobileMenu{
  constructor(){
    this.menuIcon = $(".site-header__menu-icon");
    this.menuItem = $(".primary-nav a");
    this.siteHeader = $(".site-header");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }
  events(){
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    this.menuItem.click(this.removeTheMenu.bind(this));
  }
  toggleTheMenu(){
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
  removeTheMenu(){
    this.siteHeader.removeClass("site-header--is-expanded");
    this.menuContent.removeClass("site-header__menu-content--is-visible");
    this.menuIcon.removeClass("site-header__menu-icon--close-x");
  }

}

export default MobileMenu;

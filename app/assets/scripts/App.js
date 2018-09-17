import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import TopArrow from './modules/TopArrow';
import RevealOnScroll  from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import chart from './modules/chart';
import Modal from './modules/Modal';
import Fixed from './modules/fixed';




var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonials"), "65%");

var stickyHeader = new StickyHeader();
var modal = new Modal();


var header = $('.large-hero ');
var range = 200;

$(window).on('scroll', function () {

  var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;

  header.css({ 'opacity': calc });

  if (calc > '1') {
    header.css({ 'opacity': 1 });
  } else if ( calc < '0' ) {
    header.css({ 'opacity': 0.06 });
  }

});

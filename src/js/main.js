/*jslint devel: true, browser: true, white: true*/
/*jslint maxerr: 10, es6, node, single, for, bitwise, for, multivar*/
/*eslint-env es6, es2017, es2018*/
/*eslint-disable no-console,*/
/*global console*/

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },

	slidesPerView: 2.5,

	speed: 700,
	spaceBetween: 50,

	// autoplay: {
	// 	delay: 3000,
	// },

	// effect: 'coverflow',

	// CoverflowEffect: {
	// 	rotate: 20,
	// 	stretch: 50,
	// },

	keyboard: {
		enable: true,
		onlyInViewport: true,
		PageUpDown: false,
	},

});
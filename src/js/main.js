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
		clickable: false,
		dynamicBullets: false,
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
	breakpoints: {
		// when window width is >= 320px
		250: {
			slidesPerView: 1,
		  },
		992: {
			slidesPerView: 2,
			spaceBetween: 50,
		  },
		1400: {
		  slidesPerView: 2.5,
		  spaceBetween: 100,
		},
	  },

	speed: 700,
	spaceBetween: 50,

	// autoplay: {
	// 	delay: 4000,
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

document.addEventListener('DOMContentLoaded', () => {
	const productWrappers = document.querySelectorAll('.product__wrapper');
	const productButtons = document.querySelectorAll('.product__button');
	let activeIndex = 2; // Индекс третьего элемента, начинается с 0
  
	productWrappers.forEach((wrapper, index) => {
	  wrapper.addEventListener('mouseover', () => {
		if (index !== activeIndex) {
		  productWrappers[activeIndex].classList.remove('product__wrapper--active');
		  productButtons[activeIndex].classList.remove('product__button--active');
  
		  wrapper.classList.add('product__wrapper--active');
		  productButtons[index].classList.add('product__button--active');
  
		  activeIndex = index;
		}
	  });
	});
  
	document.addEventListener('mouseout', () => {
	  // Ничего не делаем, так как требуется сохранение активного элемента
	});
  });


  document.addEventListener('DOMContentLoaded', () => {
	const swiperItems = document.querySelectorAll('.swiper__item');
	const nextButton = document.querySelector('.swiper-button-next');
	const prevButton = document.querySelector('.swiper-button-prev');
  
	let isTransitioning = false; // Переменная для отслеживания текущего состояния перехода
  
	// Устанавливаем класс активности на первый элемент .swiper__item
	swiperItems[0].classList.add('swiper__item--active');
  
	nextButton.addEventListener('click', () => {
	  if (!isTransitioning) {
		transitionSlide('next');
	  }
	});
  
	prevButton.addEventListener('click', () => {
	  if (!isTransitioning) {
		transitionSlide('prev');
	  }
	});
  
	document.addEventListener('click', (event) => {
	  const targetClassList = event.target.classList;
  
	  if (!targetClassList.contains('swiper-button-next') && !targetClassList.contains('swiper-button-prev')) {
		swiperItems.forEach(item => {
		  if (item.classList.contains('swiper__item--active')) {
			item.classList.add('swiper__item--active');
		  }
		});
	  }
	});
  
	function transitionSlide(direction) {
	  isTransitioning = true; // Устанавливаем флаг перехода
  
	  const currentActive = document.querySelector('.swiper__item--active');
	  currentActive.classList.remove('swiper__item--active');
  
	  let nextIndex, nextItem;
  
	  if (direction === 'next') {
		nextIndex = (Array.from(swiperItems).indexOf(currentActive) + 1) % swiperItems.length;
		nextItem = swiperItems[nextIndex];
	  } else if (direction === 'prev') {
		nextIndex = (Array.from(swiperItems).indexOf(currentActive) - 1 + swiperItems.length) % swiperItems.length;
		nextItem = swiperItems[nextIndex];
	  }
  
	  nextItem.classList.add('swiper__item--active');
  
	  setTimeout(() => {
		isTransitioning = false; // Снимаем флаг перехода после завершения анимации
	  }, 700); // Установите задержку на основе вашего времени анимации (в миллисекундах)
	}
  });

  // Код для кнопок слайдера
  document.addEventListener('DOMContentLoaded', () => {
	const nextButton = document.querySelector('.swiper-button-next');
	const prevButton = document.querySelector('.swiper-button-prev');
  
	nextButton.addEventListener('mouseenter', () => {
	  nextButton.classList.add('swiper-button--active');
	  prevButton.classList.remove('swiper-button--active');
	});
  
	prevButton.addEventListener('mouseenter', () => {
	  prevButton.classList.add('swiper-button--active');
	  nextButton.classList.remove('swiper-button--active');
	});
});

// код для меню
document.addEventListener('DOMContentLoaded', function () {
	// Получаем элементы по классам
	var hamburger = document.querySelector('.navHeader__hamburger');
	var menu = document.querySelector('.menu');
  
	// Обработчик события при клике на hamburger
	hamburger.addEventListener('click', function () {
	  // Добавляем/удаляем класс активности
	  menu.classList.toggle('menu--active');
	});
  
	// Обработчик события при клике в любую область документа
	document.addEventListener('click', function (event) {
	  // Проверяем, был ли клик вне элемента .menu или .hamburger
	  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
		// Убираем класс активности
		menu.classList.remove('menu--active');
	  }
	});
  });
  
  
  
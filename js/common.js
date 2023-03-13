$(function() {
	'use strict';
	new WOW().init();

	// Mobile menu

	const toggleMenu = event => {
        const target = event.target;
        let menuBtn = document.querySelector('.hamburger');
        let menu = document.querySelector('.header__menu');

        const showMenu = () => {
            menuBtn.classList.toggle('is-active');
            menu.classList.toggle('active');
        };

        if (target.closest('.hamburger')) {
            showMenu();
        } else if (!target.classList.contains('active') && !target.closest('.header__menu') && menuBtn.classList.contains('is-active')) {
            showMenu();
        } else if (target.classList.contains('anchor')) {
            showMenu();
        }
    
    };

    document.addEventListener('click', toggleMenu);

	// Reviews Tabs

	$('.reviews__nav > img').click(function(){
		const reviewID = $(this).data('revid');

		$('.reviews__nav > img').not(this).removeClass('active');
		$(this).addClass('active');

		$('.reviews__item').not(reviewID).removeClass('active');
		$(reviewID).addClass('active');
	});

	
	// anchor

	$('a.anchor').on('click', function (event) {
		event.preventDefault();
		let $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 57
		}, {
			duration: 1500,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		});
	});
	

});
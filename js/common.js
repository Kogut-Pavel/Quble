$(function() {
	'use strict';
	new WOW().init();

	// Mobile menu

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.header__menu').slideDown(300);
		}else{
			$('.header__menu').slideUp(300);
		}
	});

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
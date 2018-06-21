$(document).ready(function(){

	/*
	* Main slider init
	*/

	$('#main-slider').sliderPro({
		width: '100%',
		height: '100%',
		forceSize: 'fullWindow',
		arrows: false,
		buttons: false,
		waitForLayers: true,
		fade: true,
		autoplay: true,
		autoScaleLayers: false,
		slideDistance: 0,
		loop: false,
		smallSize: 567,
		mediumSize: 767,
		largeSize: 991,
		breakpoints: {
			1300: {
				height: 770,
				forceSize: 'none',
			},
			991: {
				height: 460,
				forceSize: 'none',
			},
			767: {
				height: 510,
				forceSize: 'none',
			},
			567: {
				height: 525,
				forceSize: 'none',
			}
		}
	});

	/*
	* Init single room slider
	*/
	$('#single-slider').sliderPro({
		width: '100%',
		height: 800,
		arrows: false,
		buttons: false,
		waitForLayers: true,
		fade: false,
		autoplay: false,
		autoScaleLayers: false,
		slideDistance: 0,
		loop: false,
		smallSize: 567,
		mediumSize: 767,
		largeSize: 991,
		breakpoints: {
			1399: {
				height: 575,
			},
			991: {
				height: 330,
			},
			767: {
				height: 305,
			},
			567: {
				height: 400,
			}
		}
	});

	// leading zero function 
	add_leading_zero = function(num){
		return ('0'+num).slice(-2);
	};
	// for each slider set total slides and curr slide index 
	$( ".slider-pro" ).each(function( index ) {

		if ( $(this).siblings('.slider-controls').length > 0 ) {

			// get all sliders
			var slider = $( this ).data( 'sliderPro' );
			// get total slides
			var countSlides = slider.getTotalSlides();
			// set default value
			$(this).siblings('.slider-controls').find( ".total" ).text( add_leading_zero(countSlides) );
			$(this).siblings('.slider-controls').find( ".curr" ).text( add_leading_zero(parseInt(slider.getSelectedSlide()) + 1) );
			// navigation buttons
			$(this).siblings('.slider-controls').find( ".control.next" ).on('click', function(){
				slider.nextSlide();
			});
			$(this).siblings('.slider-controls').find( ".control.prev" ).on('click', function(){
				slider.previousSlide();
			});
			// change current slide number
			slider.on( 'gotoSlide', function( event ) {
				$(this).siblings('.slider-controls').find( ".curr" ).text( add_leading_zero(event.index + 1) );
			});

		}

	});

	/*
	* Dropdown select lang
	*/
	(function () {
		var activeContainer = $(".mobile-lang > ul");
		$(".mobile-lang .curr").on("click", function () {
			activeContainer.addClass("open");
		});
		$(document).mouseup(function (e) {
			if (!activeContainer.is(e.target) && activeContainer.has(e.target).length === 0) {
				activeContainer.removeClass("open");
			}
		});
	}());

	/*
	* Change html fontszie for responsive blocks with rems
	*/
	function CheckWidth() {
		var fontSize = 16;
		var maxWidth = 1900;
		if ($(window).width() < 1900 && $(window).width() > 1399) {
			$('html').css('font-size', ($(window).width() / maxWidth * fontSize) + 'px');
		} else {
			fontSize = 16;
			$('html').css('font-size', fontSize + 'px');
		}
	}
	CheckWidth();
	$(window).resize(function () {
	   CheckWidth();

	   setPaddingInnerPage();
	});

	/*
	* Main slider init
	*/
	
	$('#rooms-slider').sliderPro({
		width: '100%',
		height: 'auto',
		arrows: false,
		buttons: false,
		fade: false,
		autoplay: false,
		autoScaleLayers: false,
		slideDistance: 0,
		loop: false,
		autoHeight: true,
	});
	var roomSlider = $('#rooms-slider').data( 'sliderPro' );
	$('.room-controls .next').on('click', function(){
		roomSlider.nextSlide();
	});
	$('.room-controls .prev').on('click', function(){
		roomSlider.previousSlide();
	});

	/*
	* Conference icons carousel
	*/
	$('.icon-carousel').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 567,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$('.carousel-section button').on('click', function(){
		$('.icon-carousel').slick('slickNext');
	});

	/*
	* Change togglebtn view on click
	*/ 

	$('.toggle-menu').on('click', function(){
		$(this).toggleClass('show');
		$('.bottom-area').toggleClass('menu_is_show');
	});

	/*
	* Check for recomended block in main navigation
	*/
	$('.menu-block > ul > li ul li').each(function(){
		if ( $(this).hasClass('recomended') ) {
			$(this).parent().addClass('has_recomended');
		}
	});

	/*
	* Toggle submenus
	*/
	$('.toggle-child').on('click', function(){
		$(this).toggleClass('toggled');
		$(this).siblings('ul').toggleClass('show');
	});

	/*
	* sticky header
	*/
	$(window).scroll(function(){
		var headerLine   = $('header').outerHeight(true),
			topPoint     = $(window).scrollTop();
		if ( $(window).width() > 767 && topPoint > headerLine ) {
			$('body').addClass('fixed-header');
		} else {
			$('body').removeClass('fixed-header');
		}

		setPaddingInnerPage();
	});

	/*
	* Fancybox init 
	*/
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
	});

	/*
	* 
	*/
	// padding top function for blog page with no slider
	function setPaddingInnerPage(){
		var scrollTop = $(window).scrollTop();
		var headHeight = $('.inner-page header').outerHeight(true);
		if ( !$('body').hasClass('fixed-header') ) {

			if ( $(window).width() > 767 ) {
				$('.inner-page .main-wrap').css({paddingTop: headHeight});
			} else {
				$('.inner-page .main-wrap').css({paddingTop: headHeight});
			}

		}

	}
	setPaddingInnerPage();
	/*
	* add class prev to previous element in breadcrumbs
	*/
	$('.breadcrumbs li:last').prev().addClass('prev');

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	/**
	 *
	 * ADD CLASS ON HOVER FOR RESTAURANT BLOCK
	 *
	 */
	$('.restaurant-content').hover(function(){
		$(this).parents('.restaurant').addClass('hovered');
	}, function(){
		$(this).parents('.restaurant').removeClass('hovered');
	});


	/*
	* Service list grid
	* create chunk function for wrap elems
	*/
	$.fn.chunk = function(size) {
		var arr = [];
		for (var i = 0; i < this.length; i += size) {
			arr.push(this.slice(i, i + size));
		}
		return this.pushStack(arr, "chunk", size);
	}
	/*
	* init function
	* wrap 3 elems to special-row
	*/
	function initWrapElems() {
		$(".services-catalog > .service").chunk(3).wrap('<div class="service-row" />');
	}
	// first init
	initWrapElems();

	/**
	 *
	 * Create update func when new elements loaded
	 *
	 */
	function updateWrapElems(){
		// get all rows length
		var lengRow = $('.service-row').length-1;
		// check for last row
		$('.service-row').each(function(index, item){

			if (index === lengRow) {
				// if children less then 3 rebuild this row 
				if ( $(this).children().length < 3 ) {

					$(this).find('.service').each(function(){
						$(this).addClass('unwrapped');
					});
					$('.unwrapped').unwrap();
					// init func
					initWrapElems();
					$('.service').each(function(){
						$(this).removeClass('unwrapped');
					});
				// else if children greater then 3 run init func
				} else {
					initWrapElems();
				}
			}
		});
	}

	/**
	 *
	 * unwrap function, unwrap all service who has parent service-row
	 *
	 */
	function unWrapElems() {
		if ( $('.service').parents(".service-row").length > 0 ) {
			$('.service-row .service').unwrap();
		}
	}
	// first init unwrap elems when window width less then 992
	if ( $(window).width() < 992 ) {
		unWrapElems();
	}
	// check what function call hen window width changed
	$(window).resize(function(){
		if ( $(window).width() < 992 ) {
			unWrapElems();
		} else {
			initWrapElems();
		}
	});

	$('.more-services').on('click', 'a', function(e){
		e.preventDefault();

		$('.service-row:first-child .service:first-child, .service-row:first-child .service:nth-child(2)').clone().appendTo('.services-catalog');

		// call if ajax success
		if ( $(window).width() > 991 ) {
			updateWrapElems();
		}
		// end ajax success block

	});
	/**
	 *
	 * SCROLL TO SECTIONS ON CONTACT PAGE
	 *
	 */
	$('.nav-tabs li').on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 50}, 500);
	});

});
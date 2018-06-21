$(document).ready(function () {

	/**
	 *
	 * INIT SPECIAL CAROUSEL
	 *
	 */
	$('.specials-carousel').on('init', function(event, slick){
        $(window).resize();
    });
	$('.specials-carousel').slick({
		infinite: true,
		speed: 300,
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        responsive: [{
          breakpoint: 567,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            variableWidth: false,
          }
        }]
	});
    
    $('.specials-carousel .sp-nav .prev').on('click', function(){
        $('.specials-carousel').slick('slickPrev');
    });
    $('.specials-carousel .sp-nav .next').on('click', function(){
        $('.specials-carousel').slick('slickNext');
    });

    /**
     *
     * INIT ADDITIONAL NAVIGATION
     *
     */
 	$('.additional-nav').on('init', function(event, slick){
        $(window).resize();
    });
    $('.additional-nav').slick({
		infinite: false,
		speed: 400,
        arrows: false,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        outerEdgeLimit: true,
        responsive: [{
          breakpoint: 767,
          settings: {
            variableWidth: false,
            slidesToShow: 1,
            adaptiveHeight: true
          }
        }]
	});

    /**
     *
     * HASH SLIDE NAVIGATION
     *
     */

 	// create flag 
    var $Additionalflag = false;

    // slide to additional element 
 	function slideToElement(nextAddId) {

 		if ( $Additionalflag ) {

 			var nextSlideAddId = $('[data-slideId="'+ nextAddId +'"]');

	 		if ( nextSlideAddId.length > 0 && $(window).width() > 991 ) {
				$('body,html').animate({
					scrollTop : nextSlideAddId.offset().top - 200
				}, 500);
			}

 		} else {
 			return false
 		}

 	};

 	// Change flat when click to navigate items
 	$('.additional-controls span').on('click', function(){
		$Additionalflag = true;
	});
    
    // call 
	$('.additional-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		slideToElement(nextSlide);
	});

	// ADD CLASS TO BODY IF ADDITIONAL MENU IS BEEN
	if ( $('.additional-menu').length > 0 ) {
		$('body').addClass('has-add-menu');
	}

	/**
	 *
	 * CREATE CUSTOM ADDITIONAL CONTROLS 
	 *
	 */
	
	$('.additional-menu .additional-controls .prev').on('click', function(){
        $('.additional-nav').slick('slickPrev');
        scrollToFirst ();
    });
    $('.additional-menu .additional-controls .next').on('click', function(){
        $('.additional-nav').slick('slickNext');
        scrollToFirst ();
    });
	function scrollToFirst () {
		var lengthSlide  = $(".additional-nav").slick("getSlick").slideCount;
		var currentSlide = $('.additional-nav').slick('slickCurrentSlide');

		if ( currentSlide == lengthSlide - 1 ) {
			$('.additional-nav').slick('slickGoTo', 0, true);
		}
		if ( currentSlide == 0 ) {
			$('.additional-nav').slick('slickGoTo', parseInt(lengthSlide - 1), true);
		}
	}

	/*
	 *  SHOW MORE LINK
	 */
	$('.show-more-link').on('click', function (e) {
		e.preventDefault();
		$('.more-content').slideDown(300, function() {
			$(this).siblings('a').fadeOut(300);
		});
	})

	/**
	 *
	 * INIT FULL PAGE VIDEO
	 *
	 */
	$('#video-slider').sliderPro({
		height: 695,
		width: '100%',
		forceSize: 'fullWindow',
		arrows: false,
		buttons: false,
		fade: false,
		loop: false,
		autoplay: false,
		fadeArrows: false,
		slideDistance: 0,
		touchSwipe: false,
		reachVideoAction: 'playVideo',
		endVideoAction: 'replayVideo',
		init: function () {
			$(window).resize();
        }
	});
	// Get the video
	var video = $('#video-slider .sp-video').get(0);
	// Pause and play the video
	function playVideoFunc() {
		if ( video.paused ) {
			video.play();
		} else {
			video.pause();
		}
	}
	$('.banner-textarea').on('click', function(){
		playVideoFunc();
	});

	/**
	 *
	 * SCROLL WHEN CLICK TO MOUSE
	 *
	 */
	$('.scroll-bottom .link').click(function() {
		$('body,html').animate({
			scrollTop : $('#special-section').offset().top - 95
		}, 500);
	});

	/**
	 *
	 * GET TODAY WEATHER
	 *
	 */
	function getCurDate() {
		var monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
		  "июля", "августа", "сентября", "октября", "ноября", "декабря"
		];
		var now        = new Date();
		var thisMonth  = monthNames[now.getMonth()];
		var curDate    = now.getDate();
		$('.weather_date').html(curDate + ' ' + thisMonth + ',');
	}

	// GET WEATHER DATA
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather',
		data: {
			format: 'json',
			id: 491422,
			appid: 'd6a0aa2116999382f87c2b3e6b028de1',
			units: 'metric',
			lang: 'ru'
		},
		dataType: 'jsonp',
		type: 'GET',
		error: function(xhr) {
			console.log('error');
		},
		success: function(data) {
			$('.planet-ico').hide();
			getCurDate();
			var icon = '<i class="owf owf-'+data['weather'][0]['id']+'"></i>',
				temp = parseInt(data['main']['temp'])+'<span class="deg">&deg;</span><span class="c-deg">C</span>',
				desc = data['weather'][0]['description'];
			// build weather widget
			$('.weather_icon').html(icon);
			$('.weather_temp').html(temp);
			$('.weather_desc').html(desc);
		}
	});

	//  check width for section fontsize
	var fontSize = 16;
	var maxWidth = 1900;

	function CheckWidth() {
		var fontSize = 16;
		var maxWidth = 1900;

		if ($(window).width() < 1900 && $(window).width() > 991) {
			$('html').css('font-size', ($(window).width() / maxWidth * fontSize) + 'px');
		} else {
			fontSize = 16;
			$('html').css('font-size', fontSize + 'px');
		}
	}
	CheckWidth();
	$(window).resize(function () {
		CheckWidth();
	});

	/**
	 *
	 * FIXED HEADER
	 *
	 */
	$(window).scroll(function(){
		topPoint     = $(window).scrollTop();
		if( topPoint > 0 ) {
			$('body').addClass('fixed-header');
		} else {
			$('body').removeClass('fixed-header');
		}
	});

	/**
	 *
	 * SHOW/HIDE MAIN NAV
	 *
	 */
	$('.show-menu').on('click', function(){
		$(this).parents('li').siblings('li').find('ul').removeClass('show');
		$(this).parents('li').siblings('li').find('.show-menu').removeClass('highlight');
		$(this).toggleClass('highlight');
		$(this).parent().siblings('ul').toggleClass('show');
	});

	$('.btn-menu').on('click', function(){
		$('.main-navigation').addClass('show');
	});

	$('.close-mobile-menu').on('click', function(){
		$('.main-navigation').removeClass('show');
		$('.has-dropdown ul').removeClass('show');
		$('.show-menu').removeClass('highlight');
	});

	/**
	 *
	 * INIT ROOMS SLIDER ON MAIN
	 *
	 */
	$('#rooms-slider').sliderPro({
		height: 790,
		width: '100%',
		arrows: false,
		buttons: false,
		fade: true,
		loop: false,
		autoplay: false,
		fadeArrows: false,
		slideDistance: 0,
		breakpoints: {
			1399: {
				height: 560
			},
			991: {
				height: 470
			},
			767: {
				height: 350
			},
			567: {
				height: 230
			}
		}
	});
	$('#rooms-slider .next').on('click', function(){
		$('#rooms-slider').sliderPro('nextSlide');
	});
	$('#rooms-slider .prev').on('click', function(){
		$('#rooms-slider').sliderPro('previousSlide');
	});

	/**
	 *
	 * ROOMS CARD CAROUSEL
	 *
	 */
	$('#room-carousel').sliderPro({
		height: 734,
		width: '100%',
		arrows: false,
		buttons: false,
		fade: false,
		loop: false,
		autoplay: false,
		fadeArrows: false,
		slideDistance: 0,
		breakpoints: {
			1399: {
				height: 540
			},
			991: {
				height: 470
			},
			767: {
				height: 350
			},
			567: {
				height: 230
			}
		}
	});
	
	$('.room-carousel .sp-nav .next').on('click', function(){
		$('#room-carousel').sliderPro('nextSlide');
	});
	$('.room-carousel .sp-nav .prev').on('click', function(){
		$('#room-carousel').sliderPro('previousSlide');
	});
	

    // MAKING SPECIFICALLY PLACEHOLDERS
    $('.placeholder').on('mousedown touchstart', function(e) {
        e.preventDefault();
        $(this).siblings('input, textarea').focus();
    });
    $('input, textarea').on('focus', function() {
        $(this).siblings('.placeholder').hide();
    });
    $('input, textarea').on('blur', function() {
        var $this = $(this);
        if ($this.val().length == 0) {
            $(this).siblings('.placeholder').show();
        }
    });
    // Fired this again if AJAX
    $('input, textarea').each(function(){
        var $this = $(this);
        if ($this.val().length !== 0) {
            $(this).siblings('.placeholder').hide();
        }
    });

	/*
	* add class prev to previous element in breadcrumbs
	*/
	$('.breadcrumbs li:last').prev().addClass('prev');

	/**
	 *
	 * SHOW HIDDEN TEXT
	 *
	 */
	$('.text-more a').on('click', function(e){
		e.preventDefault();
		$(this).parent().parent().find('.hidden-text').slideToggle(300);
	});

	/**
	 *
	 * TOOGLE ACTIVE CLASS ON CONTACTS TABS
	 *
	 */
 	$('.map-area [data-toggle=tab]').click(function(e){
	    if($(this).parent().hasClass('active')){

	    e.preventDefault();
	    e.stopPropagation();

	        $(this).parent().removeClass('active');

	        $($(this).attr("href")).removeClass('active');
	        $($(this).attr("href")).removeClass('in');

	        $(this).attr("aria-expanded", false);
	    }
	})
	
	/**
	 *
	 * CUSTOM SCROLLBAR FOR MENU
	 *
	 */
	$('.main-navigation li.has-dropdown > ul').mCustomScrollbar({
		axis:"y",
		autoDraggerLength: false
	});

	/**
	 *
	 * CUSTOM SCROLL FOR TABLE
	 *
	 */
	if ( $('.responsive-table').length > 0 ) {
		$('.responsive-table').mCustomScrollbar({
			axis:"x",
			autoDraggerLength: false
		});
	}

});


// GOOGLE MAPS INIT
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 43.606182, lng: 39.707530},
		zoom: 17,
		disableDefaultUI: true
	});
}
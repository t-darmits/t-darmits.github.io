$(document).ready(function(){
	// fixed menus
	function setMenuPosition(){
		if ($(window).width() > 991) {
			var topPoint   = $(window).scrollTop();

			if (topPoint > 120) {
				$('body').addClass("fixed-header");
			} else {
				$('body.fixed-header').removeClass('fixed-header');
			}
		} else {
			$('body').removeClass('fixed-header');
		}
	};

	setMenuPosition();

	$(window).scroll(function () {
		setMenuPosition();
		setMainPadding();
	});

	$(window).resize(function (){
		setMainPadding();
	});

	function setMainPadding(){
		if (!$('body').hasClass('fixed-header')) {
			var mH = $('header').outerHeight(true);
			$('.wrapp-container').css({paddingTop: mH});
		}
	}
	setMainPadding();

	$('.toggle-btn button').on('click', function(){
		$(this).toggleClass('open');
		$('.bottom-header').toggleClass('show');
	});

	// main big slider
	$('#main-slider').sliderPro({
		height: 755,
		arrows: true,
		buttons: false,
		fade: false,
		width: "100%",
		fadeArrows: false,
		loop: false,
		slideAnimationDuration: 800,
		autoplay: false,
		breakpoints: {
			1199: {
				height: 620,
			},
			767: {
				height: 500,
				buttons: true,
			},
			567: {
				height: 370,
				buttons: true,
			}
		}
	});

	// add span block to main arrows navigation
	$('.main-slider .sp-next-arrow').append('<span><b>Следующий</b></span>');
	$('.main-slider .sp-previous-arrow').append('<span><b>Предыдущий</b></span>');

	$( '#main-slider' ).on( 'gotoSlide', function( event ) {
		getPreviewNavImage ();
	})

	getPreviewNavImage ();

	function getPreviewNavImage () {
		var mainSlider 	 = $('.main-slider'),
			selectedItem = mainSlider.find('.sp-selected'),
			nextItem  	 = mainSlider.find('.sp-selected').next('.sp-slide'),
			prevItem	 = mainSlider.find('.sp-selected').prev('.sp-slide'),
			firstItem 	 = mainSlider.find('.sp-slide:first-child'),
			lastItem 	 = mainSlider.find('.sp-slide:last-child'),
			prevPreview,
			nextPreview;

		// next preview thumb
		if ( selectedItem.is(':last-child') ) {
			nextPreview = firstItem.find('img').attr('src');
		} else {
			nextPreview = nextItem.find('img').attr('src');
		}
		$('.sp-next-arrow').find('span').css({backgroundImage: 'url('+ nextPreview +')'});

		// prev previews thumb
		if ( selectedItem.is(':first-child') ) {
			prevPreview = lastItem.find('img').attr('src');
		} else {
			prevPreview = prevItem.find('img').attr('src');
		}
		$('.sp-previous-arrow').find('span').css({backgroundImage: 'url('+ prevPreview +')'});
	}

	// space slider with thumb
	$(".space-slider").sliderPro({
		height: 575,
		arrows: true,
		buttons: false,
		fade: false,
		width: "100%",
		fadeArrows: false,
		loop: false,
		slideAnimationDuration: 800,
		autoplay: false,
		thumbnailWidth: 210,
		thumbnailHeight: 110,
		breakpoints: {
			1199: {
				height: 420,
			},
			767: {
				height: 400
			},
			567: {
				height: 270
			}
		}
	});


	// TABS
	$('.tab').on('click', function () {
		$(this).siblings('.tab').removeClass('active');
		$(this).addClass('active');
		var tabId = $(this).attr('data-href');
		$(this).parent().siblings('.tabs-content').find('.tab-block').removeClass('active');
		$('#'+tabId).addClass('active');
		$('.space-slider').sliderPro('resize');
	});

});

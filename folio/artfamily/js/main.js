$(document).ready(function(){

	// Init main slider
	$('#main-slider').sliderPro({
		height: '100%',
		arrows: true,
		buttons: false,
		fade: true,
		width: '100%',
		forceSize: 'fullWindow',
		loop: false,
		autoplayDelay: 4000,
		autoplay: false,
		fadeArrows: false,
		slideDistance: 0,
		breakpoints: {
			991: {
				height: 695,
				loop: false,
				forceSize: 'none',
			},
			767: {
				height: 570,
				forceSize: 'none',
				arrows: false,
			},
			567: {
				height: 490,
				forceSize: 'none',
				arrows: false,
			}
		}
	});

	// Init features carousel
	$('.features-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$('.features-nav button').on('click', function(){
		$('.features-carousel').slick('slickNext');
	});

	// events carousel
	$('.events-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					variableWidth: true
				}
			},
			{
				breakpoint: 568,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					variableWidth: true
				}
			}
		]
	});
	$('.events-nav .next').on('click', function(){
		$('.events-carousel').slick('slickNext');
	});
	$('.events-nav .prev').on('click', function(){
		$('.events-carousel').slick('slickPrev');
	});

	// show/hide booking-form
	$('.show-booking').on('click', function(e){
		e.preventDefault();
		$('.booking-form').addClass('show');
	});
	$('.close-booking').on('click', function(){
		$('.booking-form').removeClass('show');
	});

	// show mobile city block
	$('.show-cities').on('click', function(e){
		e.preventDefault();
		$('.get-mobile-city').addClass('opened');
	});
	$('.close-cities').on('click', function(){
		$('.get-mobile-city').removeClass('opened');
	});
	// custom select control
	setTimeout(function() {
	  $('.custom-select').styler({
		selectSmartPositioning: false
	  });
	}, 100);

	// Inner slider
	$('#inner-slider').sliderPro({
		height: 485,
		arrows: false,
		buttons: false,
		fade: true,
		width: '100%',
		loop: false,
		autoplayDelay: 4000,
		autoplay: false,
		fadeArrows: false,
		slideDistance: 0,
		breakpoints: {
			991: {
				height: 390
			},
			767: {
				height: 350,
				arrows: false
			},
			567: {
				height: 315,
				arrows: false
			}
		}
	});

	// Room Carousel
	$('#room-carousel').sliderPro({
		height: 620,
		arrows: false,
		buttons: false,
		fade: false,
		width: 560,
		loop: false,
		autoplayDelay: 4000,
		autoplay: false,
		fadeArrows: false,
		slideDistance: 0,
		breakpoints: {
			1199: {
				height: 500,
				width: 475
			},
			991: {
				height: 375,
				width: 340
			},
			767: {
				height: 615,
				width: '100%'
			},
			567: {
				height: 240,
				width: '100%'
			}
		}
	});
	$('.room-nav > .next').on('click', function(){
		$( '#room-carousel' ).sliderPro( 'nextSlide' );
	});

	$('.room-nav > .prev').on('click', function(){
		$( '#room-carousel' ).sliderPro( 'previousSlide' );
	});

	// Show room text on room-card
	$('.show-room-text').on('click', function(e){
		e.preventDefault();
		$(this).parent().hide();
		$('.room-text .hidden').show();
	});

	// conference hall slider
	$('#conference-slider').sliderPro({
		height: '100%',
		arrows: true,
		buttons: false,
		fade: true,
		width: '100%',
		forceSize: 'fullWindow',
		loop: false,
		autoplayDelay: 4000,
		autoplay: false,
		fadeArrows: false,
		slideDistance: 0,
		breakpoints: {
			991: {
				height: 360,
				loop: false,
				forceSize: 'none',
			},
			767: {
				height: 330,
				forceSize: 'none',
				arrows: false,
			},
			567: {
				height: 290,
				forceSize: 'none',
				arrows: false,
			}
		}
	});


	// conference slider on business page
	$('#conference-carousel').sliderPro({
		height: 470,
		arrows: false,
		buttons: false,
		fade: false,
		width: 460,
		loop: false,
		autoplayDelay: 4000,
		autoplay: false,
		fadeArrows: false,
		slideDistance: 0,
		breakpoints: {
			991: {
				height: 370,
				width: 360
			},
			767: {
				height: 470,
				width: 460
			},
			567: {
				height: 290,
				width: 280
			}
		}
	});
	$('.conference-nav > .next').on('click', function(){
		$( '#conference-carousel' ).sliderPro( 'nextSlide' );
	});
	$('.conference-nav > .prev').on('click', function(){
		$( '#conference-carousel' ).sliderPro( 'previousSlide' );
	});

	// Cloned all navigation and create one big mobile menu
	function clonedNavigation(firstMenu, secondMenu) {

		// create list item for cloned login link
		$('<li />', {
			'class': 'log-in'
		}).appendTo('#headMenu');

		// clone login link and appent to headMenu
		$('.entrance').find('a').clone().appendTo('.log-in');

		var mBtnClose = '<button class="close-mobile"><svg class="i-svg icon-close"><use xlink:href="#icon-close"></use></svg></button>';

		$('body').append($('<div>', {class: 'mobile-menu'}));

		$('.mobile-menu').append(mBtnClose);
		$('.close-mobile').bind('click', function(){
			$('.mobile-menu').removeClass('opened');
		});

		if ( $('#'+firstMenu).length > 0 ) {
			$('#'+firstMenu).clone().removeAttr('id class').addClass('nav-links').appendTo('.mobile-menu');
		}
		if ( $('#'+secondMenu).length > 0 ) {
			$('#'+secondMenu).clone().removeAttr('id class').addClass('nav-links').appendTo('.mobile-menu');
		}
	}
	setTimeout(clonedNavigation, 1000, 'headMenu', 'bottomMenu');

	// show mobile menu
	$('.toggle-menu').on('click', function(){
		$('.mobile-menu').addClass('opened');
	});

	// cities mobile navigation
	$(function() {
		$('<select />', {'class':'custom-select'}).appendTo('.get-city');
		$("<option />", {
			'selected': 'selected',
			'value'   : '',
			'text'    : 'Выбрать другой город'
		}).appendTo('.get-city select');

		// update custom select after create
		setTimeout(function() {
			$('.custom-select').styler({
				selectSmartPositioning: false
			});
		}, 100);

		// get all cities
		$('.bottom-navigation > li').each(function(i){
			// get link href and text
			var cityLink = $(this).children('a:first'),
				mainHref = cityLink.attr('href'),
				mainCity = cityLink.text();
			// set option val, text and id for categories
			$('<option />', {
					'value'   : mainHref,
					'text'    : mainCity,
					'data-id'	  : 'cat' + i
			}).appendTo('.get-city select');
			// create hotel's block with id's
			$('<div />', {
				'class': 'cat',
				'id'   : 'cat' + i
			}).appendTo('.cat-city');
			// cloned hotel's categories to hotel's block
			$(this).children('ul').clone().appendTo( $('#cat' + i) );
		});

		// show first categories hotels
		$('#cat0').addClass('active');

		// create first city link
		var firstText = $('.get-city').find('option:nth-child(2)').text(),
			firstLink = $('.get-city').find('option:nth-child(2)').val();
		$('<a />', {
			'href' : firstLink,
			'text' : firstText
		}).appendTo('.first-city');

		// change hotels after change hotels list select
		$(".get-city select").change(function() {
			var selectedEl 		 = $(this).find("option:selected"),
				selectedElElVal  = selectedEl.val(),
				selectedElElText = selectedEl.text(),
				selectedElData   = selectedEl.attr('data-id');
			
			// change first link 
			$('.first-city a').text(selectedElElText);
			$('.first-city a').attr('href',selectedElElVal);
			
			// change hotels list
			$('.cat').removeClass('active');
			$('#'+selectedElData).addClass('active');
		});
	});

	// hide datepciker when scroll
	var headDatepickerOne = $('#firstDate').datepicker().data('datepicker');
	var headDatepickerTwo = $('#secondDate').datepicker().data('datepicker');

	// sticky header
	$(window).scroll(function(){
		var headerLine   = $('header').outerHeight(true),
			topPoint     = $(window).scrollTop();
		if( topPoint > headerLine ) {
			$('body').addClass('fixed-header');
		} else {
			$('body').removeClass('fixed-header');
		}
		// hide datepicker
		if (headDatepickerOne || headDatepickerTwo) {
			headDatepickerTwo.hide();
			headDatepickerOne.hide();
		}
		// setmap position
		setMapPosition();
		// set blog padding-top
		setPaddingBlog();
	});

	// map section position
	function setMapPosition() {
		if ( $('.map-section').length > 0 && !$('body').hasClass('fixed-header') ) {

			var mapTopPos 	   = $('.inner-nav').offset().top,
				mapBottomPos   = $('.hotel-address').offset().top,
				mapHeight      = $('.map-section').outerHeight(true),
				innerNavHeight = $('.inner-navigation').outerHeight(true);

			if ($(window).width() > 991 ) {
				$('.map-section').css({top: mapTopPos});
				$('.info-content').css({height: mapHeight - innerNavHeight - 50});
			} else {
				$('.map-section').css({top: mapBottomPos});
				$('.info-content').css({height: mapHeight - 50});
			}

		} else {
			// $('.map-section').removeClass('showing');
		}
	}

	// Show map on click link
	$('.show-map, .close-map').on('click', function(e){
		e.preventDefault();
		$('.map-section').toggleClass('showing');
		$('.hotel-address .right-block').toggleClass('showing');
	});

	//  hide map on link inside main container
	$('.m-close').on('click', function(e){
		e.preventDefault();
		$('.map-section').toggleClass('showing');
		$('.hotel-address .right-block').toggleClass('showing');
	});

	//  chnage map content
	$('.distance-block .item').on('click', function(){
		// get map height and inner nav height
		 var mapHeight      = $('.map-section').outerHeight(true),
			 innerNavHeight = $('.inner-navigation').outerHeight(true);
		// remove active calss from item
		$(this).siblings('.item').removeClass('active');
		$(this).addClass('active');
		// set infowindow height on click
		if ( $(window).width() > 991 ) {
			$('.info-content').css({height: mapHeight - innerNavHeight - 50});
		} else {
			$('.info-content').css({height: mapHeight - 50});
		}
		// get data attribute
		var infoId = $(this).attr('data-info');
		// show info content
		$('.how-to-section .info-content').removeClass('active');
		$('#'+infoId).addClass('active');
	});

	//  close info content after click close icon
	$('.head-content .i-svg').on('click', function(){
		$(this).parents('.info-content').removeClass('active');
		$('.distance-block .item').removeClass('active');
	});

	// close info content after click outside div
	$(document).click(function(event) {
	    if(!$(event.target).closest('.how-to-section .info-content').length && !$(event.target).closest('.distance-block .item').length) {
	        if($('.how-to-section .info-content').is(":visible")) {
	            $('.how-to-section .info-content').removeClass('active');
	            $('.distance-block .item').removeClass('active');
	        }
	    }        
	});

	//  set map position on document ready
	setMapPosition();

	$(window).resize(function(){
		// set map position on resize
		setMapPosition();

		// set blog padding-top
		setPaddingBlog();
	});

	// custom scrollbar
	if ($('.mcs-horizontal').length > 0) {

		$('.mcs-horizontal').mCustomScrollbar({
			axis:"x",
			autoDraggerLength: false
		});
		
	}

	// padding top function for blog page with no slider
	function setPaddingBlog(){

		var headHeight = $('.blog header').outerHeight(true),
			bookBlock  = $('.blog .booking-block').outerHeight(true);

		if ( !$('body').hasClass('fixed-header') ) {

			if ( $(window).width() > 767 ) {
				$('body.blog').css({paddingTop: headHeight});
			} else {
				$('body.blog').css({paddingTop: headHeight + bookBlock});
			}

		}
	}
	setPaddingBlog();


	//Validate form "Send_News"
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $( 'form[name="SIMPLE_FORM_1"]' ).submit(function( event ) {

        $("#valid").text("");
        var email = $("#email").val();
        if (validateEmail(email)) {
            $("#valid").css("display", "none");
            $("#email").removeClass("err");
            return;
        }else{
            $("#valid").text("Заполните поле");
            $("#valid").css("display", "block");
            $("#email").addClass("err");
            event.preventDefault();
		}
    });

    $( 'form[name="SIMPLE_FORM_2"]' ).submit(function( event ) {

        $("#valid").text("");
        var email = $("#email").val();
        if (validateEmail(email)) {
            $("#valid").css("display", "none");
            $("#email").removeClass("err");
            return;
        }else{
            $("#valid").text("Fill in the field");
            $("#valid").css("display", "block");
            $("#email").addClass("err");
            event.preventDefault();
        }
    });

    // show more text on blog page
    $('.blog-post .more').on('click', 'a', function(e){
    	e.preventDefault();
    	$(this).parents('.blog-post').find('.hidden').slideToggle(300);
    });

    // table column section 
    (function () {
        var $table = $(".table-section"),
            $cell = $table.find(".table__td");
        $cell.on("mouseout", function () {
            $table.find(".table__td_selected").removeClass("table__td_selected");
        });
        $cell.on("mouseover", function () {
            var $this = $(this),
                $tds = $this.parent().find(".table__td"),
                $columnNumber = $.inArray(this, $tds);
            if($columnNumber !== 0) {
                $table.find(".table__td:nth-child(" + ($columnNumber + 1) + ")").addClass("table__td_selected");
            }
        });
    })();

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
	*  Init tabcollapse script for login/registr form
	*/
	$('#login-modal').on('shown.bs.modal', function () {
		$('#tabs-collapse').tabCollapse({
			tabsClass: 'hidden-xs-tabs',
			accordionClass: 'visible-xs-tabs'
		});
		$(window).resize();
	});

	/*
	*  Function for disable toggle collapsing
	*/
	function disableAccordionToggle(){
		$('.panel-title > a').click(function(e){
			target = $(this).attr('href');
			if ($(target).hasClass('in')) {
				e.preventDefault();
				e.stopPropagation();
			}
		});
	}
	/*
	*  when accordion is shown call disableAccordionToggle function
	*/
	$('#tabs-collapse').on("shown-accordion.bs.tabcollapse", function (e) {
		disableAccordionToggle();
	});

	/*
	*  show forget pass modal after hide login modal
	*/
	$('.show-forget-modal').on('click', function(e){

		e.preventDefault();
		$('#login-modal').modal('hide');

		$('#login-modal').one('hidden.bs.modal', function(){
			$('#forget-modal').modal('show');
		});

	});

});
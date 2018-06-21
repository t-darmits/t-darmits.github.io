var lang = "ru";

var DomEvents = function() {};
DomEvents.prototype.init  = function(){
	this.initReserveFormEvents();
};
DomEvents.prototype.initReserveFormEvents  = function() {

	$(document).on('click', '.open-reserve-start-date', function() {
		$(this).find('.booking-start-date').datepicker('show');
	});

	$(document).on('click', '.open-reserve-end-date', function() {
		$(this).find('.booking-end-date').datepicker('show');
	});

};

var AppEvents = {
	INIT_DATE_PICKER: 'init-date-picker',
	INIT_DOM_EVENTS: 'init-dom-events',
};

var App = function() {};

App.prototype.init = function() {
	$(document).trigger(AppEvents.INIT_DATE_PICKER);
	$(document).trigger(AppEvents.INIT_DOM_EVENTS);
};


$(function(){

	$(document).on(AppEvents.INIT_DATE_PICKER, function(){
		datePicker.init();
	});

	$(document).on(AppEvents.INIT_DOM_EVENTS, function(){
		domEvents.init();
	});

	app.init();

});

var app        = new App();
var datePicker = new DatePicker();
var domEvents  = new DomEvents();
$(document).ready(function(){
	// navigation
	$('.toggle-menu').on('click', function(){
		$(this).toggleClass('toggled');
		var nav = $('.nav-collapse');
		if (nav.hasClass('show')) {
			nav.removeClass('show');
		} else {
			nav.addClass('show');
		}
	});

	// main-slider
	$( '#main-slider' ).sliderPro({
		width: "100%",
		height: 700,
		loop: false,
		arrows: true,
		waitForLayers: true,
		autoplay: false,
		autoScaleLayers: false,
		fade: false,
		autoplay: false,
		fadeArrows: false,
		dots: false,
		buttons: false,
		breakpoints: {
			991: {
				height: 470,
			},
			767: {
				height: 420,
			},
			567: {
				height: 340,
				buttons: true
			}
		},
		slideDistance: 0,
	});

	// init tour gallery slider
	$('#tour-slider').sliderPro({
		width: "100%",
		height: 306,
		loop: false,
		autoplay: false,
		fade: true,
		touchSwipe: false,
		buttons: false,
		breakpoints: {
			991: {
				height: 266,
			},
			767: {
				height: 390,
			},
			567: {
				height: 210,
			}
		},
	});
	$.each($('.photo-list > li'), function (index, item) {
		$(item).attr('data-slide', index + 1);
	});

	var t_slider = $( '#tour-slider' ).data( 'sliderPro' );
	$('.show_tour').on('click', function(){
		var slide_id = $(this).data('slide');
		t_slider.gotoSlide(slide_id);
		$('.main-frame').fadeIn();
	});

	$('.main-frame').on('click', function(){
		t_slider.gotoSlide(0);
		$(this).fadeOut();
	});

	// guest controls
		// show/ close guest-panel

	$(document).on('click', '.open-select-guest-panel', function() {
		$(this).find('.select-guest-panel').css({display:'block'})
		$('.reserve-guest').addClass('open');
    });

	$(document).click(function(e) {
        var container = $('.open-select-guest-panel');
        if(!container.is(e.target) && container.has(e.target).length === 0){
            $('.select-guest-panel').css({display:'none'});
            $('.reserve-guest').removeClass('open');
        }
    });

    // add guest

    var inputVal;
    var showResult = $('.guest-count');
    var resultSum = 0;
    var resultNew;

    $('.plus').on('click',function(){
		var $qty=$(this).siblings('.num-block').find('.number-filter');
		var currentVal = parseInt($qty.text());
		
		if (!isNaN(currentVal)) {
		    $qty.text(currentVal + 1);

		    inputVal = parseInt($qty.text());

		    $(this).siblings('input[type=hidden]').val(inputVal);

			resultSum += 1;
		}

		showResult.text(resultSum);

	});
	$('.minus').on('click',function(){
		var $qty=$(this).siblings('.num-block').find('.number-filter');
		var currentVal = parseInt($qty.text());

		if (!isNaN(currentVal) && currentVal > 0) {

		    $qty.text(currentVal - 1);

		    inputVal = parseInt($qty.text());

		    $(this).siblings('input[type=hidden]').val(inputVal);

			resultSum -= 1;
		}
		
		showResult.text(resultSum);

	});

	// init special-offers slider
	$( '#special-slider' ).sliderPro({
		arrows: true,
		buttons: false,
		width: '100%',
		loop: false,
		autoplay: false,
		autoHeight: true,
		fadeArrows: false,
		slideDistance: 10,
	});

	// scroll to id
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 500);
			return false;
		  }
		}
	  });
	});
});

ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){     
    myMap = new ymaps.Map ("map", {
        center: [55.76, 37.64],
        zoom: 15,
        controls: []
    });

    myPlacemark = new ymaps.Placemark([55.76, 37.64], { hintContent: 'Москва!', balloonContent: 'Столица России' });
	myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');
}
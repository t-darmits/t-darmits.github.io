// change menu
$(document).ready(function(){
	var flag = false;
	$('.navbar-toggle').on('click', function(){
		if( flag == true ){
			$(this).children('span').text('Open menu');
			$(this).children('i').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
			flag = false;
		} else {
			$(this).children('span').text('Close menu');
			$(this).children('i').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
			flag = true;
		}
	});
// show search
		var next_move = "expand";
		$(".show-search").click(function() {
			var css = {};
			if (next_move == "expand"){
				css = {
					width: '100%',
				};
				next_move = "shrink";
			} else {
				css = {
					width: '0%',
				};
				next_move = "expand";
			}
			$('.showme').animate(css, 400);
		});
		var $window = $(window);
		function checkWidth() {
			var windowsize = $window.width();
				if (windowsize > 767) {
					$('.showme').css('width', '140px');
					$('.list-filter .aside-filter').addClass('add-top');
					$('.aside-filter').removeClass('slide');
				} else {
					$('.showme').css('width', '0%');
					// $('.list-filter .aside-filter').removeClass('add-top');
				}
		}
		checkWidth();
		$(window).resize(checkWidth);
// form styler
	(function($) {
		$(function() {
			$('select.js-slct').styler({
				onSelectOpened: function() {
					$(this).find('.jq-selectbox__trigger-arrow').addClass('up');
			},
			onSelectClosed: function() {
				$(this).find('.jq-selectbox__trigger-arrow').removeClass('up');
			}
			});
			$("input[type='checkbox'].c_check").styler();
		});
	})(jQuery);

// date picker
	// $('[data-toggle="datepicker"]').datepicker({
	// 	autohide: true
	// });

// Open advanced search
	$(".check-title > a").click(function(event){
		event.preventDefault();
		$(".check-block").slideToggle(200);
	});
// barratin
	$(function() {
		$('.star-bars').barrating({
			theme: 'fontawesome-stars'
		});
	});
// show mobile filter
	$( "#open_filter" ).click(function() {
		$('.aside-filter').toggleClass('slide');
	});
// range slider
	var $range = $(".js-range-slider"),
	    $inputFrom = $(".js-input-from"),
	    $inputTo = $(".js-input-to"),
	    instance,
	    min = 65,
	    max = 850;

	$range.ionRangeSlider({
	    type: "double",
	    min: min,
	    max: max,
	    from: 300,
	    to: 600,
	    onStart: updateInputs,
	    onChange: updateInputs,
	    onFinish: updateInputs
	});

	function updateInputs (data) {
	    $inputFrom.prop("value", data.from);
	    $inputTo.prop("value", data.to);
	}

	instance = $range.data("ionRangeSlider");
// open aside filter Preferences
	$(".p-title").click(function(){
		$(".pref-block").slideToggle(200);
		if( flag == true ){
			$(this).children('i').removeClass('fa-angle-up').addClass('fa-angle-down');
			flag = false;
		} else {
			$(this).children('i').removeClass('fa-angle-down').addClass('fa-angle-up');
			flag = true;
		}
	});
// Show/hide aside filter

	var $filterOverlay = $('.overlay');
	var $filterOpen    = $('.toggle_filter');
	var $filter        = $('.aside-filter');

	$filterOpen.on('click', function(){
		if(!$($filterOverlay).is(':visible')) {
			$filterOverlay.stop().fadeTo(300,1);
		} else {
			$filterOverlay.stop().fadeTo(300,0, function(){ $(this).hide(); });
		}
		$filter.toggleClass('slide');
		$('.list-filter').toggleClass('list-fixed');
	});

	$filterOverlay.click(function(){
		$filterOverlay.stop().fadeTo(300,0, function(){ $(this).hide(); });
		$filter.toggleClass('slide');
		$('.list-filter').toggleClass('list-fixed');
	});
// enable carousel touchpad
	$(".carousel-inner").swipe( {
		swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).parent().carousel('next');
		},
		swipeRight: function() {
			$(this).parent().carousel('prev');
		},
		threshold:75
	});
// show img-block in hotels list
	var $popup        = $('.popup');
	var $b_hover      = $('.hotels > li');
	$b_hover.on('mouseenter', function(){
		$(this).find($popup).stop().fadeTo(300,1);
	});
	$b_hover.on('mouseleave', function(){
		$(this).find($popup).stop().fadeTo(300,0, function(){ $(this).hide(); });
	});
// custom scrollbar
	$(".popup").mCustomScrollbar({
		axis:"x",
		autoExpandScrollbar:true,
		advanced:{autoExpandHorizontalScroll:true}
	});
// fixed sidebar
	function fixed_bar() {
		if (!!$('.aside-filter').offset()) {
			var stickyTop = $('.aside-filter').offset().top;
			var windowsize = $window.width();
			// console.log(windowsize);
			$(window).scroll(function(){
			  var windowTop = $(window).scrollTop();
			  if (windowsize > 767) {
				if (stickyTop < windowTop){
					$('body.fixed').addClass('fixed_aside');
				} else {
			        $('body.fixed').removeClass('fixed_aside');
			  	}
			  } else {
			        $('body.fixed').removeClass('fixed_aside');
			  }
			});
		}
	}
	fixed_bar();
	$(window).resize(fixed_bar);
});
// Focus input (color:icons)
$('.form-control').on('focus', function(){
	$(this).parent().next('.btn-search').find('.fa').css('color', '#000');
}).blur(function(){
		$(this).parent().next('.btn-search').find('.fa').css('color', '#fff');
});

// Slider
jQuery(function(){
	jQuery('#camera_wrap').camera({
		height: '600px',
		loader: false,
		pagination: false,
		thumbnails: false,
		hover: true,
		opacityOnGrid: false,
		playPause: false,
		time: 4000,
		opacityOnGrid: false,
	});
});

$(function(){
	$('.camera_next > span').addClass("arrows right-arr");
	$('.camera_prev > span').addClass("arrows left-arr");
})

// owl carousel
$(document).ready(function() {
	var owl = $("#owl");
	owl.owlCarousel({
		itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 3],
			[1100, 3],
			[1200, 4]
		],
	});
	$("#next").click(function(){
		owl.trigger('owl.next');
	})
	$("#prev").click(function(){
		owl.trigger('owl.prev');
	})


	var owl2 = $("#owl2");
	owl2.owlCarousel({
		itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 2],
			[1100, 3],
			[1200, 3]
		],
		scrollPerPage: true,
		slideSpeed: 800
	});

	$(".spec-right").click(function(){
		owl2.trigger('owl.next');
	})
	$(".spec-left").click(function(){
		owl2.trigger('owl.prev');
	})
});


// Parallax
$(function(){
	$.stellar({
		horizontalScrolling: false,
		responsive: true,
	});
}); 

// Scroll
$(document).ready(
	function() {
		$("html").niceScroll({
			cursoropacitymin: 1,
			cursorcolor: '#212121',
			cursorwidth: '12px',
			cursorborder: 'solid 1px #3F3F3F',
			zindex: '9999',
			cursorborderradius: '0',
			smoothscroll: true,
		});
	}
);

// go to news
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top-1
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});
});

// apear content
	wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       150,
		mobile: false
	});
	wow.init();

// panel heading
$('.heading').on('click', function(){
	$(this).find('span.contrl').toggleClass('drop-angle');
})
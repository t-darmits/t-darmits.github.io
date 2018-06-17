// Parallax on head
var scene = document.getElementById('parallax');
var parallax = new Parallax(scene);

// Dropdown animation
$('.dropdown').on('show.bs.dropdown', function (e) {
	$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});
$('.dropdown').on('hide.bs.dropdown', function (e) {
	$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

// Fo down button on head
$(".go-down").click(function(event) {
	event.preventDefault();
	$("html, body").animate({ scrollTop: $(".why-we").offset().top }, 500);
	return true;
});

// Custom scrollbar on page
$(document).ready(
	function() {
		$("html").niceScroll({
			cursoropacitymin: 1,
			cursorwidth: 10,
			cursorborderradius: 3
		});
	}
);

// Fancybox gallery
$(document).ready(function() {
	$(".fancybox").fancybox({
		padding : [0, 50, 0, 50],
		maxWidth : 960,
		scrolling : 'no',
	});
});

// Owl carousel for reviews
$(document).ready(function() {
	$("#owl-demo").owlCarousel({
		navigation : true,
		slideSpeed : 500,
		paginationSpeed : 500,
		singleItem:true
	});
});

// Count to numbers
(function($){
	$.fn.viewportChecker = function(useroptions){
		var options = {
			classToAdd: 'count-to',
			offset: 100,
			callbackFunction: function(elem){}
		};
		$.extend(options, useroptions);

		var $elem = this,
			windowHeight = $(window).height();

		this.checkElements = function(){
			var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
				viewportTop = $(scrollElem).scrollTop(),
				viewportBottom = (viewportTop + windowHeight);

			$elem.each(function(){
				var $obj = $(this);
				if ($obj.hasClass(options.classToAdd)){
					return;
				}

				var elemTop = Math.round( $obj.offset().top ) + options.offset,
					elemBottom = elemTop + ($obj.height());

				if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){
					$obj.addClass(options.classToAdd);
					$('.count-to').countTo();

					options.callbackFunction($obj);
				}
			});
		};

		$(window).scroll(this.checkElements);
		this.checkElements();

		$(window).resize(function(e){
			windowHeight = e.currentTarget.innerHeight;
		});
	};
})(jQuery);

jQuery(document).ready(function() {
	jQuery('.number').viewportChecker({
		offset: 50
	});
});

// wow animation
wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       150,
		mobile:       true,
		live:         true
	}
)
wow.init();
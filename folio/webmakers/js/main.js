// Owl carousel
	$(document).ready(function() {
	 
	var owl = $("#owl-demo");
	 
	owl.owlCarousel({
	items : 4,
	itemsDesktop : [1200,4],
	itemsDesktopSmall : [1199,3],
	itemsTablet: [767,2],
	itemsMobile :[540,1]
	});
	 
});

// Slide navigation
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top-75
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});
});

// get file value
$('#open-dialog').change(function() {
	var value = ($(this).val()).replace("C:\\fakepath\\", "");; 
	$('.area-for-value').html(value);
});

// get multiple values
$("input#mltp-dialog").change(function() {
	var ele = document.getElementById($(this).attr('id'));
	var result = ele.files;
	for(var x = 0;x< result.length;x++){
	 var fle = result[x];
		$(".output-value ul").append("<li>" + fle.name + "</li>");
	}
});
$(document).ready(function(){

	// calendar
	$('#Schedule_PurchaseDate').fdatepicker({format: "dd-mm-yyyy"});

	// custom select box 
	(function($) {
		$(function() {
			$('.custom_select').styler();
		});
	})(jQuery);

	// custom file browse
	(function($) {
		$(function() {
			$('.custom_f').styler({
				fileBrowse: 'SELECT FILE',
				filePlaceholder: ' '
			});
		});
	})(jQuery);

	// change menu-button title

	$('.navbar-toggle').on('click', function(){
		if ($(this).hasClass('collapsed')) {
			$(this).text('CLOSE');
		} else {
			$(this).text('MENU');
		}
	})

	// masonry grid

	$('.grid').masonry({
		// options
		itemSelector: 'li',
	});


	// jquery-steps
    $("#msform").steps({
        headerTag: ".header-step",
        bodyTag: "fieldset",
        transitionEffect: 1,
        autoFocus: true,
        enableKeyNavigation: false,
        onFinished: function (event, currentIndex) {
    	   var form = $(this);
	        form.submit();
    	}
    });

	// add row
	$(".add-content > a").click(function(event) {
		event.preventDefault();
		$(this).parent().siblings('.cp-row').append($('#rowToClone').html());
		$('.custom_select').styler();
	});

	// calendar
	$('#Schedule_PurchaseDate').fdatepicker({format: "dd-mm-yyyy"});

	// custom scroll
	var myCS = $('.c_scroll').customScroll({
		prefix: 'custom-scroll_',
	});

	$('.step-block').click(function(){
		var myCS2 = $('.c_scroll2').customScroll({
			prefix: 'custom-scroll_2_',
		});
	})

	// canvas

	zkSignature.capture('canvas_veec_customer');
	zkSignature.capture('canvas_veec_installer');
	zkSignature.capture('canvas_fit_customer');
	zkSignature.capture('canvas_fit_installer');

	// sliding to form
	$(".actions a").click(function() {
		$('html,body').animate({
			scrollTop: $("#msform .content").offset().top},
	 	'slow');
	});
});
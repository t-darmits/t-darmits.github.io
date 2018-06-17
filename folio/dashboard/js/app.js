$(document).ready(function(){
	// filtering table
	$('.c-table').filterForTable({
		searchSelector: '#search_table',
	});

	$('#search_table').on('focus', function(){
		if (this.value.length >= 1) {
			this.value = '';
		}
		setTimeout(function() {
			$('.c-table tbody > tr').show();
			$('#filterForTableEmptyRow').hide();
		}, 200)
	})

	$('.controls li a').click(function(){
		$('#search_table').val('');
		setTimeout(function() {
			$('.c-table tbody > tr').show();
			$('#filterForTableEmptyRow').hide();
		}, 200)
	})

	// burger menu
	$('.sidebar-title .fa-bars').on('click', function(){
		$('.main-area').toggleClass('burger');
	});

	// custom selecbox, file, number
	(function($) {
		$(function() {
			$('select, input[type="file"], input[type="number"]').styler();
		});
	})(jQuery);

	// fancybox, zoom img
	$(".fancybox").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
		autoCenter: true,
		closeBtn: false,
		helpers : {
			overlay : {
				css : {
					'background' : 'rgba(0, 0, 0, 0.3)'
				}
			}
		}
	});

	// add active class to samples boxes
	$('.box-samples li').on('click', function() {
		$(this).parent().find('li').removeClass('active');
		$(this).addClass('active');
	});
});
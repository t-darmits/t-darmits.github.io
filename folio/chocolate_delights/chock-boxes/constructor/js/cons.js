$(document).ready(function(){
	// add hover class to boxed list
	$('.boxes > li').hover(function(){
		$(this).addClass('hovered');
	}, function(){
		$(this).removeClass('hovered');
	});

	// add text to boxes
	var $v_set = $("#v_set");
	$("#v_get").keyup(function() {
		$v_set.val( this.value );
	});

	// custom selecbox, file, number
	(function($) {
		$(function() {
			$('select.cons, input[type="file"].cons, input[type="number"].cons').styler();
		});
	})(jQuery);

	// constructor change content
	$('.controls li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.controls li').removeClass('current');
		$('.control-content').fadeOut(500);
		$(this).addClass('current');
		$("#"+tab_id).fadeIn(500);
	});

	// upload img in block
	$(function() {
		$('.box-image').imagepreview({
			input: '#f_opened',
			preview: '.box-image',
		 });
	});

	// custom scrollbar
	(function($){
		$(window).on("load",function(){
			$(".candies-box").mCustomScrollbar({
				axis:"y",
				theme:"dark",
				mouseWheel:{ deltaFactor: 70 }
			});
		});
	})(jQuery);

	// number filter
	$("input[type='number'].cons").keydown(function (e) {
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
		 // Allow: Ctrl+A
		(e.keyCode == 65 && e.ctrlKey === true) ||
		 // Allow: Ctrl+C
		(e.keyCode == 67 && e.ctrlKey === true) ||
		 // Allow: Ctrl+X
		(e.keyCode == 88 && e.ctrlKey === true) ||
		 // Allow: home, end, left, right
		(e.keyCode >= 35 && e.keyCode <= 39)) {
		return;
	}
	if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		e.preventDefault();
	}
	});

	// info block add active class
	$('.info-block').click(function(){
		$(this).toggleClass('active');
		var $this = $(this);
		$(".info-block").not($this).removeClass('active');
	})


	$(document).mouseup(function (e) {
		var container = $(".info-block");

		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.removeClass('active');
		}
	});

	// back to candies panel
	$('.go-back a').click(function(event){
		event.preventDefault();
		var tab_id = $(this).attr('data-tab');
		$('.controls li').removeClass('current');
		$('.control-content').fadeOut(500);
		$('.candie-tab').addClass('current');
		$("#"+tab_id).fadeIn(500);
	});
});
// main scroll bar
	$(document).ready(
		function() {
			$("html").niceScroll({
				scrollspeed: 60,
				cursoropacitymin: 1,
				cursorwidth: 10,
				cursorborder: "1px solid #000",
				mousescrollstep: 20,
				cursorcolor: "#000",
			});
		}
	);
	$('.cat-link').on('click', function(){
		$(".rails-div").niceScroll({
			cursoropacitymin: 1,
			cursorborder: "1px solid #313131",
			cursorcolor: "#313131",
			cursorminheight: 50
		});
	})
// End main scroll bar

// Calendar
	$(document).ready(function () {
		$("#my-calendar").zabuto_calendar({
			today: true,
			cell_border: true,
			show_previous: false,
			show_next:false
		}); 
	});
// End Calendar

// Submenu
	$(document).ready(function(){
		$(".drop").hover(
			function(){
			$('.submenu').slideDown(200);
		},
			function(){
				$('.submenu').hide();
			});
	});
// End Submenu

// // submenu level two
// 	$(document).ready(function(){
// 		$(".drop-level").hover(
// 			function(){
// 			$('.submenu-level').fadeIn(300);
// 		},
// 			function(){
// 				$('.submenu-level').hide();
// 			});
// 	});
// // End submenu level two

// // submenu level three
// 	$(document).ready(function(){
// 		$(".drop-level-two").hover(
// 			function(){
// 			$('.submenu-level-two').fadeIn(300);
// 		},
// 			function(){
// 				$('.submenu-level-two').hide();
// 			});
// 	});
// // End submenu level three

// Open close menu
	$('.see-more').click(function(){
		if($('.cng').text() == 'Open menu'){
			$('.cng').text('Close menu');
		} else {
			$('.cng').text('Open menu');
		}
		$('.see-more i').toggleClass('drop-angle');
	});
// End Open close menu

// Show categories in submenu
	$(document).ready(function() {
		$('.submenu ul li a').hover(function() {
			var ourClass = $(this).data('filter');
				$('.submenu-news').children('div:not(.' + ourClass + ')').hide(0,function(){

				$('.submenu-news').children('div.' + ourClass).fadeIn(400);
				});
			return false;
		});
	});
// End Show categories in submenu

// Rating bar
	var $me = $( '.star-ctr' );

	var $bg, $fg, step, wd, cc,
	sw, fw, cs, cw, ini;

	$bg = $me.children( 'ul' );
	$fg = $bg.clone().addClass( 'star-fg' ).css( 'width', 0 ).appendTo( $me );
	$bg.addClass( 'star-bg' );

	function initialize() {
		ini = true;
		// How many rating elements
		cc = $bg.children().length;
		steps = Math.floor( +( $me.attr( 'data-steps' ) || 0 ) );
		// Total width of the bar
		wd = $bg.width();
		// Width of one rating element; assumes all are the
		// same width;  Used if step > cc
		sw = $bg.children().first().outerWidth( true );
		// Width of each star (including spacing)
		fw = wd / cc;
		if ( steps > 0 ) {
		// Width of each sub-step
		cw = sw / steps;
		}
	}
	$me.mousemove(function( e ) {
		if ( !ini ) initialize();
		var dt, nm, nw, ns, ow, vl;
		// Where is the mouse relative to the left
		// side of the bar?
		ow = dt = e.pageX - $me.offset().left;
		vl = Math.round( ow / wd * cc * 10 ) / 10;
		// steps == 0 means continous mode, so no need to
		// waste time finding a snapping point
		if ( steps > 0 ) {
		// Find the per element step
		vl = nm = Math.floor( dt / fw );
		ow = nw = $fg.children().eq( nm ).position().left;
		// Now find any sub-step within an element
		// when the number of steps is larger
		// than the number of elements
		ns = Math.round( ( dt - nw ) / cw );
		ow = nw + ns * cw;
		// The fractional part of the rating
		vl += Math.round( ( ns / steps ) * 10 ) / 10;
		}
		$me.attr( 'data-value', vl );
		$fg.css( 'width', Math.round( ow )+'px' );
	}).click(function() {
	// Grab value
	alert( $( this ).attr( 'data-value' ) );
	return false;
	});
// End Rating bar

// Toggle arrow in panel-heading
	$('.panel-heading').on('click', function(){
		$(this).find('span').toggleClass('drop-angle');
	})
// End Toggle arrow in panel-heading

// Tooltips
	$('.social-count li a').tooltip();
// End tooltips

// Search archieve bar in footer
	$(document).ready(function() {
		$('.cat-link').click(function(event) {
			event.preventDefault();
				if($('.sub-search').is(":visible"))
					$('.sub-search').slideUp(200);
				else
					$('.sub-search').slideDown(200);
			});
			$('.sub-search ul li a').click(function(event) {
				event.preventDefault();
				$('#small-search').val($(this).attr('rel'));
				$('.value-search').html($(this).html());
				$('.sub-search').slideUp(200);
			});
		});
// End Search archieve bar in footer
// search
	var next_move = "expand";
	$(document).ready(function (){
		$(".search-button").click(function(event)
		{
			event.preventDefault();
			var css = {};
			if (next_move == "expand"){
				css = {
					width: '97%',
				};
				$('.input-block').css('display', 'block');
				next_move = "shrink";
			} else {
				css = {
					width: '35px',
				};
				$('.input-block').css('display', 'none');
				next_move = "expand";
			}
			$('.search-form').animate(css, 400);
		});
	});
// End search

//height content
	$(document).ready(function(){
		var ht = $('.aside').height();
		$('.align-aside').css('min-height', ht);
	})
	function resizeScreen(){
		var ht = $('.aside').height();
		$('.align-aside').css('min-height', ht);
	}
	$(window).resize(function() {
		resizeScreen();
	});
// End height content

;
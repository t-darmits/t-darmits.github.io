// Scroll
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
// End Scroll
// Owl carousel
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	$('.owl-clients-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots: true,
		responsive:{
			0:{
				items:1
			},
			710:{
				items:1
			},
			800:{
				items:2
			},
			1130:{
				items:3
			}
		}
	})
	$('.banner-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots: true,
		responsive:{
			0:{
				items:1
			},
			710:{
				items:2
			},
			860:{
				items:3
			},
			1130:{
				items:4
			}
		}
	})
// End Owl carousel
// Camera slider
	jQuery(function(){
		jQuery('#camera_wrap').camera({
			height: '50%',
			loader: false,
			pagination: false,
			thumbnails: false,
			hover: true,
			opacityOnGrid: false,
			playPause: false,
			time: 4000,
			opacityOnGrid: false,
			minHeight: '360px'
		});
	});
// End Camera slider
// Paralax
		if ($.fn.parallax){
			$('.ready-info, .clients').parallax("50%", 0.1,false);
		}
// End Paralax
// Other
	$(function(){
		$('.camera_next > span').addClass("glyphicon glyphicon-chevron-right");
		$('.camera_prev > span').addClass("glyphicon glyphicon-chevron-left");

		$('.owl-next').append("<span class='fa fa-angle-right'></span>");
		$('.owl-prev').append("<span class='fa fa-angle-left'></span>");

		$('.litebox-next').append("<span class='fa fa-angle-right'></span>");
		$('.litebox-prev').append("<span class='fa fa-angle-left'></span>");
	})
// End Other
// Portfolio filter
	$(window).load(function(){
		$portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});
		$portfolio_selectors = $('.portfolio-filter >li>a');
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active-p');
			$(this).addClass('active-p');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
});
// End Portfolio filter
// go to top
var top_show = 4000;
  var delay = 1000;
  $(document).ready(function() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
// End go to top
// slide navigation
$('a.slide').on('click',function () {
    elementClick = $(this).attr("href");
    $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
    destination = $(elementClick).offset().top-30;
    if($.browser.safari || $.browser.chrome){
        $('body').animate( { scrollTop: destination }, 1100 );
    }else{
        $('html').animate( { scrollTop: destination }, 1100 );
    }
    return false;
});
	var mainbottom = $('.about').offset().top + $('.about').height();
	$(window).on('scroll',function(){
		stop = Math.round($(window).scrollTop());
		if (stop > mainbottom) {
			$('header').addClass('past-main');
		} else {
			$('header').removeClass('past-main');
		}
	});
// end menu color
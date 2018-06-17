// animation promo
$(document).ready(function(){
	var $window = $(window);
	function checkWidth() {
		var windowsize = $window.width();
			if (windowsize > 991) {
				$(".scroll-to").hover(function () {
					$('.bg_video').addClass('transform');
					$('.main-content').addClass('show-some');
				}, function () {
					$('.bg_video').removeClass('transform');
					$('.main-content').removeClass('show-some');
				});
				// btn hover show custom text
				$('.active-shop').hover(function(){
					$('.open-shop').removeClass('show').addClass('hide').siblings('span').removeClass('hide').addClass('show').children('i').addClass('animate');
				}, function () {
					$('.open-shop').removeClass('hide').addClass('show').siblings('span').removeClass('show').addClass('hide').children('i').removeClass('animate');
				});

				$('.open-shop').hover(function(){
					$('.active-shop').removeClass('show').addClass('hide').siblings('span').removeClass('hide').addClass('show').children('i').addClass('animate');
				}, function () {
					$('.active-shop').removeClass('hide').addClass('show').siblings('span').removeClass('show').addClass('hide').children('i').removeClass('animate');
				});
			}
			if (windowsize > 767) {
				// animate search
				var end_transition = "transitionend webkitTransitionEnd oTransitionEnd";
				$('.search > input[type=text]').click(function(){
					$(this).parents('.form-search').find('.search').addClass('animate');
					$('.help_control').css('display', 'none');
				});
				$('.close-c').click(function(){
					$(this).parents('.form-search').find('.search').removeClass('animate').find('input[type=text]').val('');
					$('.search').one(end_transition, function () {
						$('.help_control').css('display', 'inline-block');
					});
				})
				$('.filter').removeClass('slide-filter');

				$('.open-filter').removeClass('rotate-arr');
				$('.open-filter > span').text('Открыть фильтр');
			}
			if (windowsize < 768) {
				$('.search > input[type=text]').focus(function(){
					$(this).parents('.form-search').find('.search').addClass('transformed');
				}).blur(function(){
					$(this).parents('.form-search').find('.search').removeClass('transformed');
				});
			}
	}
	checkWidth();
	$(window).resize(checkWidth);

// OPEN activation modal after click buttons on promo
	var act_modal = $('[data-remodal-id=active-modal]').remodal();
	$("a.scroll-to").click(function (event){
		event.preventDefault();
		$('.main-content').addClass('show-top');
		$('.promo').addClass('scale-down');
		setTimeout(function(){
			$('.promo').css('display', 'none');
			act_modal.open();
		}, 1000);
	});

// burger menu
	$('#custom').iptOffCanvas({
		baseClass: 'offcanvas',
		type: 'right',
		single: true,
		// closeOnClickOutside: true,
	});

	$('#m-help').iptOffCanvas({
		baseClass: 'offcanvas',
		type: 'top',
		single: true,
	});

	var $menuOverlay = $('#over_1');
	var $menuOverlay_2 = $('#over_2');

	$('a*[data-offcanvas-open="custom"]').click(function(){
		$menuOverlay.css('display', 'block');
	});

	$menuOverlay.click(function(){
		$(this).css('display', 'none');
	});

	$('a*[data-offcanvas-open="m-help"]').click(function(){
		$menuOverlay_2.css('display', 'block');
	});

	$menuOverlay_2.click(function(){
		$(this).css('display', 'none');
	});

	$('a*[data-offcanvas-close="m-help"]').click(function(){
		$menuOverlay_2.css('display', 'none');
	});

// video control
	var vid = document.getElementById("bgvid");
	var pauseButton = document.getElementById("control-btn");

	vid.addEventListener('ended', function()
	{
		vid.pause();
	}); 

	pauseButton.addEventListener("click", function() {
		if (vid.paused) {
			vid.play();
			$('#control-btn').removeClass('play').addClass('pause');
		} else {
			vid.pause();
			$('#control-btn').removeClass('pause').addClass('play');
		}
	})

// MOBILE MENU
	$("#mobile_menu").mmenu({
		 // Options
	}, {
		clone: true
	});
	var API = $("#mm-mobile_menu").data( "mmenu" );

	$(".open_mobile").click(function() {
		API.open();
	});
// MAIN SLIDER
	$('.item-wrapp').slick({
		arrows: false,
		slidesToShow: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					variableWidth: false,
				}
			}
		]
	});
// BRAND SLIDER
	$('.brand-wrapp').slick({
		arrows: false,
		slidesToShow: 7,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$('.brand-left').click(function(){
		$('.brand-wrapp').slick('slickNext');
	});
// PRODUCTS SLIDER
	$('.popular-wrapp').slick({
		arrows: false,
		slidesToShow: 5,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.popular-wrapp').slick('slickFilter','.filter-actually');
	var filtered = false;

	$('.filter-products').on('click', function(){
		var filtername = $(this).parent('li').attr('id');
		$(this).addClass('active');
		$(this).parent('li').siblings().children('button').removeClass('active');
		if (filtered === false) {
			$('.popular-wrapp').slick('slickUnfilter');
			$('.popular-wrapp').slick('slickFilter','.filter-' + filtername);
			$('.popular-wrapp').slick('slickGoTo', 0);
			filtered = true;
		} else {
			$('.popular-wrapp').slick('slickUnfilter');
			$('.popular-wrapp').slick('slickFilter', '.filter-' + filtername);
			$('.popular-wrapp').slick('slickGoTo', 0);
			filtered = false;
		}
	});
	$('.popular-right').click(function(){
		$('.popular-wrapp').slick('slickPrev');
	});
// show first level_3 menu
	$('#mobile_menu .category-menu > li').hover(function(){
		$(this).addClass('hovered');
		$(this).find('.level_1 > li:first-child').addClass('show-first');
	}, function(){
		$(this).removeClass('hovered');
	});
	$('.level_1 li').hover(function(){
		$(this).siblings().removeClass('show-first');
	});
// custom Scrollbar
	$('#scrollbar').customScroll({
		horizontal: false
	});
	$('.custom_scroll').customScroll({
		horizontal: false,
		prefix: 'area-scroll_',
	});
// Show another register blog 
	$('.new-register').click(function(event){
		event.preventDefault();
		$('.another-register').slideToggle();

		$('.remodal-wrapper').animate({
			scrollTop: $(".another-register").offset().top
		}, 500);
		return false;
	})

	$(document).on('closed', '.enter-modal', function (e) {
		$('.another-register').slideToggle();
	});

// dropdown filter

	$('.line-block').click(function(event){
		event.stopPropagation();
		var $div = $(this).next('.drop-area');
		$(".drop-area").not($div).hide();
		if ($div.is(":visible")) {
			$div.hide()
		} else {
			$div.show();
		}
		 $('.custom_scroll').customScroll();
	});

	$(document).click(function (e) {
		var container = $(".drop-area");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.hide();
		}
	});

	$(".aply").click(function(event){
		event.preventDefault();
		var searchIDs = $(this).parent('.drop-area').find('input:checkbox:checked').map(function(){
			return $(this).val();
		}).get().join(", ");
		$(this).parent('.drop-area').hide().siblings('.line-block').removeClass('simple').addClass('active').find('.text-line input').val(searchIDs);
	});

	$('.remove-ico').click(function(event){
		event.stopPropagation();
		$(this).parent('.line-block').removeClass('active').addClass('simple').siblings('.drop-area').find('input[type="checkbox"], input[type="radio"]').removeAttr('checked');
		$(this).parent('.line-block').find('input[type="text"]').val('');
	});

	// $('.drop-area a').click(function(event){
	// 	event.preventDefault();
	// 	var a_text = $(this).text();
	// 	$(this).parents('.drop-area').siblings('.line-block').removeClass('simple').addClass('active').find('.text-line input').val(a_text);
	// });

	$('.drop-area input[type="radio"]').click(function(){
		var radio_text = $(this).val();
		$(this).parents('.drop-area').hide().siblings('.line-block').removeClass('simple').addClass('active').find('.text-line input').val(radio_text);
	});
// open close filter 
	$('.open-filter').click(function(){
		$(this).toggleClass('rotate-arr');
		if ($(this).find('span').text() === 'Открыть фильтр') {
			$(this).find('span').text('Закрыть фильтр');
		} else {
			$(this).find('span').text('Открыть фильтр');
		}
		$('.filter').toggleClass('slide-filter');
	});
// scroll to top
	$('.custom-scroll_inner').scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrolltoTop').fadeIn();
			// show filter when scrolltop > 100
			$('.filter').addClass('show-filter');;
		} else {
			$('.scrolltoTop').fadeOut();
			$('.filter').removeClass('show-filter')
		}
	});

	//Click event to scroll to top
	$('.scrolltoTop').click(function(){
		$('.custom-scroll_inner').animate({scrollTop : 0},400);
		return false;
	});
// custom tabs
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
// faq menu change content
	$('ul.faq-tabs li a').click(function(event){
		event.preventDefault();
		var tab_id = $(this).attr('data-faq');
		$('ul.faq-tabs li a').removeClass('active');
		$('.faq-block').removeClass('current');
		$(this).addClass('active');
		$("#"+tab_id).addClass('current');
	});

	$('ul.foot-faq_links li a').click(function(event){
		event.preventDefault();
		var tab_id = $(this).attr('data-faq');
		$('.faq-block').removeClass('current');
		$("#"+tab_id).addClass('current');
	});

// img gallery
	$(".fancybox").fancybox({
		helpers : {
			overlay : {
				css : {
					'background' : 'rgba(43, 46, 56, 0.9)'
				}
			},
			title: {
				type: 'inside',
				position: 'top'
			}
		},
		beforeShow : function() {
			var alt = this.element.find('img').attr('alt');
			this.inner.find('img').attr('alt', alt);
			this.title = alt;
		},
		tpl: {
			closeBtn : '<button class="fancybox-close"><i class="icon i-close"></i></button>',
		},
		nextEffect: 'fade',
		prevEffect: 'fade'
	});
// change img content
	$('.previews li').click(function(){
		var tab_id = $(this).attr('data-slide');
		$('.previews li').removeClass('current');
		$('.slide-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
// input number validation
	$(".number-filter").keydown(function (e) {
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
	$('.plus').on('click',function(){
		var $qty=$(this).siblings('.num-block').find('.number-filter');
		var currentVal = parseInt($qty.val());
		if (!isNaN(currentVal)) {
		    $qty.val(currentVal + 1);
		}
	});
	$('.minus').on('click',function(){
		var $qty=$(this).siblings('.num-block').find('.number-filter');
		var currentVal = parseInt($qty.val());
		if (!isNaN(currentVal) && currentVal > 1) {
		    $qty.val(currentVal - 1);
		}
	});
// checkout order in cart 
	$('#checkout').text('Оформить заказ').removeClass('active');
	$('#checkout').on('click', function(){
		$(this).parent().siblings('.remodal-content').find('.locker').toggleClass('active');
		if ($(this).text() === 'Оформить заказ') {
			$(this).text('Редактировать заказ').toggleClass('active');
		} else {
			$(this).text('Оформить заказ').toggleClass('active');
		}
		$(this).parent().siblings('.order-step').slideToggle();

		$('.remodal-wrapper').animate({
			scrollTop: $("#order").offset().top
		}, 500);
		return false;
	});
	$('#checkout.active').on('click', function(){
		$('.remodal-wrapper').animate({
			scrollTop: $(".cart-modal").offset().top
		}, 500);
		return false;
	})
// telephone mask 
	$('.tel').keydown(function (e) {
		var key = e.charCode || e.keyCode || 0;
		$phone = $(this);
		// Auto-format- do not expose the mask as the user begins to type
		if (key !== 8 && key !== 9) {
			if ($phone.val().length === 4) {
				$phone.val($phone.val() + ')');
			}
			if ($phone.val().length === 5) {
				$phone.val($phone.val() + ' ');
			}			
			if ($phone.val().length === 9) {
				$phone.val($phone.val() + '-');
			}
		}
		return (key == 8 || 
				key == 9 ||
				key == 46 ||
				(key >= 48 && key <= 57) ||
				(key >= 96 && key <= 105));	
	}).bind('focus click', function () {
		$phone = $(this);
		
		if ($phone.val().length === 0) {
			$phone.val('(');
		}
		else {
			var val = $phone.val();
			$phone.val('').val(val); // Ensure cursor remains at the end
		}
	}).blur(function () {
		$phone = $(this);
		
		if ($phone.val() === '(') {
			$phone.val('');
		}
	});

// show zoom in faq
	$('.show-zoom').on('click', function(){
		$(this).addClass('hide');
		$(this).siblings('.faq-zoom').addClass('show');
		$(this).parent('.faq-show').addClass('hide');
	})
// hide map info
	$('.hide-button').on('click', function(){
		$(this).siblings('.map-text, .map-logo').toggle();
		$(this).parent('.map-info').toggleClass('changed-height');
		$(this).toggleClass('rt-arr');
		if ($(this).find('span').text() === 'Свернуть') {
			$(this).find('span').text('Показать');
		} else {
			$(this).find('span').text('Свернуть');
		}
	});
// help modification popup block 
	$('.mod-butt > span').on('click', function(){
		$(this).siblings('.popup-mod').toggleClass('show');
	});
	$('.popup-close').on('click', function(){
		$(this).parent('.popup-mod').toggleClass('show');
	});
// check block comment textarea in cart
	if ($('.block-comment > textarea').val().length < 1) {
		$(this).css({'background':'url("../img/comment-bg.png") no-repeat center center'});
	}
	$('.block-comment > textarea').focus(function () {
		$(this).css({'background':'#fff'});
	}).blur(function(){
		if ($.trim($(this).val()).length > 1) {
			$(this).css({'background':'#fff'});
		} else {
			$(this).css({'background':'url("img/comment-bg.png") no-repeat center center'});
		}
	});
// autoplay main video
	vid.play();
});
// init google maps


var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.443350, lng: 30.538328},
		zoom: 18,
		mapTypeControl: false,
		disableDefaultUI: true
	});
	var iconBase = 'img/maps-pointer.png';
	var marker = new google.maps.Marker({
		position: {lat: 50.443350, lng: 30.538328},
		map: map,
		icon: iconBase
	});
}
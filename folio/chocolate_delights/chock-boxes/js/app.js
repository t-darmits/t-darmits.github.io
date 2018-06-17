$(document).ready(function(){

	function checkWidth() {
		var width = $(window).width();
		if (width >= 768 ) {
			// affix navigation
			$('.navigation').affix({
				offset: {
					top: 500
				}
			});
		}
	}
	checkWidth();
	$(window).resize(checkWidth);

	$('[data-toggle=dropdown]').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
	});

	// box slider init
	$('.box-slider').slick({
		infinite: true,
		slidesToShow: 5,
		centerMode: true,
		// variableWidth: true,
		arrows: false,
		draggable: false,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					draggable: true
				}
			}
		]
	});

	$('.box-left').click(function(){
		$('.box-slider').slick('slickPrev');
	});

	$('.box-right').click(function(){
		$('.box-slider').slick('slickNext');
	});

	// offers for events slider
	$('.offers-slider').slick({
		infinite: true,
		slidesToShow: 2,
		centerMode: false,
		arrows: false,
		draggable: true,
		responsive: [
			{
				breakpoint: 1199,
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
				breakpoint: 381,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.off-left').click(function(){
		$('.offers-slider').slick('slickPrev');
	});

	$('.off-right').click(function(){
		$('.offers-slider').slick('slickNext');
	});

	// starr bar rating
	$(function() {
		var currentRating = $('.starr_bar').data('current-rating');
		$('.starr_bar').barrating({
			theme: 'fontawesome-stars-o',
			initialRating: currentRating,
		});
	});

	// custom selectbox
	(function($) {
		$('.c_select').styler();
		if (typeof WebFont != 'undefined') {
		WebFontConfig = {
			custom: {
				families: ['Open Sans']
			},
			active: function() {
				$('.c_select').trigger('refresh');
			}
		};
			WebFont.load(WebFontConfig);
		}
	})(jQuery);

	// get last child 
	$('#list_c > li').slice(-4).addClass('last-items ls');
	$('.view-last-items > a').click(function(event) {
		event.preventDefault();
		$('.ls').removeClass('last-items');
		$(this).hide();
	});

	// fix bug with showing modals

	$(document).on('hidden.bs.modal', '.modal', function () {
		$('.modal:visible').length && $(document.body).addClass('modal-open');
	});
	
	$('.modal').on('hidden.bs.modal', function (e) {
		$('body').removeAttr("style");
	})

	setTimeout(function() {
		$('#subscribe_modal').modal('show');
	}, 3000);

	setTimeout(function() {
		$('.message-block').show();
		document.getElementById('xyz').play();
	}, 6000);

	setTimeout(function() {
		$('.did_block').toggleClass('show');
	}, 10000);

	$('#close_did').on('click', function() {
		$('.did_block').toggleClass('show');
	});

	$('.message-block').on('click', function() {
		$('.take-discount').show();
	});

	$('#close_box').on('click', function() {
		$('.take-discount').hide();
	})

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	// copy discount code
	document.getElementById("copyButton").addEventListener("click", function() {
	    copyToClipboard(document.getElementById("copyTarget"));
	});

	function copyToClipboard(elem) {
		  // create hidden text element, if it doesn't already exist
	    var targetId = "_hiddenCopyText_";
	    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
	    var origSelectionStart, origSelectionEnd;
	    if (isInput) {
	        // can just use the original source element for the selection and copy
	        target = elem;
	        origSelectionStart = elem.selectionStart;
	        origSelectionEnd = elem.selectionEnd;
	    } else {
	        // must use a temporary form element for the selection and copy
	        target = document.getElementById(targetId);
	        if (!target) {
	            var target = document.createElement("textarea");
	            target.style.position = "absolute";
	            target.style.left = "-9999px";
	            target.style.top = "0";
	            target.id = targetId;
	            document.body.appendChild(target);
	        }
	        target.textContent = elem.textContent;
	    }
	    // select the content
	    var currentFocus = document.activeElement;
	    target.focus();
	    target.setSelectionRange(0, target.value.length);
	    
	    // copy the selection
	    var succeed;
	    try {
	    	  succeed = document.execCommand("copy");
	    } catch(e) {
	        succeed = false;
	    }
	    // restore original focus
	    if (currentFocus && typeof currentFocus.focus === "function") {
	        currentFocus.focus();
	    }
	    
	    if (isInput) {
	        // restore prior selection
	        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
	    } else {
	        // clear temporary content
	        target.textContent = "";
	    }
	    return succeed;
	}

});
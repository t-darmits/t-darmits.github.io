$(document).ready(function(){
	// equal height for trainings blocks
	;( function( $, window, document, undefined ) {
		var $list       = $( '.train-list' ),
			$items      = $list.find( '.train-block' ),
			setHeights  = function() {
				$items.css( 'height', 'auto' );
				var perRow = Math.floor( $list.width() / $items.width() );
				if( perRow == null || perRow < 2 ) return true;
				for( var i = 0, j = $items.length; i < j; i += perRow ) {
					var maxHeight   = 0,
						$row        = $items.slice( i, i + perRow );
					$row.each( function() {
						var itemHeight = parseInt( $( this ).outerHeight() );
						if ( itemHeight > maxHeight ) maxHeight = itemHeight;
					});
					$row.css( 'height', maxHeight );
				}
			};
		setHeights();
		$(window).on( 'resize', setHeights );
		$list.find( 'img' ).on( 'load', setHeights );
	})(jQuery, window, document);

	// members carousel
	$('.members-carousel').slick({
		dots: false,
		infinite: true,
		slidesToShow: 2,
		arrows: false,
		responsive: [
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.m-left').click(function(){
		$('.members-carousel').slick('slickPrev');
	});

	$('.m-right').click(function(){
		$('.members-carousel').slick('slickNext');
	});

	// wowJS init
	new WOW().init();

});
// map init
function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 40.720511, lng: -73.939341},
		zoom: 17,
		mapTypeControl: false,
		// disableDefaultUI: true,
		scrollwheel: false,
		styles: [
			{
				"featureType":
				"road.highway",
				"elementType":
				"geometry.fill",
				"stylers": [ { "color": "#fa9e24" } ] 
			},
		]
	});

	var image = '../img/pointer.png';

	var marker = new google.maps.Marker({
		position: {lat: 40.720438, lng: -73.939221},
		map: map,
		icon: image
	});

}
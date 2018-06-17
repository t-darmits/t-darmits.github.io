// Custom scroll
$(document).ready(
	function() {
		$("html").niceScroll({
			cursoropacitymin: 1,
			cursorcolor: '#182d2c',
			cursorwidth: '12px',
			cursorborder: 'solid 1px #33605d',
			zindex: '9999',
		});
	}
);
// Focus input (color:icons)
$('.form-control').on('focus', function(){
	$(this).closest('.icons').css('color', '#50bbb1');
}).blur(function(){
		$(this).closest('.icons').css('color', '#3a8881');
});

// Show/hide list in form
$('#show-list').focus(function() {
	$('.change-list').show();
	$(document).bind('focusin.example click.example',function(e) {
		if ($(e.target).closest('.change-list, #show-list').length) return;
		$(document).unbind('.change-list');
		$('.change-list').hide();
	});
});
$('.change-list').hide();

// Slide navigation
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top-80
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});
});

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

// Change placehold in input
		function makeRadioButtons()
		{
			var test = document.getElementsByName("changelist");
			for(var elem in test)
			{
				if(test[elem].checked)
				{
					var bsd = test[elem].value;
					$('#show-list').attr('placeholder', bsd);
				}
			}
		}

// Scroll effects
(function($){
	$.fn.viewportChecker = function(useroptions){
		var options = {
			classToAdd: 'visible',
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
	jQuery('.ico-gear').viewportChecker({
		classToAdd: 'spin-gear',
		offset: 150
	});
	jQuery('.ico-wrench, .ico-clip, .ico-check').viewportChecker({
		classToAdd: 'bounce',
		offset: 150
	});
});
;

// MAP
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
	var image = 'img/mark.png';
	var myLatlng = new google.maps.LatLng(48.508632, 32.245101);
	var mapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(48.509388, 32.245098),
		zoomControl : false,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false,
		scrollwheel: false,

		styles: 
		[ { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "visibility": "off" } ] },
		  { "featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [ { "visibility": "off" } ] },
		  { "elementType": "geometry.fill", "stylers": [ { "color": "#162827" } ] },
		  {"featureType": "administrative","elementType": "labels","stylers": [{ "visibility": "off" }]},
		  { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#284f4a" } ] },
		  { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "color": "#284f4a" } ] },
		  { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "color": "#111f1e" } ] },
		  { "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [ { "color": "#284f4a" }, 
		  { "weight": 1.7 } ] },
		  { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#50bbb1" } ] },
		  { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [ { "color": "#162827" } ] },
		  { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#2f5c59" } ] },
		  { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [ { "color": "#162827" } ] },
		  { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#50bbb1" } ] },
		  { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#50bbb1" } ] },
		  { "featureType": "poi", "elementType": "labels.text.stroke", "stylers": [ { "color": "#162827" } ] },
		  { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#50bbb1" } ] },
		  { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#2a4f4b" } ] } ] 
		};

		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
			
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			animation: google.maps.Animation.DROP,
			icon: image
		});

		function ZoomControl(controlDiv, map) {

			var controlWrapper = document.createElement('div');

			controlWrapper.style.cursor = 'pointer';
			controlWrapper.style.textAlign = 'center';
			controlWrapper.style.width = '126px'; 
			controlWrapper.style.height = '280px';
			controlWrapper.style.margin = '0 0 0 0';
			controlDiv.appendChild(controlWrapper);

			// Set CSS for the zoomIn
			var zoomInButton = document.createElement('div');
			zoomInButton.style.width = '125px'; 
			zoomInButton.style.height = '125px';
			zoomInButton.style.margin = '0 0 30px 0';
			/* Change this to be the .png image you want to use */
			zoomInButton.style.backgroundImage = 'url("img/zoomIn.png")';
			controlWrapper.appendChild(zoomInButton);

			// Set CSS for the zoomOut
			var zoomOutButton = document.createElement('div');
			zoomOutButton.style.width = '125px'; 
			zoomOutButton.style.height = '125px';
			/* Change this to be the .png image you want to use */
			zoomOutButton.style.backgroundImage = 'url("img/zoomOut.png")';
			controlWrapper.appendChild(zoomOutButton);

			// Setup the click event listener - zoomIn
			google.maps.event.addDomListener(zoomInButton, 'click', function() {
				map.setZoom(map.getZoom() + 1);
			});

			// Setup the click event listener - zoomOut
			google.maps.event.addDomListener(zoomOutButton, 'click', function() {
				map.setZoom(map.getZoom() - 1);
			});

		};

	var zoomControlDiv = document.createElement('div');
	var zoomControl = new ZoomControl(zoomControlDiv, map);
	zoomControlDiv.className = "control-map";

	zoomControlDiv.index = 1;
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(zoomControlDiv);

	function OverlayControl(controlDiv, map) {
		var controlUI = document.createElement('div');
		controlUI.style.backgroundColor = 'rgba(255,255,255,0.04)';
		controlDiv.appendChild(controlUI);
	}

	var homeControlDiv = document.createElement('div');
	var homeControl = new OverlayControl(homeControlDiv, map);
	homeControlDiv.className = "overlay-map";

	homeControlDiv.index = 1;
	map.controls[google.maps.ControlPosition.CENTER].push(homeControlDiv);


	function InfoBox(opts) {
		google.maps.OverlayView.call(this);
		this.latlng_ = opts.latlng;
		this.map_ = opts.map;
		this.offsetVertical_ = -155;
		this.offsetHorizontal_ = -33;
		this.height_ = 65;
		this.width_ = 266;
		var me = this;
		this.boundsChangedListener_ =
		google.maps.event.addListener(this.map_, "bounds_changed", function() {
		return me.panMap.apply(me);
		});
		// Once the properties of this OverlayView are initialized, set its map so
		// that we can display it. This will trigger calls to panes_changed and
		// draw.
		this.setMap(this.map_);
		}
		/* InfoBox extends GOverlay class from the Google Maps API
		*/
		InfoBox.prototype = new google.maps.OverlayView();
		/* Creates the DIV representing this InfoBox
		*/
		InfoBox.prototype.remove = function() {
		if (this.div_) {
		this.div_.parentNode.removeChild(this.div_);
		this.div_ = null;
		}
		};
		/* Redraw the Bar based on the current projection and zoom level
		*/
		InfoBox.prototype.draw = function() {
		// Creates the element if it doesn't exist already.
		this.createElement();
		if (!this.div_) return;
		// Calculate the DIV coordinates of two opposite corners of our bounds to
		// get the size and position of our Bar
		var pixPosition = this.getProjection().fromLatLngToDivPixel(this.latlng_);
		if (!pixPosition) return;
		// Now position our DIV based on the DIV coordinates of our bounds
		this.div_.style.width = this.width_ + "px";
		this.div_.style.left = (pixPosition.x + this.offsetHorizontal_) + "px";
		this.div_.style.height = this.height_ + "px";
		this.div_.style.top = (pixPosition.y + this.offsetVertical_) + "px";
		this.div_.style.display = 'block';
		};
		/* Creates the DIV representing this InfoBox in the floatPane. If the panes
		* object, retrieved by calling getPanes, is null, remove the element from the
		* DOM. If the div exists, but its parent is not the floatPane, move the div
		* to the new pane.
		* Called from within draw. Alternatively, this can be called specifically on
		* a panes_changed event.
		*/
		InfoBox.prototype.createElement = function() {
		var panes = this.getPanes();
		var div = this.div_;
		if (!div) {
		// This does not handle changing panes. You can set the map to be null and
		// then reset the map to move the div.
		div = this.div_ = document.createElement("div");
		div.className = "map-popup";
		div.style.border = "solid 2px #50bbb1";
		div.style.borderRadius = "5px";
		div.style.position = "absolute";
		div.style.background = "#182d2c";
		div.style.width = this.width_ + "px";
		div.style.height = this.height_ + "px";
		var contentDiv = document.createElement("div");
		contentDiv.style.padding = "10px"
		contentDiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
		var topDiv = document.createElement("div");
		topDiv.style.textAlign = "center";
		topDiv.style.position = "absolute";
		topDiv.style.right = "7px";
		topDiv.style.top = "7px";
		var closeImg = document.createElement("div");
		closeImg.className = "close-popup";
		closeImg.style.width = "20px";
		closeImg.style.height = "20px";
		closeImg.style.cursor = "pointer";
		closeImg.innerHTML = "<i class='fa fa-times'></i>";
		topDiv.appendChild(closeImg);
		function removeInfoBox(ib) {
		return function() {
		ib.setMap(null);
		};
		}
		google.maps.event.addDomListener(closeImg, 'click', removeInfoBox(this));
		div.appendChild(topDiv);
		div.appendChild(contentDiv);
		div.style.display = 'none';
		panes.floatPane.appendChild(div);
		this.panMap();
		} else if (div.parentNode != panes.floatPane) {
		// The panes have changed. Move the div.
		div.parentNode.removeChild(div);
		panes.floatPane.appendChild(div);
		} else {
		// The panes have not changed, so no need to create or move the div.
		}
		}
		/* Pan the map to fit the InfoBox.
		*/
		InfoBox.prototype.panMap = function() {
		// if we go beyond map, pan map
		var map = this.map_;
		var bounds = map.getBounds();
		if (!bounds) return;
		// The position of the infowindow
		var position = this.latlng_;
		// The dimension of the infowindow
		var iwWidth = this.width_;
		var iwHeight = this.height_;
		// The offset position of the infowindow
		var iwOffsetX = this.offsetHorizontal_;
		var iwOffsetY = this.offsetVertical_;
		// Padding on the infowindow
		var padX = 40;
		var padY = 40;
		// The degrees per pixel
		var mapDiv = map.getDiv();
		var mapWidth = mapDiv.offsetWidth;
		var mapHeight = mapDiv.offsetHeight;
		var boundsSpan = bounds.toSpan();
		var longSpan = boundsSpan.lng();
		var latSpan = boundsSpan.lat();
		var degPixelX = longSpan / mapWidth;
		var degPixelY = latSpan / mapHeight;
		// The bounds of the map
		var mapWestLng = bounds.getSouthWest().lng();
		var mapEastLng = bounds.getNorthEast().lng();
		var mapNorthLat = bounds.getNorthEast().lat();
		var mapSouthLat = bounds.getSouthWest().lat();
		// The bounds of the infowindow
		var iwWestLng = position.lng() + (iwOffsetX - padX) * degPixelX;
		var iwEastLng = position.lng() + (iwOffsetX + iwWidth + padX) * degPixelX;
		var iwNorthLat = position.lat() - (iwOffsetY - padY) * degPixelY;
		var iwSouthLat = position.lat() - (iwOffsetY + iwHeight + padY) * degPixelY;
		// calculate center shift
		var shiftLng =
		(iwWestLng < mapWestLng ? mapWestLng - iwWestLng : 0) +
		(iwEastLng > mapEastLng ? mapEastLng - iwEastLng : 0);
		var shiftLat =
		(iwNorthLat > mapNorthLat ? mapNorthLat - iwNorthLat : 0) +
		(iwSouthLat < mapSouthLat ? mapSouthLat - iwSouthLat : 0);
		// The center of the map
		var center = map.getCenter();
		// The new map center
		var centerX = center.lng() - shiftLng;
		var centerY = center.lat() - shiftLat;
		// center the map to the new shifted center
		map.setCenter(new google.maps.LatLng(centerY, centerX));
		// Remove the listener after panning is complete.
		google.maps.event.removeListener(this.boundsChangedListener_);
		this.boundsChangedListener_ = null;
		}; 

		google.maps.event.addListener(marker, "click", function(e) {
		var infoBox = new InfoBox({latlng: marker.getPosition(), map: map});
		});
		google.maps.event.trigger(marker, "click"); 
}
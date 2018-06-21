// init map 
var map;
function initMap() {
	var myLatLng  = {lat: 55.815341, lng: 37.512734};
	var centerLng = {lat: 55.818054, lng: 37.506711}
	map = new google.maps.Map(document.getElementById('map'), {
		center: centerLng,
		zoom: 15,
		disableDefaultUI: true,
		scrollwheel: false,
		zoomControl: false
	});
	var markerImage = 'img/map-marker.png';
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: markerImage
	});

	var contentString = '<div id="map-content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="firstHeading" class="firstHeading">Москва, Россия, 127299</div>'+
	  '<div id="bodyContent">'+
	  '<p>улица Космонавта Волкова, 6А</p>'+
	  '</div>'+
	  '</div>';

	  var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 280
	  });

	  marker.addListener('click', function() {
		infowindow.open(map, marker);
	  });

	  infowindow.open(map, marker);

	  // map styles
	  var mapStyles = [
		  {
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#eaeeef"
			  }
			]
		  },
		  {
			"elementType": "labels.icon",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#f5f5f5"
			  }
			]
		  },
			{
		    "featureType": "administrative.land_parcel",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#dee4e6"
		      }
		    ]
		  },
		   {
		    "featureType": "landscape",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#aab0b1"
		      },
		      {
		        "visibility": "on"
		      }
		    ]
		  },
		  {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#eeeeee"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "poi.attraction",
			"stylers": [
			  {
				"visibility": "on"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#c1cfd2"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#445f65"
			  }
			]
		  },
		  {
			"featureType": "poi.school",
			"stylers": [
			  {
				"visibility": "on"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#ffffff"
			  }
			]
		  },
		  {
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#d6e0e1"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#a8bbbf"
			  },
			  {
				"weight": 1
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  },
		  {
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#e5e5e5"
			  }
			]
		  },
		  {
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#eeeeee"
			  }
			]
		  },
		  {
			"featureType": "transit.station.airport",
			"stylers": [
			  {
				"visibility": "on"
			  }
			]
		  },
		  {
			"featureType": "transit.station.rail",
			"stylers": [
			  {
				"visibility": "on"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#c1cfd2"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  }
			]
		  }
		]
		map.setOptions({styles: mapStyles});
}
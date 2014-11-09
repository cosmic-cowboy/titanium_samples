var GOOGLE_API_KEY = 'AIzaSyBbK9MVK9fHB2OyoP_uzE7msXJzHi60C6o';

var GOOGLE_BASE_URL = 'http://maps.google.com/maps/api/geocode/json?address=';
var ERROR_MESSAGE = 'There was an error geocoding. Please try again.';

var setGeoData = function (title, latitude, longitude) {
	return {
		title  : title,
		coords : {
			latitude : latitude,
			longitude : longitude
		}
	};
};

exports.forwardGeocode = function (address, callback) {

	var xhr = Ti.Network.createHTTPClient();
	var url = GOOGLE_BASE_URL + address.replace(' ', '+');
	url += "&sensor=" + (Titanium.Geolocation.locationServicesEnabled === true);

	xhr.open('GET', url);
	xhr.onload = function () {
		var json = JSON.parse(this.responseText);
		Ti.API.info(json);
		if(json.status != 'OK'){
			alert('ERROR');
			return false;
		}
		callback(
			setGeoData(
				address,
				json.results[0].geometry.location.lat,
				json.results[0].geometry.location.lng
			)
		);
	};
	xhr.onerror = function (e) {
		Ti.API.error(e.error);
		alert(ERROR_MESSAGE);
	};

	xhr.send();
};
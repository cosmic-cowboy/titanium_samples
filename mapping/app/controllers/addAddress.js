var geo = require('lib/geo');

function searchMap (e) {
	var searchValue = $.textField.value;
	if(searchValue){
		$.textField.blur();
		geo.forwardGeocode(searchValue, function (geodata) {
			// カスタムイベントの呼び出し（発火）
			$.trigger('addAnnotation', {geodata:geodata});
		});
	}
}
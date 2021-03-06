$.map.addEventListener('click', function (e) {
	if(e.annotation && (e.clicksource === 'leftButton' || e.clicksource === 'leftPane')){
		$.map.removeAnnotation(e.annotation);
	}
});

exports.addAnnotation = function (geodata) {
	var annotation = Alloy.createController('annotation', {
		title : geodata.title,
		latitude : geodata.coords.latitude,
		longitude : geodata.coords.longitude
	});

	// アノテーションの設定
	$.map.addAnnotation(annotation.getView());

	// 地図の設定
	$.map.setLocation({
		latitude  : geodata.coords.latitude,
		longitude : geodata.coords.longitude,
		latitudeDelta : 1,
		longitudeDelta : 1
	});
};
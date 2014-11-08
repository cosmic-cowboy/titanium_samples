function searchMap (e) {
	var searchValue = $.textField.value;
	if(searchValue){
		$.textField.blur();
		var geodata = {
			title : "ダミー",
			coords : {
				latitude : Alloy.Globals.LATITUDE_BASE,
				longitude : Alloy.Globals.LONGITUDE_BASE
			}
		};
		// カスタムイベントの呼び出し（発火）
		$.trigger('addAnnotation', {geodata:geodata});
	}
}
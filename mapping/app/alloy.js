var geo = require('lib/geo');

// Tai-pei
Alloy.Globals.LATITUDE_BASE = 25.0391667;
Alloy.Globals.LONGITUDE_BASE = 121.525;

// Mapモジュールの読み込み
if(OS_IOS || OS_ANDROID) {
	Alloy.Globals.Map = Ti.Map = require('ti.map');
}

// 描画領域を下げる
Alloy.Globals.winTop = (OS_IOS && parseInt(Ti.Platform.version, 10) >= 7) ? 20 : 0;

Ti.UI.backgroundColor = "#fff";
var playerVersion;

function init_flash() {
	playerVersion = swfobject.getFlashPlayerVersion();
	isFlashExploitable();
}

function isFlashExploitable() {
	// dummy code
	var v = playerVersion.major + "." + playerVersion.minor + "." + playerVersion.release;
	console.log(v);
}
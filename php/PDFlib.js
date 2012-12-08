var browser_info;

function init_pdf() {
	browser_info = perform_acrobat_detection();
	isPDFExploitable();
}

function isPDFExploitable() {
	// dummy code 
	var v = browser_info.acrobat + " " + browser_info.acrobat_ver;
	console.log(v);
}
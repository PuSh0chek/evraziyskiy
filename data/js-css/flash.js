
function flashEnable(version) {
	if (!isFlash()) return false;
	if (navigator.userAgent.indexOf("MSIE") != -1 && 
		navigator.userAgent.indexOf("Windows") != -1 && 
		navigator.userAgent.indexOf("Opera") == -1) 
		return ieFlashDetect(version);
	return flashDetect(version);
}

function ieFlashDetect(version) {
	try {
        flash = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.' + version);
    } catch (err) {
        return false;
    }
    return flash;
	//window.onerror = function() { return true; }
	//return new ActiveXObject('ShockwaveFlash.ShockwaveFlash.' + version);
}

function flashDetect(version) {
	if (navigator.plugins['Shockwave Flash']) {
		plugin_descr = navigator.plugins['Shockwave Flash'].description;
		return (parseInt(plugin_descr.substring(plugin_descr.indexOf(".") - 2)) >= version) 
	}
	return false
}

function isFlash() {
	return !(navigator.userAgent.indexOf("iCab") != -1 || navigator.userAgent.indexOf("MSIE 3") != -1);
}


function recode_foreign_letters(str) {
	var new_str = '';
	// charset_cookie = get_cookie('charset');
	//charset_cookie = 'Latin-1';
	for (var i =0; i<str.length;i++) {
		var code = str.charCodeAt(i);
		// alert(code + ':' + String.fromCharCode(code));
		if (code > 255 && (code < 0x0410 || code > 0x044F)) { // 255
			new_str += '&#' + code +';';
		} else {
			// charset_cookie == 'Latin-1' && 
			if (code >= 160 && code <=255 ) { // ((code >=192 && code <=214) || (code >= 216 && code <=246) || (code >= 248 && code <=255))
				new_str += accented_table[code - 160]; //  recode_accented_chars(code);
			} else {
				new_str += String.fromCharCode(code);
			}
		}
	}
	// alert(new_str);
	return(new_str);
}

function recode_all_fields() {	
	count = 0;
	for (var i = 0; i < document.all.length; i++) {
		var el = document.all[i];
		if (el.tagName == 'INPUT' && (el.type == 'hidden' || el.type == 'text')) {
			el.value = recode_foreign_letters(el.value);
		} else if (el.tagName == 'TEXTAREA') {
			el.text = recode_foreign_letters(el.text);
		}
	}
}

function get_cookie(name) {
	var cookie_name = name + "=";
	var pos = document.cookie.indexOf(cookie_name);	
	if (pos != -1) {
		offset = pos + cookie_name.length;
		var endstr = document.cookie.indexOf(";", offset);
		if (endstr == -1) endstr = document.cookie.length;
		return document.cookie.substring(offset, endstr);
	}
   	return '';
}

// 192 - 214
// var accented_table1 = new Array('&Agrave;', '&Aacute;', '&Acirc;', '&Atilde;', '&Auml;', '&Aring;', '&AElig;', '&Ccedil;', '&Egrave;',
//					'&Eacute;', '&Ecirc;', '&Euml;', '&Igrave;', '&Iacute;', '&Icirc;', '&Iuml;', '&ETH;', '&Ntilde;', '&Ograve;', 
//					'&Oacute;', '&Ocirc;', '&Otilde;', '&Ouml;');
					
// 216 - 246
// var accented_table2 = new Array('&Oslash;', '&Ugrave;', '&Uacute;', '&Ucirc;', '&Uuml;', '&Yacute;', '&THORN;', '&szlig;', '&agrave;', 
//					'&aacute;', '&acirc;', '&atilde;', '&auml;', '&aring;', '&aelig;', '&ccedil;', '&egrave;', '&eacute;', '&ecirc;', 
//					'&euml;', '&igrave;', '&iacute;', '&icirc;', '&iuml;', '&eth;', '&ntilde;', '&ograve;', '&oacute;', '&ocirc;', '&otilde;', '&ouml;');

// 248-255
// var accented_table3 = new Array('&oslash;', '&ugrave;', '&uacute;', '&ucirc;', '&uuml;', '&yacute;', '&thorn;', '&yuml;');


var accented_table = new Array('&nbsp;', '&iexcl;', '&cent;', '&pound;', '&curren;', '&yen;', '&brvbar;', '&sect;', '&uml;', '&copy;', '&ordf;', '&laquo;', '&not;', '&shy;', '&reg;', '&macr;', '&deg;', '&plusmn;', '&sup2;', '&sup3;', '&acute;', '&micro;', '&para;', '&middot;', '&cedil;', '&sup1;', '&ordm;', '&raquo;', '&frac14;', '&frac12;', '&frac34;', '&iquest;', '&Agrave;', '&Aacute;', '&Acirc;', '&Atilde;', '&Auml;', '&Aring;', '&AElig;', '&Ccedil;', '&Egrave;', '&Eacute;', '&Ecirc;', '&Euml;', '&Igrave;', '&Iacute;', '&Icirc;', '&Iuml;', '&ETH;', '&Ntilde;', '&Ograve;', '&Oacute;', '&Ocirc;', '&Otilde;', '&Ouml;', '&times;', '&Oslash;', '&Ugrave;', '&Uacute;', '&Ucirc;', '&Uuml;', '&Yacute;', '&THORN;', '&szlig;', '&agrave;', '&aacute;', '&acirc;', '&atilde;', '&auml;', '&aring;', '&aelig;', '&ccedil;', '&egrave;', '&eacute;', '&ecirc;', '&euml;', '&igrave;', '&iacute;', '&icirc;', '&iuml;', '&eth;', '&ntilde;', '&ograve;', '&oacute;', '&ocirc;', '&otilde;', '&ouml;', '&divide;', '&oslash;', '&ugrave;', '&uacute;', '&ucirc;', '&uuml;', '&yacute;', '&thorn;', '&yuml;');

function recode_accented_chars(code) {
	// if (code >= 192 && code <=214) {
	//	return accented_table1[code - 192];
	// } else if (code >= 216 && code <=246) {
	//	return accented_table2[code - 216];
	// } else {
	//	return accented_table3[code - 248];
	// }
	// return String.fromCharCode(code);
	return accented_table[code - 160];
}
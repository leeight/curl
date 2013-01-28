/** MIT License (c) copyright B Cavalier & J Hann */

/**
 * curl text! loader plugin
 *
 * Licensed under the MIT License at:
 * 		http://www.opensource.org/licenses/mit-license.php
 */

/**
 * TODO: load xdomain text, too, somehow
 *
 */

define(/*=='curl/plugin/text',==*/
['./_fetchText', 'curl/_privileged', 'er/template'],
function (fetchText, priv, template) {

	return {

		'normalize': function (resourceId, toAbsId) {
			// remove options
			return resourceId ? toAbsId(resourceId.split("!")[0]) : resourceId;
		},

		load: function (resourceName, req, callback, config) {
			// remove suffixes (future)
			// get the text
			fetchText(req['toUrl'](resourceName), function(text){
				template.parse(text);
				
				var uiDeps = [];
				var uiMaps = {};
				var uiPattern = /ui=['"]type:([a-zA-Z0-9_]+)/g;
				var match = [];
				while(match = uiPattern.exec(text)) {
					if (!uiMaps[match[1]]) {
						// FIXME 可能的格式是jn.ui.FooBar或者ui.FooBar
						uiDeps.push('ui/' + match[1]);
						uiMaps[match[1]] = true;
					}
				}
				if (uiDeps.length) {
					priv._curl(uiDeps, function(){
						callback(text);
					})
				} else {
					callback(text);
				}
			}, callback['error'] || error);
		},

		'cramPlugin': '../cram/text'

	};

	function error (ex) {
		throw ex;
	}

});

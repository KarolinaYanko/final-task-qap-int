(function(){
	'use strict';
	document.addEventListener('DOMContentLoaded', function(){
		setTimeout(function(){
			document.getElementsByTagName('article')[0].classList.add('animated');
		}, 200);
		// ['tap', 'hold', 'swipeleft', 'swiperight', 'swipeup', 'swipedown'].forEach(function(eventName){
		// 	customEvents[eventName] = document.createEvent('UIEvents');
		// 	customEvents[eventName].initEvent(eventName, true, true);
		// }
	});
})();
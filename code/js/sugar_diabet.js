(function(){
	'use strict';
	document.addEventListener('DOMContentLoaded', function(){
		setTimeout(function(){
			document.getElementsByTagName('article')[2].classList.add('animated');
		}, 200);
	});
})();
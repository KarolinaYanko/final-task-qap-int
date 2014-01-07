(function(){
	'use strict';
	document.addEventListener('DOMContentLoaded', function(){
		setTimeout(function(){
			document.getElementsByTagName('article')[0].classList.add('animated');
			document.getElementsByTagName('article')[1].classList.add('animated');

		}, 200);
	});
})();
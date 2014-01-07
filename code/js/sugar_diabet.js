(function(){
	'use strict';
	document.addEventListener('DOMContentLoaded', function(){
		var menu = document.getElementById('main-menu'),
			openMenu = document.getElementsByClassName('menu-open')[0];
		openMenu.addEventListener('click', function(){
			menu.classList.add('active');
		});
		setTimeout(function(){
			document.getElementsByTagName('article')[0].classList.add('animated');
		}, 200);
	});
})();
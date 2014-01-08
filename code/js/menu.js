(function(){
	'use strict';
	var menu = document.getElementById('main-menu'),
		openMenu = document.getElementsByClassName('menu-open')[0];
	openMenu.addEventListener('click', function(){
		menu.classList.toggle('active');
	},false);
})();
(function(){
	'use strict';
	var menu = document.getElementById('main-menu'),
		openMenu = document.getElementsByClassName('menu-open')[0],
		sugar_thumb = document.getElementsByClassName('menu-thumb')[0],
		ukraine_thumb = document.getElementsByClassName('menu-thumb')[1],
		tablets_thumb = document.getElementsByClassName('menu-thumb')[2],
		presentation = document.getElementById('presentation'),
		i = document.getElementById('indicators');

	openMenu.addEventListener('click', function(){
		menu.classList.add('active');
	},false);

	sugar_thumb.addEventListener('click', function(){
		presentation.classList.add('first');
		presentation.classList.remove('second');
		presentation.classList.remove('third');
		menu.classList.remove('active');
		i.children[0].checked = true;
	}, false);

	ukraine_thumb.addEventListener('click', function(){
		presentation.classList.remove('first');
		presentation.classList.remove('third');
		presentation.classList.add('second');
		menu.classList.remove('active');
		i.children[1].checked = true;
	}, false);

	tablets_thumb.addEventListener('click', function(){
		presentation.classList.remove('first');
		presentation.classList.remove('second');
		presentation.classList.add('third');
		menu.classList.remove('active');
		i.children[2].checked = true;
	}, false);
})();
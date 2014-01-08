(function(){
	'use strict';
	var customEvents = ['swipeleft', 'swiperight','slideEnter','slideLeave'],
	slides = ['sugar_diabet', 'the_prevalence_of_diabetes', 'tablets'];
	document.addEventListener('DOMContentLoaded', function(){
		var move = document.getElementsByClassName('move')[0],
			slideWrap = document.getElementsByClassName('slideWrap')[0];
		move.addEventListener('click', function(){
			console.log(1);
			slideWrap.classList.toggle('second');
			document.getElementsByTagName('article')[1].classList.add('animated');
		}, false);
		setTimeout(function(){
			document.getElementsByTagName('article')[0].classList.add('animated');
		}, 200);
		customEvents.forEach(function(eventName){
			customEvents[eventName] = document.createEvent('UIEvents');
			customEvents[eventName].initEvent(eventName, true, true);
		});
	});
})();
$(document).ready(function() {

	var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap'),
			$menuButton = $('.menu');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open'); //refereert aan .button-open in CSS
		$menuWrap.toggleClass('menu-show'); //refereert aan .menu-show in CSS
		$menuButton.toggleClass('menu-open'); //refereert aan .menu-open in CSS
		console.log($(this));
	});

});

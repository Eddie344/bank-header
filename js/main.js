$( document ).ready(function() {
	$( ".side-menu__item .item-top" ).click(function() {
		$(this).next().slideToggle(250);
		$(this).find(".item-top__show-dropdown").toggleClass("item-top__dropdown-rotate");
	  });
	$( ".side-menu__top .close" ).click(function() {
		$( ".side-menu" ).toggleClass("side-menu__show");
		$( ".side-menu" ).toggleClass("side-menu__wrapper-dark");
	});
	$( ".head-mob-menu .top-menu-open-btn" ).click(function() {
		$( ".side-menu" ).toggleClass("side-menu__show");
		$( ".side-menu" ).toggleClass("side-menu__wrapper-dark");
	});
});
jQuery(document).ready(function(){
	$('.header-nav .products').click(function(){
		$('.sub-menu').slideToggle('fast');
		return false;
	});
});

jQuery(document).ready(function(){
	$('.header-nav .main-btn').click(function(){
		$('.sub-menu').slideUp('fast');
	});
});

jQuery(document).ready(function(){
	$('.header-top-wrap .dd-menu-btn').click(function(){
		$('.header-nav').slideToggle('fast');
	});
});

jQuery(document).ready(function(){
	$('.header-top-wrap .dd-menu-btn').click(function(){
		$('.sub-menu').hide();
	});
});

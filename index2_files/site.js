$(document).ready(function() {
	headerBackdrop();
	slideMobileNav();

	$(window).scroll(function(){
		headerBackdrop();
		stickySocial();
	})
});

function headerBackdrop() {
	if($(window).scrollTop() > 100) {
		$("header").addClass("backdrop-active");
	} else {
		$("header").removeClass("backdrop-active");
	}
}

function slideMobileNav() {
	$('.nav__button--mobile').click(function(){
		$("html").toggleClass("mobile-nav-active");
		$(this).toggleClass('active');
		$('.nav--mobile').toggleClass('active');
		$('main').toggleClass('main--mobile-nav-active');
		$('header').toggleClass('header--mobile-nav-active');
	});
}

function stickySocial() {
	if ($(window).scrollTop() > 600) {
		$(".social-icons--blog-listing").addClass("social-icons--blog-listing--sticky");
	}
	else {
		$(".social-icons--blog-listing").removeClass("social-icons--blog-listing--sticky");
	}
}
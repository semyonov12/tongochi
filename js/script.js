$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__list').toggleClass('active');
		$('.hidden').toggleClass('shadow');
		$('.header__buttons').toggleClass('nn');
		$('body').toggleClass('lock');
	});

	$('.header__link').click(function (event) {
		$('.hidden').removeClass('shadow');
		$('body').removeClass('lock');
		$('.header__burger,.header__list').removeClass('active');
		$('.header__buttons').removeClass('nn');
	});

	$('.lg-header__btn').click(function (event) {
		$('.lg-header__list').toggleClass('lg-header__list-act');
	});

	$('.win__slider').slick({
		slidesToShow: 3,
		arrows: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

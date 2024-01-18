$('.menu__btn').click(function(){
  $('.menu__list').toggleClass('menu__list--active');
  $('.menu__btn').toggleClass('menu__btn--active');
});

$(".menu a").on("click", function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body, html').animate({scrollTop: top}, 1500);
  $('.menu__list').removeClass('menu__list--active');
  $('.menu__btn').removeClass('menu__btn--active');
});

$('.slider-blog__inner').slick({
  dots: true,
  nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="next arrow"></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="next arrow"></button>',
  responsive: [
    {
      breakpoint: 651,
      settings: {
        arrows: false
      }
    }
  ]
});
var mixer = mixitup('.portfolio__gallery');

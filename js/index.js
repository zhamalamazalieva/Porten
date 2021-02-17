$('.saison__slider').slick({
  dots:true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  responsive:[{
    breakpoint:1024,
    settings:{
      slidesToShow: 2,
      slidesToScroll: 1,
      dots:true
    }}]
  });
          
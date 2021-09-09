$(document).ready(function(){
  $('.vertical-slider').slick({
    infinite: true,
    nav: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    /*initialSlide: 0,*/
    waitForAnimate: false,
    vertical: true,
    allowPageScroll: "vertical",
    asNavFor: ".big-slider",
    responsive: [
    {
      breakpoint: 561,
      settings: {
        slidesToShow: 3,
        vertical: false,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        vertical: false,
      }
    }
  ]
  });

  $('.big-slider').slick({
     infinite: true,
     nav: false,
     arrows: false,
     fade: true,
     asNavFor: ".vertical-slider",
         responsive: [
    {
      breakpoint: 361,
      settings: {
        nav: true,
        arrows: true
      }
    }
  ]
  });
});


const $ls = $(".vertical-slider");
const $bs = $(".big-slider");

$(".vertical-slider .slider-item").on("click", function() {
  const index = $(this).attr("data-slick-index");
  $bs.slick("slickGoTo", index);
  //$ls.slick("slickGoTo", index);
});
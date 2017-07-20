$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000;
    arrows: false;
    draggable: false;
    pauseOnFocus: false;
    pauseOnHover: false;
    slidesPerRow: 4;
    slidesToShow: 1;
  });
  var scrollDistance = 0; 
  $(".navbar").scroll();
  var scrollPosition = $(this).scrollTop();
  
  if (scrollPosition - scrollDistance > 50 ) {
  var navbarHeight = $(".navbar").css("height");
  $(".navbar").animate({top: "-" + navbarHeight}, 150);
  scrollPosition = scrollDistance;
  } else {
  $(."navbar").css("top").animate( 0px, 150);
  scrollPosition = scrollDistance;
};
});


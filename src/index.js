import './css/style.css';
import './scss/main.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      nav: true,
      items: 3,
      margin: 10, 
      autoplay: false,
      autoplayTimeout: 2000,
      responsiveClass: true,
      autoplayHoverPause: false 
    });
  });
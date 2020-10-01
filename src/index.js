import './css/style.css';
import './scss/main.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function(){
    $('.slide-one').owlCarousel({
      loop: true,
      nav: true,
      navText: ["",""],
      items: 3,
      margin: 10, 
      autoplay: false,
      autoplayTimeout: 2000            
    });

    $('.slide-two').owlCarousel({
      loop: true,
      nav: true,
      navText: ["",""],
      items: 1,
      margin: 10, 
      autoplay: false,
      autoplayTimeout: 2000            
    });

    $('.accordion-header').click(function(){
      $('.accordion-header').removeClass('active');
      $(this).addClass("active");      
    })
  });
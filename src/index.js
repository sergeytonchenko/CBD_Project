import './css/style.css';
import './scss/main.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'jquery';
import 'jquery-validation';

$(document).ready(function(){

  //page-anchor show
  $(window).scroll(function() {
    if ($(this).scrollTop()>=100) {      
      $('.page-anchor').fadeIn('slow','linear');
    }
    else {      
      $('.page-anchor').fadeOut('fast','swing');
    }
  });

  //page-anchor
  $('.page-anchor').click(function(){        
    $('html,body').animate({ 
      scrollTop: $('.header').offset().top}, 700);
    });

  //cart
  let number = 0;
  $('.product-block__btn').click(function(){
    number++;
    $(this).attr("disabled", true);
    $(this).text('in cart');
    $('.cart').text(`(${number})`);            
  });

  //slider-one
  $('.slide-one').owlCarousel({
    loop: true,
    nav: true,
    navText: ["",""],
    items: 3,
    margin: 10, 
    autoplay: false,
    autoplayTimeout: 2000            
  });

  //slider-two
  $('.slide-two').owlCarousel({
    loop: true,
    nav: true,
    navText: ["",""],
    items: 1,
    dots: false,
    margin: 10, 
    autoplay: false,
    autoplayTimeout: 2000            
  });

  //accordion
  $('.accordion-header').click(function(){
    $('.accordion-header').removeClass('active');
    $(this).addClass("active");      
  });

  //anchors
  $('a[href^="#"]').click(function(){ 
    let anchor = $(this).attr('href'); 
    $('html, body').animate({ 
    scrollTop: $(anchor).offset().top 
    }, 800); 
    });
    
  //tabs  
  $('.content').hide();
  $('.content:first').show();
  $('.about__tabs li:first').addClass('item-active');

  $('.about__tabs li').click(function(event) {
    $('.about__tabs li').removeClass('item-active');      
    $(this).addClass('item-active');
    $('.content').hide();
    
    let selectContent = $(this).attr("id");      
    $(selectContent).fadeIn();    
  });

  //validate email
  $('.form-box').validate({
    rules: {        
      user_email: {
        required: true,
        email: true
      }
    },
    messages: {        
      user_email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

  });
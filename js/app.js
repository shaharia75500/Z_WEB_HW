

$(function () {
   'use strict'
   $('.bannerSlider').slick ({
      prevArrow : '<i class="fa-solid fa-circle-chevron-left slider_arrow_left"></i>',
      nextArrow : '<i class="fa-solid fa-circle-chevron-right slider_arrow_right"></i>',
      dots : true,
      dotsClass : 'banner_dots',
      draggable : true,
   });
   // to hide Back to Top button
   $('#backToTop').hide();
   
   $(window).on('scroll', function(){
      var scrollsize = $(this).scrollTop();

      // To show/hide back to top button
      if(scrollsize > 500 ) {
         $('#backToTop').show();
      }else {
         $('#backToTop').hide();
      }

      // Fixed menu
      if(scrollsize > 50){
      $('.navbar').addClass('active')
      }else{
      $('.navbar').removeClass('active')
      }
      
   });

   $('#backToTop').on('click', function() {
      $('html, body').animate({
         scrollTop: 0
      }, 900)
   });
  // back to top ends here
   
   $('.count').counterUp({
   delay: 30,
   time: 1000,
   });

   // initializing filterizer js
   $('.gallery-filter-container').filterizr();

   var selector = '#gallery-filter-control li';

   // CODE EXPLANATION
   // At first it removes all active class and 
   // then it adds active class to the clicked list item
   $(selector).on('click', function(){
      $(selector).removeClass('active');
      $(this).addClass('active');
   });

});
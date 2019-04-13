$(document).ready(function() {

  // Mobile Navigation Functionality

  $('#mob-menu,#mob-close').click(function() {
    $('#mob-menu,#mob-close').toggle();
    $('.custom-navigation #nav-links').toggleClass('visible');
    $('#hero #hero-text').toggleClass('visible');
  });
});

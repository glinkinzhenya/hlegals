$('.navbar-hamburger').click(function () {
  $(this).toggleClass('open');
  // $('.navbar__list').toggleClass('open');

  $('.navbar__list').stop(true, true).slideToggle(500);

});
$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
    $('.marginalia-left').fadeOut(275);
    $('.marginalia-right').fadeOut(275);
  }
  else {
    $('.marginalia-left').fadeIn(275);
    $('.marginalia-right').fadeIn(275);
  }
});

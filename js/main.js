(function() {
  $('a.nav-link').click(function() {
    $('a.nav-link').removeClass("active");
    return $(this).addClass("active");
  });

  smoothScroll.init({
    speed: 900,
    offset: 130
  });

}).call(this);

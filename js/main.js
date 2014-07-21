(function() {
  $('a.nav-link').click(function() {
    $('a.nav-link').removeClass("active");
    return $(this).addClass("active");
  });

  smoothScroll.init({
    speed: 900,
    offset: 90
  });

}).call(this);

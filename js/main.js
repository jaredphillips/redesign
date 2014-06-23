(function() {
  $('a.nav-link').click(function() {
    $('a.nav-link').removeClass("active");
    return $(this).addClass("active");
  });

}).call(this);

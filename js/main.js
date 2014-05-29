(function() {
	$('.footer-link').click(function() {
	  $('.footer-link').removeClass("active");
	  return $(this).addClass("active");
	});

	$('.entry').click(function() {
		$('p.article').removeClass("show");
		return $('p.article', this).addClass("show");
	});
}).call(this);
(function() {
	$('.footer-link').click(function() {
	  $('.footer-link').removeClass("active");
	  return $(this).addClass("active");
	});

	$("p.toggle-button").click(function() {
		var text = $(this).parent().children(".article").is(':visible') ? 'Read' : 'Close';
		$(this).parent().children("p.toggle-button").text(text);
    $(this).parent().children(".article").slideToggle();
	});


}).call(this);
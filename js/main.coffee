$('a.nav-link').click ->
	$('a.nav-link').removeClass("active")
	$(@).addClass("active")

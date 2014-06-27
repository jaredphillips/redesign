$('a.nav-link').click ->
	$('a.nav-link').removeClass("active")
	$(@).addClass("active")

smoothScroll.init({ speed: 900, offset: 90 })

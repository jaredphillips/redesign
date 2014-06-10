$('.nav-link').click ->
	$('.nav-link').removeClass("active")
	$(@).addClass("active")
	# This doesn't work yet

$("p.toggle-button").click ->
  text = (if $(this).parent().children(".article").is(":visible") then "Read" else "Close")
  $(this).parent().children("p.toggle-button").text text
  $(this).parent().children(".article").slideToggle()
  return
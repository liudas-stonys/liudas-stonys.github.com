$(document).ready(function() {
    if ($(window).width() < 768) {
        var offset = 50;
    }
    else {
    	var offset = 69;
    }

    $('.anchor').on('click', function() {
	    $('html, body').animate( {
	        scrollTop: $(this.hash).offset().top - offset
	    }, 300, function() {
	    });
	});

	$('#submit').on('click', function(e) {
	    e.preventDefault();
	})
});
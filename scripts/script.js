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
		// e.preventDefault();
		// sendEmail();
	})
});

// document.getElementById("contactForm").onsubmit = () => {
// 	alert(document.getElementById("message").value);
// }

sendEmail = () => {
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "liudas.stonys@gmail.com",
		Password : "504270ff-8cc6-42ed-953f-b155a81ecd7d",
		To : "liudas.stonys@gmail.com",
		From : "liudas.stonys@gmail.com",
		Subject : "liudas-stonys.github.io | " + document.getElementById("name").value + " | " + document.getElementById("email").value + " | " + document.getElementById("phone").value,
		Body : document.getElementById("message").value
	}).then(
		message => alert(message)
	);
}


// Google API key
// key=AIzaSyBH5Z3b_LOFktStwGRaUruZZDD_tFzv2Yc

// Client ID
// 318020525394-qmdcbpn2g6m0tqo6sb118m5kf02hvi31.apps.googleusercontent.com

// Client secret
// ipU8D8nA-wkuwZKk1EfgChNk
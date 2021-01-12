// (function() {
// 	if (window.innerWidth < 760) {
// 		var offset = 50;
// 	} else {
// 		var offset = 69;
// 	}
	
// 	document.getElementsByClassName("anchor").addEventListener("click", 
// 		$("html").animate({
// 	        scrollTop: $(this.hash).offset().top - offset
// 		}, 300)
// 	)
//  })();
 
 $(document).ready(function() {
    if ($(window).width() < 760) {
        var offset = 50;
    }
    else {
    	var offset = 69;
    }

    $('.anchor').on('click', function() {
	    $('html').animate({
	        scrollTop: $(this.hash).offset().top - offset
	    }, 300);
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
		Username: "liudas.stonys@gmail.com",
		Password: "4205144A8985CA4F5F36AD9C5F615A7B7E59",
		Host: "smtp.elasticemail.com",
		Server: "smtp.elasticemail.com",
		Port: "2525",
		To: "liudas.stonys@gmail.com",
		From: "liudas.stonys@smtp.elasticemail.com",
		Subject: "liudas-stonys.github.io | " + document.getElementById("name").value + " | " + document.getElementById("email").value + " | " + document.getElementById("phone").value,
		Body: document.getElementById("message").value
	}).then(
		message => {
			if (message == "OK") {
				document.getElementById("contactMe").classList.add("hidden");
				document.getElementById("contacted").classList.remove("hidden");
			}
		});
	}

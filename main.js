// Offsetting achor link landing position
$('.anchor').on('click', function() {
    $('html, body').animate( {
        scrollTop: $(this.hash).offset().top - 80
    }, 300, function() {
    });
});

$('#submit').on('click', function(e) {
    e.preventDefault();
})

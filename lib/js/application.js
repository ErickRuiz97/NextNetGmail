$(document).ready(function () {
    
    //efecto smooth para los enlaces
    $("#services div.row h4.service-heading a").click(function (event) {
        event.preventDefault()
        $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 600);
    })

});
$(document).ready(function () {
    //// navegacion con el navbar
    $("nav li.nav-item").click(function (element){
        $('nav li.active').removeClass('active')
        $(element.currentTarget).addClass('active');
    });
    //efecto smooth para los enlaces
    $("li.nav-item a.nav-link").click(function (event) {
        event.preventDefault()
        $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 600);
    })

});
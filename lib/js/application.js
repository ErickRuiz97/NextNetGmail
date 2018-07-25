$(document).ready(function () {
    //// navegacion con el navbar
    $("nav li.nav-item").click(function (element){
        $('nav li.active').removeClass('active')
        $(element.currentTarget).addClass('active');
    });
});
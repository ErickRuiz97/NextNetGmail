$(document).ready(function () {
    new WOW().init();
    //efecto smooth para los enlaces
    $("#services div.row h4.service-heading a").click(function (event) {
        event.preventDefault()
        $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 600);
    })
    $("section#about").focusin(function(event) {
        console.log('algo');
    });

    ///carucel
    $(document).ready(function() {
        $("#myCarousel").on("slide.bs.carousel", function(e) {
          var $e = $(e.relatedTarget);
          var idx = $e.index();
          var itemsPerSlide = 3;
          var totalItems = $(".carousel-item").length;
      
          if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
              // append slides to end
              if (e.direction == "left") {
                $(".carousel-item")
                  .eq(i)
                  .appendTo(".carousel-inner");
              } else {
                $(".carousel-item")
                  .eq(0)
                  .appendTo($(this).find(".carousel-inner"));
              }
            }
          }
        });
      });
      

    //fin carucel


});
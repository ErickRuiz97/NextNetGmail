import options from './models/navigation.js';
import team from './models/team-work.js';
import Team from './render/team.js';

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

    $("#btn_add_action").click(function (event) {
        $("#chat-room").fadeToggle(300)
    })

    $("#enviarf").click(function (event){

        console.log($('#formulario').serialize())
            $.ajax({
        url: "scripts/SendMail2.php",
        method: "POST",
        data: $('#formulario').serialize(),
        success: function(respuesta){
            console.log(respuesta)
            let timerInterval
                            swal({
                  title: 'Wait a momento',
                  html: 'Loading... <strong></strong>.',
                  timer: 3000,
                  onOpen: () => {
                    swal.showLoading()
                  },
                  onClose: () => {
                    clearInterval(timerInterval)
                  }
                }).then((result) => {
                  if (
                    // Read more about handling dismissals
                    result.dismiss === swal.DismissReason.timer
                  ) {
                    console.log('I was closed by the timer')
                    swal("Good job!", "Your message has been sent successfully!", "success");
                  }
                })

        },
        error : function() {
            Swal({
                type: 'error',
                title: "Message haven't been sent",
                text:"Can't connect with server",
                timer: 3000
            })
        }

});
    })



    var chat = $("#chat-body");
    var message = $("#inp-chat-container")
    /*$("#btn-chat-send").click(function (event) {
        if (!(message.val().length >= 1))
            return

        let span = document.createElement('div')
        span.setAttribute('class', 'card')
        let body = document.createElement('div')
        body.setAttribute('class', 'card-body')
        let name = document.createElement('h6')

        span.appendChild(document.createTextNode(message.val()))
        chat.append(span)
        console.log(span)

        <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">You</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        
                      </div>
                    </div>

    })*/


    render_team();
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

function render_team(){
    let container = $("#team-container");
    let fragment = document.createDocumentFragment()
    for (let o of team){
        fragment.appendChild(new Team(o).build_element())
    }
    let aux_class = fragment.firstChild.getAttribute('class')
    fragment.firstChild.setAttribute('class', `${aux_class} active`)
    container.append(fragment)

    
}


